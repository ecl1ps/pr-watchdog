/**
 * Represents all the data associated with a pull request.
 */
export interface GitPullRequest {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * A string which uniquely identifies this pull request. To generate an artifact ID for a pull request, use this template: ```vstfs:///Git/PullRequestId/{projectId}/{repositoryId}/{pullRequestId}```
     */
    artifactId: string;
    /**
     * If set, auto-complete is enabled for this pull request and this is the identity that enabled it.
     */
    autoCompleteSetBy: IdentityRef;
    /**
     * The user who closed the pull request.
     */
    closedBy: IdentityRef;
    /**
     * The date when the pull request was closed (completed, abandoned, or merged externally).
     */
    closedDate: Date;
    /**
     * The code review ID of the pull request. Used internally.
     */
    codeReviewId: number;
    /**
     * The commits contained in the pull request.
     */
    commits: GitCommitRef[];
    /**
     * Options which affect how the pull request will be merged when it is completed.
     */
    completionOptions: GitPullRequestCompletionOptions;
    /**
     * The most recent date at which the pull request entered the queue to be completed. Used internally.
     */
    completionQueueTime: Date;
    /**
     * The identity of the user who created the pull request.
     */
    createdBy: IdentityRef;
    /**
     * The date when the pull request was created.
     */
    creationDate: Date;
    /**
     * The description of the pull request.
     */
    description: string;
    /**
     * If this is a PR from a fork this will contain information about its source.
     */
    forkSource: GitForkRef;
    /**
     * Draft / WIP pull request.
     */
    isDraft: boolean;
    /**
     * The labels associated with the pull request.
     */
    labels: WebApiTagDefinition[];
    /**
     * The commit of the most recent pull request merge. If empty, the most recent merge is in progress or was unsuccessful.
     */
    lastMergeCommit: GitCommitRef;
    /**
     * The commit at the head of the source branch at the time of the last pull request merge.
     */
    lastMergeSourceCommit: GitCommitRef;
    /**
     * The commit at the head of the target branch at the time of the last pull request merge.
     */
    lastMergeTargetCommit: GitCommitRef;
    /**
     * If set, pull request merge failed for this reason.
     */
    mergeFailureMessage: string;
    /**
     * The type of failure (if any) of the pull request merge.
     */
    mergeFailureType: PullRequestMergeFailureType;
    /**
     * The ID of the job used to run the pull request merge. Used internally.
     */
    mergeId: string;
    /**
     * Options used when the pull request merge runs. These are separate from completion options since completion happens only once and a new merge will run every time the source branch of the pull request changes.
     */
    mergeOptions: GitPullRequestMergeOptions;
    /**
     * The current status of the pull request merge.
     */
    mergeStatus: PullRequestAsyncStatus;
    /**
     * The ID of the pull request.
     */
    pullRequestId: number;
    /**
     * Used internally.
     */
    remoteUrl: string;
    /**
     * The repository containing the target branch of the pull request.
     */
    repository: GitRepository;
    /**
     * A list of reviewers on the pull request along with the state of their votes.
     */
    reviewers: IdentityRefWithVote[];
    /**
     * The name of the source branch of the pull request.
     */
    sourceRefName: string;
    /**
     * The status of the pull request.
     */
    status: PullRequestStatus;
    /**
     * If true, this pull request supports multiple iterations. Iteration support means individual pushes to the source branch of the pull request can be reviewed and comments left in one iteration will be tracked across future iterations.
     */
    supportsIterations: boolean;
    /**
     * The name of the target branch of the pull request.
     */
    targetRefName: string;
    /**
     * The title of the pull request.
     */
    title: string;
    /**
     * Used internally.
     */
    url: string;
    /**
     * Any work item references associated with this pull request.
     */
    workItemRefs: ResourceRef[];
}

export interface IdentityRef extends GraphSubjectBase {
    directoryAlias: string;
    id: string;
    imageUrl: string;
    inactive: boolean;
    isAadIdentity: boolean;
    isContainer: boolean;
    isDeletedInOrigin: boolean;
    profileUrl: string;
    uniqueName: string;
}

export interface GraphSubjectBase {
    /**
     * This field contains zero or more interesting links about the graph subject. These links may be invoked to obtain additional relationships or more detailed information about this graph subject.
     */
    _links: any;
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor: string;
    /**
     * This is the non-unique display name of the graph subject. To change this field, you must alter its value in the source provider.
     */
    displayName: string;
    /**
     * This url is the full route to the source resource of this graph subject.
     */
    url: string;
}

/**
 * Provides properties that describe a Git commit and associated metadata.
 */
export interface GitCommitRef {
    /**
     * A collection of related REST reference links.
     */
    _links: any;
    /**
     * Author of the commit.
     */
    author: GitUserDate;
    /**
     * Counts of the types of changes (edits, deletes, etc.) included with the commit.
     */
    changeCounts: ChangeCountDictionary;
    /**
     * An enumeration of the changes included with the commit.
     */
    changes: GitChange[];
    /**
     * Comment or message of the commit.
     */
    comment: string;
    /**
     * Indicates if the comment is truncated from the full Git commit comment message.
     */
    commentTruncated: boolean;
    /**
     * ID (SHA-1) of the commit.
     */
    commitId: string;
    /**
     * Committer of the commit.
     */
    committer: GitUserDate;
    /**
     * An enumeration of the parent commit IDs for this commit.
     */
    parents: string[];
    /**
     * The push associated with this commit.
     */
    push: GitPushRef;
    /**
     * Remote URL path to the commit.
     */
    remoteUrl: string;
    /**
     * A list of status metadata from services and extensions that may associate additional information to the commit.
     */
    statuses: GitStatus[];
    /**
     * REST URL for this resource.
     */
    url: string;
    /**
     * A list of workitems associated with this commit.
     */
    workItems: ResourceRef[];
}

/**
 * Preferences about how the pull request should be completed.
 */
export interface GitPullRequestCompletionOptions {
    /**
     * If true, policies will be explicitly bypassed while the pull request is completed.
     */
    bypassPolicy: boolean;
    /**
     * If policies are bypassed, this reason is stored as to why bypass was used.
     */
    bypassReason: string;
    /**
     * If true, the source branch of the pull request will be deleted after completion.
     */
    deleteSourceBranch: boolean;
    /**
     * If set, this will be used as the commit message of the merge commit.
     */
    mergeCommitMessage: string;
    /**
     * If true, the commits in the pull request will be squash-merged into the specified target branch on completion.
     */
    squashMerge: boolean;
    /**
     * If true, we will attempt to transition any work items linked to the pull request into the next logical state (i.e. Active -> Resolved)
     */
    transitionWorkItems: boolean;
    /**
     * If true, the current completion attempt was triggered via auto-complete. Used internally.
     */
    triggeredByAutoComplete: boolean;
}

/**
 * Information about a fork ref.
 */
export interface GitForkRef extends GitRef {
    /**
     * The repository ID of the fork.
     */
    repository: GitRepository;
}

export interface GitRef {
    _links: any;
    creator: IdentityRef;
    isLocked: boolean;
    isLockedBy: IdentityRef;
    name: string;
    objectId: string;
    peeledObjectId: string;
    statuses: GitStatus[];
    url: string;
}

/**
 * This class contains the metadata of a service/extension posting a status.
 */
export interface GitStatus {
    /**
     * Reference links.
     */
    _links: any;
    /**
     * Context of the status.
     */
    context: GitStatusContext;
    /**
     * Identity that created the status.
     */
    createdBy: IdentityRef;
    /**
     * Creation date and time of the status.
     */
    creationDate: Date;
    /**
     * Status description. Typically describes current state of the status.
     */
    description: string;
    /**
     * Status identifier.
     */
    id: number;
    /**
     * State of the status.
     */
    state: GitStatusState;
    /**
     * URL with status details.
     */
    targetUrl: string;
    /**
     * Last update date and time of the status.
     */
    updatedDate: Date;
}
/**
 * Status context that uniquely identifies the status.
 */
export interface GitStatusContext {
    /**
     * Genre of the status. Typically name of the service/tool generating the status, can be empty.
     */
    genre: string;
    /**
     * Name identifier of the status, cannot be null or empty.
     */
    name: string;
}
/**
 * State of the status.
 */
export enum GitStatusState {
    /**
     * Status state not set. Default state.
     */
    NotSet = 0,
    /**
     * Status pending.
     */
    Pending = 1,
    /**
     * Status succeeded.
     */
    Succeeded = 2,
    /**
     * Status failed.
     */
    Failed = 3,
    /**
     * Status with an error.
     */
    Error = 4,
    /**
     * Status is not applicable to the target object.
     */
    NotApplicable = 5
}

export interface GitRepository {
    _links: any;
    defaultBranch: string;
    id: string;
    /**
     * True if the repository was created as a fork
     */
    isFork: boolean;
    name: string;
    parentRepository: GitRepositoryRef;
    project: TeamProjectReference;
    remoteUrl: string;
    /**
     * Compressed size (bytes) of the repository.
     */
    size: number;
    sshUrl: string;
    url: string;
    validRemoteUrls: string[];
}

export interface GitRepositoryRef {
    /**
     * Team Project Collection where this Fork resides
     */
    collection: TeamProjectCollectionReference;
    id: string;
    /**
     * True if the repository was created as a fork
     */
    isFork: boolean;
    name: string;
    project: TeamProjectReference;
    remoteUrl: string;
    sshUrl: string;
    url: string;
}

export enum ProjectVisibility {
    Private = 0,
    Organization = 1,
    Public = 2
}

/**
 * Represents a shallow reference to a TeamProject.
 */
export interface TeamProjectReference {
    /**
     * Project abbreviation.
     */
    abbreviation: string;
    /**
     * The project's description (if any).
     */
    description: string;
    /**
     * Project identifier.
     */
    id: string;
    /**
     * Project name.
     */
    name: string;
    /**
     * Project revision.
     */
    revision: number;
    /**
     * Project state.
     */
    state: any;
    /**
     * Url to the full version of the object.
     */
    url: string;
    /**
     * Project visibility.
     */
    visibility: ProjectVisibility;
}

/**
 * Reference object for a TeamProjectCollection.
 */
export interface TeamProjectCollectionReference {
    /**
     * Collection Id.
     */
    id: string;
    /**
     * Collection Name.
     */
    name: string;
    /**
     * Collection REST Url.
     */
    url: string;
}

/**
 * The representation of a tag definition which is sent across the wire.
 */
export interface WebApiTagDefinition {
    /**
     * Whether or not the tag definition is active.
     */
    active: boolean;
    /**
     * ID of the tag definition.
     */
    id: string;
    /**
     * The name of the tag definition.
     */
    name: string;
    /**
     * Resource URL for the Tag Definition.
     */
    url: string;
}

/**
 * The specific type of a pull request merge failure.
 */
export enum PullRequestMergeFailureType {
    /**
     * Type is not set. Default type.
     */
    None = 0,
    /**
     * Pull request merge failure type unknown.
     */
    Unknown = 1,
    /**
     * Pull request merge failed due to case mismatch.
     */
    CaseSensitive = 2,
    /**
     * Pull request merge failed due to an object being too large.
     */
    ObjectTooLarge = 3
}
/**
 * Status of a pull request.
 */
export enum PullRequestStatus {
    /**
     * Status not set. Default state.
     */
    NotSet = 0,
    /**
     * Pull request is active.
     */
    Active = 1,
    /**
     * Pull request is abandoned.
     */
    Abandoned = 2,
    /**
     * Pull request is completed.
     */
    Completed = 3,
    /**
     * Used in pull request search criterias to include all statuses.
     */
    All = 4
}

/**
 * The options which are used when a pull request merge is created.
 */
export interface GitPullRequestMergeOptions {
    detectRenameFalsePositives: boolean;
    /**
     * If true, rename detection will not be performed during the merge.
     */
    disableRenames: boolean;
}

/**
 * The status of a pull request merge.
 */
export enum PullRequestAsyncStatus {
    /**
     * Status is not set. Default state.
     */
    NotSet = 0,
    /**
     * Pull request merge is queued.
     */
    Queued = 1,
    /**
     * Pull request merge failed due to conflicts.
     */
    Conflicts = 2,
    /**
     * Pull request merge succeeded.
     */
    Succeeded = 3,
    /**
     * Pull request merge rejected by policy.
     */
    RejectedByPolicy = 4,
    /**
     * Pull request merge failed.
     */
    Failure = 5
}

/**
 * Identity information including a vote on a pull request.
 */
export interface IdentityRefWithVote extends IdentityRef {
    /**
     * Indicates if this is a required reviewer for this pull request. <br /> Branches can have policies that require particular reviewers are required for pull requests.
     */
    isRequired: boolean;
    /**
     * URL to retrieve information about this identity
     */
    reviewerUrl: string;
    /**
     * Vote on a pull request:<br /> 10 - approved 5 - approved with suggestions 0 - no vote -5 - waiting for author -10 - rejected
     */
    vote: number;
    /**
     * Groups or teams that that this reviewer contributed to. <br /> Groups and teams can be reviewers on pull requests but can not vote directly.  When a member of the group or team votes, that vote is rolled up into the group or team vote.  VotedFor is a list of such votes.
     */
    votedFor: IdentityRefWithVote[];
}

export interface ResourceRef {
    id: string;
    url: string;
}

/**
 * User info and date for Git operations.
 */
export interface GitUserDate {
    /**
     * Date of the Git operation.
     */
    date: Date;
    /**
     * Email address of the user performing the Git operation.
     */
    email: string;
    /**
     * Url for the user's avatar.
     */
    imageUrl: string;
    /**
     * Name of the user performing the Git operation.
     */
    name: string;
}

export interface ChangeCountDictionary {
}

export interface GitChange extends Change<GitItem> {
    /**
     * ID of the change within the group of changes.
     */
    changeId: number;
    /**
     * New Content template to be used when pushing new changes.
     */
    newContentTemplate: GitTemplate;
    /**
     * Original path of item if different from current path.
     */
    originalPath: string;
}

export interface Change<T> {
    /**
     * The type of change that was made to the item.
     */
    changeType: VersionControlChangeType;
    /**
     * Current version.
     */
    item: T;
    /**
     * Content of the item after the change.
     */
    newContent: ItemContent;
    /**
     * Path of the item on the server.
     */
    sourceServerItem: string;
    /**
     * URL to retrieve the item.
     */
    url: string;
}

export enum VersionControlChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Encoding = 4,
    Rename = 8,
    Delete = 16,
    Undelete = 32,
    Branch = 64,
    Merge = 128,
    Lock = 256,
    Rollback = 512,
    SourceRename = 1024,
    TargetRename = 2048,
    Property = 4096,
    All = 8191
}

export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}
export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1
}

export interface GitTemplate {
    /**
     * Name of the Template
     */
    name: string;
    /**
     * Type of the Template
     */
    type: string;
}

export interface GitItem extends ItemModel {
    /**
     * SHA1 of commit item was fetched at
     */
    commitId: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag, ...)
     */
    gitObjectType: GitObjectType;
    /**
     * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
     */
    latestProcessedChange: GitCommitRef;
    /**
     * Git object id
     */
    objectId: string;
    /**
     * Git object id
     */
    originalObjectId: string;
}

export interface ItemModel {
    _links: any;
    content: string;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
}

export interface FileContentMetadata {
    contentType: string;
    encoding: number;
    extension: string;
    fileName: string;
    isBinary: boolean;
    isImage: boolean;
    vsLink: string;
}

export enum GitObjectType {
    Bad = 0,
    Commit = 1,
    Tree = 2,
    Blob = 3,
    Tag = 4,
    Ext2 = 5,
    OfsDelta = 6,
    RefDelta = 7
}

export interface GitPushRef {
    _links: any;
    date: Date;
    pushCorrelationId: string;
    pushedBy: IdentityRef;
    pushId: number;
    url: string;
}
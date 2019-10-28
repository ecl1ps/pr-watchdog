/** @example "2014-06-30T18:59:12.3660573Z" */
export type ServiceDate = Date | string;

export interface IServiceHookEvent {
    /** @example "af07be1b-f3ad-44c8-a7f1-c4835f2df06b" */
    id: string;
    eventType:  ServiceHookEventType;
    /** @example "2016-09-19T13:03:27.2813828Z" */
    createdDate: ServiceDate;
    /** @example "Jamal Hartnett marked the pull request as completed" */
    message: IEventMessage;
    /** @example "Jamal Hartnett marked the pull request as completed\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n" */
    detailedMessage: IEventMessage;
    resource: IPullRequest; 
}

export enum ServiceHookEventType {
    "git.pullrequest.created",
    "git.pullrequest.updated",
    "git.pullrequest.merged"
}

export interface IEventMessage {
    text: string;
    html: string;
    markdown: string;
}

export enum PullRequestStatus {
    "active",
    "completed",
    "abandoned"
}

export interface IPullRequest {
    repository: IRepository;
    pullRequestId: number;
    status: PullRequestStatus;
    createdBy: IGitUser;
    creationDate: ServiceDate;
    closedDate: ServiceDate;
    /** @example "my first pull request" */
    title: string;
    /** @example " - test2\r\n" */
    description: string;
    /** @example "refs/heads/mytopic" */
    sourceRefName: string;
    /** @example "refs/heads/master" */
    targetRefName: string;
    mergeStatus: "succeeded";
    /** @example "a10bb228-6ba6-4362-abd7-49ea21333dbd" */
    mergeId: string;
    lastMergeSourceCommit: ICommitRef;
    lastMergeTargetCommit: ICommitRef;
    lastMergeCommit: ICommitRef;
    reviewers: readonly IReviewerRef[];
    commits: readonly ICommitRef[];
    /** @example "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/pullRequests/1" */
    url: string;
}

export interface IGitUser {
    /** @example "54d125f7-69f7-4191-904f-c5b96b6261c8" */
    id: string;
    /** @example "Jamal Hartnett" */
    displayName: string;
    /** @example "fabrikamfiber4@hotmail.com" */
    uniqueName: string;
    /** @example "https://vssps.dev.azure.com/fabrikam/_apis/Identities/54d125f7-69f7-4191-904f-c5b96b6261c8" */
    url: string;
    /** @example "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=54d125f7-69f7-4191-904f-c5b96b6261c8" */
    imageUrl: string;
}

export interface IRepository {
    "id": "4bc14d40-c903-45e2-872e-0462c7748079",
    "name": "Fabrikam",
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079",
    "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
    },
    "defaultBranch": "refs/heads/master",
    "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
}

export interface ICommitRef {
    /** @example "53d54ac915144006c2c9e90d2c7d3880920db49c" */
    commitId: string;
    /** @example "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/53d54ac915144006c2c9e90d2c7d3880920db49c" */
    url: string;
}

export enum ReviewerVote {
    approved = 10,
    approvedWithSuggestions = 5,
    noVote = 0,
    waitingForAuthor = -5,
    rejected = -10
}

export interface IReviewerRef {
    reviewerUrl: string | null;
    vote: ReviewerVote;
    /** @example "2ea2d095-48f9-4cd6-9966-62f6f574096c" */
    id: string;
    /** @example "[Mobile]\\Mobile Team" */
    displayName: string;
    /** @example "vstfs:///Classification/TeamProject/f0811a3b-8c8a-4e43-a3bf-9a049b4835bd\\Mobile Team" */
    uniqueName: string;
    /** @example "https://vssps.dev.azure.com/fabrikam/_apis/Identities/2ea2d095-48f9-4cd6-9966-62f6f574096c" */
    url: string;
    /** @example "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=2ea2d095-48f9-4cd6-9966-62f6f574096c" */
    imageUrl: string;
    isContainer: boolean;
}
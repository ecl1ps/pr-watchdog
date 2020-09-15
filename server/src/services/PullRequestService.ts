import { IPullRequestService } from "./IPullRequestService";
import { IServiceHookEventTFS, IReviewerRefTFS } from "../model/tfs/serviceHookTypes";
import { IPullRequestDataSource } from "../datasources/IPullRequestDataSource";
import { IReviewDataSource } from "../datasources/IReviewDataSource";
import { IPullRequestTFS } from "../model/tfs/serviceHookTypes";
import { IReview } from "../model/IReview";
import { ReviewState } from "../model/ReviewState";
import { IPullRequest } from "../model/IPullRequest";
import { PullRequestState } from "../model/PullRequestState";


export class PullRequestService implements IPullRequestService {

    private _pullRequestDS: IPullRequestDataSource;
    private _reviewDS: IReviewDataSource;

    public constructor(pullRequestDS: IPullRequestDataSource, reviewDS: IReviewDataSource) {
        this._pullRequestDS = pullRequestDS;
        this._reviewDS = reviewDS;
    }

    public recordNewCreated({ resource }: IServiceHookEventTFS) {
        this._createNewPullRequest(resource);
        this._createReviews(resource.pullRequestId, resource.reviewers);
    }

    private _createNewPullRequest(pullRequest: IPullRequestTFS) {
        const pr: IPullRequest = {
            id: pullRequest.pullRequestId,
            created: new Date(pullRequest.creationDate),
            reviews: [], // TODO
            state: pullRequest.isDraft ? PullRequestState.draft : PullRequestState.active // TODO: check if draft is sent
        };
        this._pullRequestDS.createPullRequest(pr);
    }
        
    private _createReviews(pullRequestId: number, reviewers: readonly IReviewerRefTFS[]) {
        for (const r of reviewers) {
            const review: IReview = {
                pullRequestId: pullRequestId,
                reviewerId: r.id,
                added: new Date(),
                state: ReviewState.active,
                iterations: [],
            };

            this._reviewDS.createReview(review);
        }
    }

    public recordStatusChanged(data: IServiceHookEventTFS) {

    }

    public recordReviewerChanged(data: IServiceHookEventTFS) {

    }

    public recordVoteChanged(data: IServiceHookEventTFS) {

    }
}

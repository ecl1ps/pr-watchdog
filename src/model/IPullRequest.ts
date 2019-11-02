import { PullRequestState } from "./PullRequestState";
import { IReview } from "./IReview";

export interface IPullRequest {
    readonly id: number;
    readonly created: Date;
    readonly finished?: Date;
    readonly state: PullRequestState; 
    readonly reviews: readonly IReview[];
}
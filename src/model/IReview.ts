import { ReviewState } from "./ReviewState";
import { IReviewIteration } from "./IReviewIteration";

export interface IReview {
    readonly reviewerId: string;
    readonly pullRequestId: number;
    readonly added: Date;
    readonly finished?: Date;
    readonly state: ReviewState;
    readonly iterations: readonly IReviewIteration[];
}
import { VoteType } from "./VoteType";

export interface IReviewIteration {
    readonly duration: number;
    readonly vote: VoteType;
}
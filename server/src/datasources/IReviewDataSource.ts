import { DataSource } from "apollo-datasource";
import { IReview } from "../model/IReview";

export interface IReviewDataSource<T = any> extends DataSource<T> {
    createReview(review: IReview): void;

}
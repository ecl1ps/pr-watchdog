import { DataSource } from "apollo-datasource";
import { IPullRequest } from "../model/IPullRequest";

export interface IPullRequestDataSource<T = any> extends DataSource<T> {
    createPullRequest(pullRequest: IPullRequest): void;

}
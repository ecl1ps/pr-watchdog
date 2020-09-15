import { IServiceHookEventTFS } from "../model/tfs/serviceHookTypes";

export interface IPullRequestService {

    recordNewCreated(data: IServiceHookEventTFS): void;

    recordStatusChanged(data: IServiceHookEventTFS): void;

    recordReviewerChanged(data: IServiceHookEventTFS): void;

    recordVoteChanged(data: IServiceHookEventTFS): void;
}

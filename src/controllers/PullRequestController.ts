import { Request, Response } from "express";
import { IPullRequestService } from "../services/IPullRequestService";
import { IServiceHookEventTFS } from "../model/tfs/serviceHookTypes";

export class PullRequestController {
    private _service: IPullRequestService;

    public constructor(service: IPullRequestService) {
        this._service = service;
    }

    /**
     * GET /pull-request
     */
    public getDetail(req: Request, res: Response) {
        res.send("PR detail");
    };

    /**
     * POST /pull-request/created
     */
    public postCreated(req: Request, res: Response) {
        this._service.recordNewCreated(this._getPullRequestData(req));
        res.send();
    };

    /**
     * POST /pull-request/completed
     */
    /*public postCompleted(req: Request, res: Response) {

    };*/

    /**
     * POST /pull-request/status
     */
    public postStatusChanged(req: Request, res: Response) {
        this._service.recordStatusChanged(this._getPullRequestData(req));
        res.send();
    };

    /**
     * POST /pull-request/reviewer
     */
    public postReviewerChanged(req: Request, res: Response) {
        this._service.recordReviewerChanged(this._getPullRequestData(req));
        res.send();
    };

    /**
     * POST /pull-request/vote
     */
    public postVoteChanged(req: Request, res: Response) {
        this._service.recordVoteChanged(this._getPullRequestData(req));
        res.send();
    };

    /**
     * POST /pull-request/code
     */
    /*public postCodeChanged(req: Request, res: Response) {
        res.send();
    };*/

    private _getPullRequestData(req: Request): IServiceHookEventTFS {
        if (!req.body || typeof req.body !== "object")
            throw new Error("Unable to read TFS WebHook data");
        
        return req.body;
    }
}
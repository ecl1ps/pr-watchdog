import { Request, Response } from "express";

/**
 * GET /pull-request
 */
export const getDetail = (req: Request, res: Response) => {
    res.send("PR detail");
};

/**
 * POST /pull-request/created
 */
export const postCreated = (req: Request, res: Response) => {
    res.send();
};

/**
 * POST /pull-request/completed
 */
/*export const postCompleted = (req: Request, res: Response) => {

};*/

/**
 * POST /pull-request/status
 */
export const postStatusChanged = (req: Request, res: Response) => {
    res.send();
};

/**
 * POST /pull-request/reviewer
 */
export const postReviewerChanged = (req: Request, res: Response) => {
    res.send();
};

/**
 * POST /pull-request/vote
 */
export const postVoteChanged = (req: Request, res: Response) => {
    res.send();
};

/**
 * POST /pull-request/code
 */
export const postCodeChanged = (req: Request, res: Response) => {
    res.send();
};
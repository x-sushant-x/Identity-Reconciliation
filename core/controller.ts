import { Response, Request } from "express";
import { ReqBody } from "./types";


export const identify = async (req: Request, resp: Response) => {
    const body: ReqBody = req.body;
    return resp.status(200).json(body)
}
import express, { Request, Response } from "express";

import { identify } from "./controller";
import log from "./logger";

export const startServer = () => {
    const app = express()
    app.use(express.json())

    const port = 4000;

    app.post("/identify", identify)

    app.listen(port, () => {
        log.info(`Server started on port: ${port}`);
    })
}
import { Controller, httpRequest, httpResponse } from "../../presentation/protocols";
import { Request, Response } from "express";

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: httpRequest = {
            body: req.body
        }
        const httpResponse: httpResponse = await controller.handle(httpRequest)
        if (httpRequest.statusCode == 200) res.status(httpResponse.statusCode).json(httpResponse.body)
        else res.status(httpResponse.statusCode).json(httpResponse.body.message)

    }
}

// se precisar trocar o express, basta trocar este adapter
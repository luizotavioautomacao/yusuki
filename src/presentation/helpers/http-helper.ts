import { ServerError } from "../errors/server-param-error"
import { HttpResponse } from "../protocols/http"

export const badRequest = (error: Error): HttpResponse => {
    return {
        body: error,
        statusCode: 400
    }
}

export const serverError = (): HttpResponse => {
    return {
        statusCode: 500,
        body: new ServerError()
    }
}
import { HttpRequest, HttpResponse } from "./http";

export interface Controller { 
    handle(httpResponse: HttpResponse): HttpRequest
}
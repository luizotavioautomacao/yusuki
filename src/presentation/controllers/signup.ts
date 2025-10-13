import { IAddAccount } from "../../domain/usecases/add-account";
import { InvalidParamError } from "../errors/invalid-param-error";
import { MissingParamError } from "../errors/missing-param-error";
import { ServerError } from "../errors/server-param-error";
import { badRequest } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { EmailValidator } from "../protocols/email-validator";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController implements Controller {
    private readonly emailValidator
    private readonly addAccount

    constructor(emailValidator: EmailValidator, addAccount: IAddAccount) {
        this.emailValidator = emailValidator
        this.addAccount = addAccount
    }

    handle(httpRequest: HttpRequest): HttpResponse {
        try {
            const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
            for (const field of requiredField) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }
            const { name, email, password, passwordConfirmation } = httpRequest.body
            const isValid = this.emailValidator.isValid(email)
            if (!isValid) {
                return badRequest(new InvalidParamError('email'))
            }
            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError('passwordConfirmation'))
            }
            const account = this.addAccount.add({ name, email, password })
            return{
                statusCode:200,
                body: account
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: new ServerError()
            }
        }
    }
}
import { Validation } from "../../protocols/validation";
import { InvalidParamError } from "../../errors"
import { EmailValidator } from "../../../presentation/protocols";

export class EmailValidation implements Validation {
    private readonly fieldName: string
    private readonly emailValidator: EmailValidator

    constructor(fieldName: string, emailValidator: EmailValidator) {
        this.fieldName = fieldName
        this.emailValidator = emailValidator
    }

    validate(input: any): Error {
        const isValid = this.emailValidator.isValid(input[this.fieldName])
        if (!isValid) return new InvalidParamError(this.fieldName)
    }
}
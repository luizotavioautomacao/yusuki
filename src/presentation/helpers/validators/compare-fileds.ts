import { Validation } from "./validation";
import { InvalidParamError } from "../../errors"

export default class CompareFieldsValidation implements Validation {
    private readonly fieldName: string
    private readonly fildToCompareName: string
    constructor(fieldName: string, fildToCompareName: string) {
        this.fieldName = fieldName
        this.fildToCompareName = fildToCompareName
    }

    validate(input: any): Error {
        if (input[this.fieldName]!=input[this.fildToCompareName]) {
            return new InvalidParamError(this.fildToCompareName)
        }
    }
}

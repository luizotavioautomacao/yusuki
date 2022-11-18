import { Validation } from "../../../presentation/protocols/validation"
import { RequiredFieldValidation } from "../../../presentation/helpers/validators/required-filed-validation"
import { makeLoginValidation } from "./login-validation"
import { EmailValidation } from "../../../presentation/helpers/validators/email-validation"
import { EmailValidator } from "../../../presentation/protocols"
import { ValidationComposite } from "../../../presentation/helpers/validators/validation-composite"

jest.mock("../../../presentation/helpers/validators/validation-composite")

const makeEmailValidator = (): EmailValidator => {
    class EmailValidotorStub implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }
    return new EmailValidotorStub()
}

describe('LoginValidation Factory', () => {
    test('Should call ValidationComposite with all validations', () => {
        makeLoginValidation()
        const validations: Validation[] = []
        for (const field of ['email', 'password']) {
            validations.push(new RequiredFieldValidation(field))
        }
        validations.push(new EmailValidation('email', makeEmailValidator()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})
import { ValidationComposite, RequiredFieldValidation, CompareFieldsValidation, EmailValidation } from "../../../presentation/helpers/validators"
import { Validation } from "../../../presentation/protocols/validation"
import { makeSignUpValidation } from "./signup-validation"
import { EmailValidator } from "../../../presentation/protocols"

jest.mock("../../../presentation/helpers/validators/validation-composite")

const makeEmailValidator = (): EmailValidator => {
    class EmailValidotorStub implements EmailValidator {
        isValid(email: string): boolean {
            return true
        }
    }
    return new EmailValidotorStub()
}

describe('SignUpValidation Factory', () => {
    test('Should call ValidationComposite with all validations', () => {
        makeSignUpValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
            validations.push(new RequiredFieldValidation(field))
        }
        validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
        validations.push(new EmailValidation('email', makeEmailValidator()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})
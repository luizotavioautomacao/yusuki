import ComparteFieldsValidation from '../../presentation/helpers/validators/compare-fileds'
import { Validation } from '../../presentation/helpers/validators/validation'
import RequiredFieldValidation from '../../presentation/helpers/validators/required-filed-validation'
import ValidationComposite from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
        validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new ComparteFieldsValidation('password', 'passwordConfirmation'))
    return new ValidationComposite(validations)
}

import { EmailValidatorAdapter } from "./email-validator-adapter"
import validator from 'validator'

const email = "email@mail.com";

jest.mock('validator', () => ({
    isEmail(): boolean {
        return true
    }
}))

describe('', () => {

    test('Should return false if validator returns false', async () => {
        const sut = new EmailValidatorAdapter()
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isValid(email)
        expect(isValid).toBe(false)
    })

    test('Should return true if validator returns true', async () => {
        const sut = new EmailValidatorAdapter()
        const isValid = sut.isValid(email)
        expect(isValid).toBe(true)
    })

    test('Should call validator with correct email', async () => {
        const sut = new EmailValidatorAdapter()
        const isValidSpy = jest.spyOn(validator, 'isEmail')
        sut.isValid(email)
        expect(isValidSpy).toHaveBeenCalledWith(email)
    })

})
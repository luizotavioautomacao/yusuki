import { EmailValidatorAdapter } from "./email-validator-adapter"
import validator from 'validator'

const email = "email@mail.com";

jest.mock('validator', () => ({
    isEmail(): boolean {
        return true
    }
}))

const makeSut = (): EmailValidatorAdapter => {
    return new EmailValidatorAdapter()
}

describe('EmailValidatorAdapter', () => {

    test('Should return false if validator returns false', async () => {
        const sut = makeSut()
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isValid(email)
        expect(isValid).toBe(false)
    })

    test('Should return true if validator returns true', async () => {
        const sut = makeSut()
        const isValid = sut.isValid(email)
        expect(isValid).toBe(true)
    })

    test('Should call validator with correct email', async () => {
        const sut = makeSut()
        const isValidSpy = jest.spyOn(validator, 'isEmail')
        sut.isValid(email)
        expect(isValidSpy).toHaveBeenCalledWith(email)
    })

})
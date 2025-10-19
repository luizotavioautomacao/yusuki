import { BcryptAdapter } from "./bcrypt-adapter";
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return new Promise((resolve) => resolve('hash'))
    }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(salt)
}

describe('Brcypt Adapter', () => {

    test('Should call bcrypt with coorect values', async () => {
        const sut = makeSut()
        const hash = jest.spyOn(bcrypt, 'hash')
        await sut.encrypt('any_value')
        expect(hash).toHaveBeenLastCalledWith('any_value', salt)
    })

    test('Should return a has on success', async () => {
        const sut = makeSut()
        const hash = await sut.encrypt('any_value')
        expect(hash).toBe('hash')
    })

    test('Should throw if bcrypt throws', async () => {
        const sut = makeSut()
        jest.spyOn(bcrypt, 'hash').mockImplementationOnce(async () => { throw new Error() })
        const promise = sut.encrypt('any_value')
        await expect(promise).rejects.toThrow()
    })

})
import { BcryptAdapter } from "./bcrypt-adapter";
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return new Promise((resolve) => resolve('hash'))
    }
}))

describe('Brcypt Adapter', () => {

    test('Should call bcrypt with coorect values', async () => {
        const salt = 12
        const sut = new BcryptAdapter(salt);
        const hash = jest.spyOn(bcrypt, 'hash')
        await sut.encrypt('any_value')
        expect(hash).toHaveBeenLastCalledWith('any_value', salt)
    })

    test('Should return a has on success', async () => {
        const salt = 12
        const sut = new BcryptAdapter(salt);
        const hash = await sut.encrypt('any_value')
        expect(hash).toBe('hash')
    })

})
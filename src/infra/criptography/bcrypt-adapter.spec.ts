import { BcryptAdapter } from "./bcrypt-adapter";
import bcrypt from 'bcrypt'

describe('Brcypt Adapter', () => {

    test('Should call bcrypt with coorect values', async () => {
        const salt = 12
        const sut = new BcryptAdapter(salt);
        const hash = jest.spyOn(bcrypt, 'hash')
        await sut.encrypt('any_value')
        expect(hash).toHaveBeenLastCalledWith('any_value', salt)
    })

})
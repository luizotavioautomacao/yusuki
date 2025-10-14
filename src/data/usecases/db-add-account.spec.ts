import { IEncrypter } from "../protocols/encrypter"
import { DbAddAccount } from "./db-add-account"

const account = {
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'valid_password'
}

describe('DbAddAccount Usecase', () => {

    test('Should call Encrypter with correct password', async () => {
        class EncrypterStub implements IEncrypter {
            encrypt(password: string): Promise<string> {
                return new Promise(resolve => resolve('hashed_password'))
            }
        }
        const encrypterStub = new EncrypterStub()
        const sut = new DbAddAccount(encrypterStub)
        const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
        await sut.add(account)
        expect(encryptSpy).toHaveBeenCalledWith('valid_password')
    })

})
import { IAccountModel } from "../../domain/models/account"
import { IAddAccountModel } from "../../domain/usecases/add-account"
import { IAddAccountRepository } from "../protocols/add-account-repository"
import { IEncrypter } from "../protocols/encrypter"
import { DbAddAccount } from "./db-add-account"

const account = {
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'valid_password'
}

const dbAccount = {
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'hashed_password'
}

const makeAddAccountRepository = (): IAddAccountRepository => {
    class AddAccountRepositoryStub implements IAddAccountRepository {
        async add(account: IAddAccountModel): Promise<IAccountModel> {
            return dbAccount
        }
    }
    return new AddAccountRepositoryStub()
}

const makeEncrypter = (): IEncrypter => {
    class EncrypterStub implements IEncrypter {
        encrypt(password: string): Promise<string> {
            return new Promise(resolve => resolve('hashed_password'))
        }
    }
    return new EncrypterStub()
}

interface SutType {
    sut: DbAddAccount
    encrypterStub: IEncrypter,
    addAccountRepositoryStub: IAddAccountRepository
}

const makeSut = (): SutType => {
    const encrypterStub = makeEncrypter()
    const addAccountRepositoryStub = makeAddAccountRepository()
    const sut = new DbAddAccount(encrypterStub, addAccountRepositoryStub)
    return {
        sut,
        encrypterStub,
        addAccountRepositoryStub
    }
}

describe('DbAddAccount Usecase', () => {

    test('Should call Encrypter with correct password', async () => {
        const { sut, encrypterStub } = makeSut()
        const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
        await sut.add(account)
        expect(encryptSpy).toHaveBeenCalledWith('valid_password')
    })

    test('Should throw if Encrypter throws', async () => {
        const { sut, encrypterStub } = makeSut()
        jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(
            new Promise((resolve, reject) => reject(new Error()))
        )
        const promiseAccount = sut.add(account)
        await expect(promiseAccount).rejects.toThrow()
    })

    test('Should call AddAccountRepository with correct values', async () => {
        const { sut, addAccountRepositoryStub } = makeSut()
        const addSpy = jest.spyOn(addAccountRepositoryStub, 'add')
        await sut.add(account)
        await expect(addSpy).toHaveBeenCalledWith({
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'hashed_password'
        })
    })

})
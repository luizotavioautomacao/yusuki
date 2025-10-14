import { IAccountModel } from "../../domain/models/account";
import { IAddAccount, IAddAccountModel } from "../../domain/usecases/add-account";
import { IAddAccountRepository } from "../protocols/add-account-repository";
import { IEncrypter } from "../protocols/encrypter";

export class DbAddAccount implements IAddAccount {
    private readonly encrypter: IEncrypter
    private readonly addAccountRepository: IAddAccountRepository

    constructor(encrypter: IEncrypter, addAccountRepository: IAddAccountRepository) {
        this.encrypter = encrypter
        this.addAccountRepository = addAccountRepository
    }

    async add(accountData: IAddAccountModel): Promise<IAccountModel> {
        const hash_password = await this.encrypter.encrypt(accountData.password)
        this.addAccountRepository.add(Object.assign({}, accountData, { password: hash_password }))
        return new Promise(resolve => resolve(null))
    }
}
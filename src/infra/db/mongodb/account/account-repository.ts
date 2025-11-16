import { IAddAccountModel } from "../../../../domain/usecases/add-account";
import { IAccountModel } from "../../../../domain/models/account";
import { IAddAccountRepository } from "../../../../data/protocols/add-account-repository";
import { MongoHelper } from "../helpers/mongo-helper";

export class AccountMongoRepository implements IAddAccountRepository {
    async add(accountData: IAddAccountModel): Promise<IAccountModel> {
        const accountCollection = await MongoHelper.getCollection('account')
        const result = await accountCollection.insertOne(accountData)
        const getAccount = await accountCollection.findOne({ _id: result.insertedId })
        return MongoHelper.map(getAccount)
    }
}
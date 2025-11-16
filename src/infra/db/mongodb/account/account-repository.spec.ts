import { MongoHelper } from "../helpers/mongo-helper";
import { AccountMongoRepository } from "./account-repository";

const fakeAccount = {
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'hashed_password'
}

const dbAccount = {
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'hashed_password'
}

const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository
}

describe('Account Mongo Repository', () => {

    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    test('Should return an account on success', async () => {
        const sut = makeSut()
        const account = await sut.add(fakeAccount)
        expect(account).toBeTruthy()
        expect(account.id).toBeTruthy()
        expect(account.name).toBe(dbAccount.name)
        expect(account.email).toBe(dbAccount.email)
        expect(account.password).toBe(dbAccount.password)
    })

})
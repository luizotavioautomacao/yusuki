import { DbAddAccount } from "../../data/usecases/db-add-account"
import { BcryptAdapter } from "../../infra/criptography/bcrypt-adapter"
import { AccountMongoRepository } from "../../infra/db/mongodb/account/account-repository"
import { SignUpController } from "../../presentation/controllers/signup"
import { EmailValidatorAdapter } from "../../ultis/email-validator-adapter"


export const makeSignUpController = (): SignUpController => {
    const salt = 12
    const encrypter = new BcryptAdapter(salt)
    const dbAccountRepository = new AccountMongoRepository()
    const dbAddAccount = new DbAddAccount(encrypter, dbAccountRepository)
    const emailValidatorAdapter = new EmailValidatorAdapter()
    const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
    return signUpController
}
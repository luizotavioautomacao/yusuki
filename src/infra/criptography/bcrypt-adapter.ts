import { IEncrypter } from "../../data/protocols/encrypter";
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IEncrypter {
    private readonly salt
    constructor(salt) {
        this.salt = salt
    }
    async encrypt(value: string): Promise<string> {
        await bcrypt.hash(value, this.salt)
        return null
    }
}
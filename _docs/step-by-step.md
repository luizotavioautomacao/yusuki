#### Aula 4 (branch 001-config)
npm init
npm i -D git-commit-msg-linter
npm i -D typescript @types/node ts-node
https://node.green
https://standardjs.com
https://github.com/mightyiam/eslint-config-love
npm i -D eslint typescript \
  @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-import eslint-plugin-n eslint-plugin-promise \
  eslint-config-standard-with-typescript
https://www.npmjs.com/package/husky
npm i -D husky # avaliar pré-commit
npm i -D lint-staged # find and fix problem js code
npm i -D jest @types/jest ts-jest
npm init jest@latest
add "npm run test:staged" no lintstaged 
-> Não vai passar/commitar código defeituoso nem teste falhando
#### Aula 6 (branch 002-signup-controller)
presentation/controllers/signup-controller.spec.ts
presentation/controllers/signup-controller.ts
no name; no email; no password; no passwordConfirmation
#### Aula 7 (branch 003-errors-and-protocols)
presentation/protocols/http.ts
presentation/helpers/http-helper.ts
presentation/errors/missing-param-error.ts
presentation/protocols/controller.ts
#### Aula 8 (branch 004-mocks)
###### aplicando inversão de dependência
const makeSut on presentation/controllers/signup.spec.ts
Tipos de mocks: stub, spy, fake
stub -> retorno marretado
class EmailValidatorStub implements EmailValidator
interface SutTypes
add constructor on SignUpController and rules to calls isValid
#### Aula 9 (branch 005-email-validator)
###### Factory
should calls emailValidator with correct email
should return 500 if emailValidator throws
presentation/errors/server-param-error.ts
index.ts
makeEmailValidator
makeEmailValidatorWithError
1 classe pode implementar várias interfaces diferentes
#### Aula 10 (branch 006-add-account)
should return 400 if passwordConfirmation fails (password !== passwordConfirmation)
should call AddAccount with correct values
jest.spyOn(emailValidatorStub).mockImplementationOnce(()=>{throw new Error()})
makeAddAccount -> return fakeAccount; AddAccountModel; AccountModel; AddAccount; AddAccountStub
domain/usecases/add-account.ts -> AddAccountModel; AccountModel
domain/models/account -> AccountModel
should return 500 if AddAccount throws / ensure SingUpController ...
should return 200 if valid data is provided
http-help ok
refactor to async/await
#### Aula 11 (branch 007-jest)
test jest --passWithNoTests --silent --noStackTrace --runInBand
--noStackTrace => remover a linha do erro
-- runInBand => roda testes sequencial (não roda em paralelo), aumentando a confiabilidade do teste
test:verbose jest --passWithNoTests --runInBand
add jest-unit-config.js
test:unit npm test -- --watch -c jest-unit-config.js
add jest-integration-config.js
test:integration npm test -- --watch -c jest-integration-config.js
test:staged npm test -- --findRelatedTests
test:ci npm test -- --coverage
O "--" é para herdar do script que foi chamado, no caso: npm test 
add pre-push: npm run test:ci no husky
coverage/lcov/index.html (arquivo com detalhes da cobertura de testes)
#### Aula 12 (branch 008-email-validator-adapter)
utils/email-validator-adapter.spec.ts
utils/email-validator-adapter.ts
should return false if validator returns false
should return true if validator returns true
npm i validator
npm i -D @types/validator
should call validator with correct email
makeSut
#### Aula 13 (branch 009-db-add-account)
data/usecases/db-add-account.spec.ts
should call encrypter with correct password
EncrypterStub
data/usecases/db-add-accunt.ts
data/protocols/encrypter
makeSut()
makeEncrypter()
should throw if encrypter throws => jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
#### Aula 14 (branch 010-db-add-account-repository)
Should call AddAccountRepository with correct values
makeAddAccountRepository
Should throw if AddAccountRepository throws
O caso de sucesso não mocka! Mocka somente quando quer retornar o erro!
Comparar objetos => toEqual
Should return an account on success
#### Aula 15 (branch 011-bcrypt-adapter)
infra/criptography/bcrypt-adapter.spec.ts => implementação do protocolo de IEncrypter (src/data/protocols/encrypter.ts)
Should call bcrypt with correct values
npm i bcrypt
npm i @types/bcrypt -D
feat: ensure BcryptAdapter calls bcrypt with correct values
Should return a hash on success
jest.mock('bcrypt',()=>{ resolve(hash_value)})
makeSut()
Should throw if bcrypt throws
#### Aula 16 (branch 012-config-mongodb)
https://github.com/shelfio/jest-mongodb
https://jestjs.io/docs/mongodb
npm install --save-dev @shelf/jest-mongodb
npm i @types/mongodb -D
npm i mongodb
infra/db/mongodb/account/account-repository.spec.ts
Account Mongo Repository
Should return an account on success
AccountMongoRepository
infra/db/mongodb/helpers/mongo-helper.ts
#### Aula 17 (branch 013-test-mongodb)
AccountMongoRepository
MongoHelper.getCollection(name)
.insertOne(accountData)
result.ops[0]
troca _id por id
makeSut
infra/db/mongodb/account/account-mapper.ts => transferir p/ helper
Should return an account on success

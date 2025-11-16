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

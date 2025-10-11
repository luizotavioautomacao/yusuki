export class MissingParamError extends Error {
    constructor(paramName) {
        super(`Missing param: ${paramName}`)
    }
}
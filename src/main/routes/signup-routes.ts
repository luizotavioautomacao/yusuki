import { Router } from 'express'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/signup'

export default (router: Router) => {
    router.post('/signup', AdaptRoute(makeSignUpController()))
}
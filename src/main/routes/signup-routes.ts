import { Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {

    router.post('/signup', adaptRoute(makeSignUpController()))

    // router.post('/signup', makeSignUpController().handle)

    // router.post('/signup', (req, res) => {
    //     res.json({ ok: 'ok' })
    // })
}
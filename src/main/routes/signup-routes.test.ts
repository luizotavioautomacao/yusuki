import request from 'supertest'
import app from "../configs/app"

describe('Signup Routes', () => {

    test('Should return an account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: "Luiz Otávio",
                email: "luizotavio@gmail.com",
                password: "password_test",
                passwordConfirmation: "password_test"
            })
            .expect(200)
    })

})
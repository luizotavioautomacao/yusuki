import { MongoHelper } from "../infra/db/mongodb/helpers/mongo-helper"
import env from "./configs/env"

MongoHelper.connect(env.mongoUrl)
    .then(async () => {
        const app = (await import("./configs/app")).default
        app.listen(env.port, () => { console.log(`Server running on port ${env.port}`) })
    })
    .catch(console.error)

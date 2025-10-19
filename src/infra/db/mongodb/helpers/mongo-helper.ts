import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
    client: null as MongoClient,

    async connect(uri: string): Promise<void> {
        this.client = await MongoClient.connect(uri)
    },

    async disconnect(): Promise<void> {
        this.client.close()
    },

    getCollection(name): Collection {
        return this.client.db().collection(name)
    },

    map(object): any {
        const { _id, ...obj } = object
        return Object.assign({}, obj, { id: _id })
    }
}
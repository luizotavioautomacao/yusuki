import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
    client: null as MongoClient,
    uri: null as string,

    async connect(uri: string): Promise<void> {
        this.uri = uri
        this.client = await MongoClient.connect(uri)
    },

    async disconnect(): Promise<void> {
        this.client.close()
        this.client = null
    },

    async getCollection(name): Promise<Collection> {
        if (!this.client) {
            await this.connect(this.uri)
        }
        return this.client.db().collection(name)
    },

    map(object): any {
        const { _id, ...obj } = object
        return Object.assign({}, obj, { id: _id })
    }
}
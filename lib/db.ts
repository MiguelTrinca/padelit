import mongoose from 'mongoose'

const connectionServer = process.env.MONGODB_URL as string
let connection: typeof mongoose

const connectMongo = async () => {
    if ( !connection ) await mongoose.connect(connectionServer)
    return connection
    }

export default connectMongo;
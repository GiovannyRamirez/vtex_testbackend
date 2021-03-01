import mongoose from 'mongoose'

export let connection: mongoose.Connection

export async function connect(): Promise<void> {

  if (connection) return;

  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/banshee'

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  await mongoose.connect(mongoURI, options)

  connection = mongoose.connection

  connection.once('open', () => {
    console.log('Connected with Banshee DB')
  })

  connection.on('error', (err) => {
    console.log('Something went wrong')
  })
}

export async function disconect(): Promise<void> {

  if (!connection) return;

  await mongoose.disconnect()
}

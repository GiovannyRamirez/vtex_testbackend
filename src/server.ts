import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connect } from './db'
import vendorRouter from './routes/vendor'
import cityRouter from './routes/city'

dotenv.config()

const port = process.env.PORT || 9000
const app = express()
connect()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/vendors', vendorRouter)
app.use('/cities', cityRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

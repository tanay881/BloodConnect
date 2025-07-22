import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import donerDataRouter from './routes/donerDataRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000

// mongodb connection build
connectDB()

// middleware
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/donerdetails', donerDataRouter)

app.get('/', (req, res) => {
  res.send('Api is working');
})

// server config
app.listen(port, () => {
  console.log('Server started on PORT', port);
})
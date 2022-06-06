import express, {json} from 'express'
import cors from 'cors'
import 'express-async-errors'
import { handleError } from './utils/errors'
import rateLimit from 'express-rate-limit'
import { adRouter } from './routers/ad.router'

const app = express()
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(json())

app.get('/', async(req, res)=>{
    throw new Error('Errrrrrrorrr!')
})
app.use('/ad', adRouter)
app.use(limiter)
app.use(handleError)

app.listen(3001, '0.0.0.0', ()=>{
    console.log('Listening on port 3001')
})

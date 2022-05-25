import express, {json} from 'express'
import cors from 'cors'
import 'express-async-errors'
import { handleError } from './unils/errors'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(json())

app.get('/', async(req, res)=>{
    throw new Error('Errrrrrrorrr!')
})

app.use(handleError)

app.listen(3001, '0.0.0.0', ()=>{
    console.log('Listening on port 3001')
})
//sfssdfsdfsf
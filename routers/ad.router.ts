import { Request, Response, Router } from "express";

export const adRouter = Router()

    .get('/', async(req:Request, res: Response)=>{
        res.json({
            ok: true
        })
    })
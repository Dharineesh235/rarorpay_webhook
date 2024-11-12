import { Request, Response } from "express";

export const handleRazorpayEvent=(req:Request, res:Response)=>{
    const body = req.body;
    console.log(body);
    res.status(200).send('event received');

}
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handler (req:NextApiRequest,res:NextApiResponse){
    try{
        const savedInvite = await prisma.invitation.create({
            data:req.body
        });
        return res.status(200).json({
            status:"success",
            payload:savedInvite
        })
    } catch (err) {
        return res.status(400).json({
            status:"failed",
            err,
            payload:req.body
        })
    }
}
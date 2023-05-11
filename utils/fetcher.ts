import { NextApiRequest, NextApiResponse } from "next";
export default async function handler (url,data,req:NextApiRequest, res:NextApiResponse) {
    try {
        await fetch(url,{
            method: data ? "POST" : "GET",
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Credentials":"true",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify(data)
        }).then(res => {
            res.json()
        });
    } catch(err) {
        res.json({
            status:"Failed",
            err,
            payload:req.body
        })
    }
}
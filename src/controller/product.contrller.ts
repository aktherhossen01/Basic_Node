import { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../services/product.service";
import { IProduct } from "../types/interface";
import { parseBody } from "../utility/parseBody";

export const productController =async (req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url
    const method = req.method

    const urlPart = url?.split("/")
    const id = urlPart && urlPart[1] === "products"? Number(urlPart[2]):null

    // console.log(id);
    

    if(method === "GET" && url==="/products"){
        const product= readProduct()
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"bhai eita product", data:product}))
    }else if(method==="GET" && id !== null){
        const products= readProduct()
        const product = products.find((p:IProduct)=>p.id === id)
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"bhai eita product", data:product}))
    }else if(method === "POST" && url==='/products'){
        const body = await parseBody(req)
        console.log(body);
        
    }

}
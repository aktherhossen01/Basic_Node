import { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../services/product.service";

export const productController =(req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url
    const method = req.method

    const urlPart = url?.split("/")
    const id = urlPart && urlPart[1] === "products"? Number(urlPart[2]):null

    console.log(id);
    

    if(method === "GET" && url==="/products"){
        const product= readProduct()
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"bhai eita product", data:product}))
    }

}
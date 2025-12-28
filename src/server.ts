import { createServer, Server } from "http";
import { productRoute } from "./routes/product.routes";

const server:Server= createServer((req,res)=>{
    productRoute(req,res)
    
})
server.listen(5000,()=>{
    console.log("server is running is port 5000");
    
})
import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200,{"consent-type":"application/json"});
//Writehead se batate hai client ko hi tumare pass kya ane wala hai
//200 means ok
//201 means created
//404 not found
//500

const products={
    name:"Iphone" ,
    price: 100000,
    qty: 1
    discount: 10

};
res.end(JSON.stringify(products));
});
server.listen(3000,()=>console.log
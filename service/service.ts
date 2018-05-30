import * as http from 'http';
let service = http.createServer((req,res)=>{
    res.end('hello world');
});
service.listen('6200');
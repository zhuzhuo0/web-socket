import * as http from 'express';
import { Server } from 'ws';

class Message {
    constructor(
        public id: number,
        public name: string,
        public data: string
    ) {

    }
}

const msgs: Array<Message> = [
    new Message(1, 'first', 'data01'),
    new Message(2, 'second', 'data02'),
    new Message(3, 'thrid', 'data03'),
    new Message(4, 'four', 'data04'),
    new Message(5, 'five', 'data05'),
]

// demo
// let service = http();
// service.get('/ws/:id', (req, res) => {
//     res.json(msgs.find((val) => {
//         return val.id == req.params.id;
//     }))
// });
// service.listen(6200, "192.168.0.105", () => {
//     console.log('server open');
// })

// websocket
let wsServer = new Server({ port: 8085 });
wsServer.on('connection', ws => {
    ws.send(JSON.stringify(msgs));
    ws.on('message', message => {
        console.log(message);
    });
});
let i = 0;
setInterval(() => {
    if (wsServer.clients) {
        wsServer.clients.forEach(value => {
            value.send(JSON.stringify({ 'value': i++ }));
        });
    }
}, 2000);
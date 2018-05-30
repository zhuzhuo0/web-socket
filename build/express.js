"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var Message = /** @class */ (function () {
    function Message(id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;
    }
    return Message;
}());
var msgs = [
    new Message(1, 'first', 'data01'),
    new Message(2, 'second', 'data02'),
    new Message(3, 'thrid', 'data03'),
    new Message(4, 'four', 'data04'),
    new Message(5, 'five', 'data05'),
];
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
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (ws) {
    ws.send(JSON.stringify(msgs));
    ws.on('message', function (message) {
        console.log(message);
    });
});
var i = 0;
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (value) {
            value.send(JSON.stringify({ 'value': i++ }));
        });
    }
}, 2000);

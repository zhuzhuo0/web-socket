"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var service = http.createServer(function (req, res) {
    res.end('hello world');
});
service.listen('6200');

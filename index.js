'use strict';

var router = require('node-static');
var http = require('http');
var url = require('url');
var path = require('path');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new router.Server('./public');

http.createServer(function (req, res) {
    req.addListener('end', function () {
        var urlPath = url.parse(req.url).pathname;
        var ext = path.extname(urlPath);
        if (ext) {
            file.serve(req, res);
        } else {
            file.serveFile('index.html', 200, {}, req, res);
        }
    }).resume();
}).listen(8080);

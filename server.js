/*
GLOBALS 
__dirname - path to current directory
__filename - filename
require - function to use modules (commonJS)
module  - info about current module (file)
process - info about env where the server is being executed
os      - info about users operating system --can be useful. We can create a site that users can learn info about their system.
path    - info about path and more.
fs      - filesystem method. read & write file operations can be done with fs method.
        - to read a file : const content = fs.readFileSync('path' , 'utf-8');
        - use options such as flag : 'a' as append etc.
http    - method for creating servers. 
*/







// CREATE SERVER STRUCTURE 

// const http = require('http');
// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//         res.end('Welcome!');
//     }
//     else {
//         res.end
//         (`
//         <p>There is no such url you idiotta</p>
//         <a href="/">Go back home</a>
//         `)
//     }
//     console.log(req.method + ' -> ' + req.url);
// })

// server.listen('4200')








// ASYNC - AWAIT STRUCTURE

// const { readFile } = require("fs")
// const getText = (path) => {
//     return new Promise((resolve , reject) => {
//         readFile(path , 'utf-8', (err , data) => {
//             if(err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async(path1 , path2) => {
//     try {
//        const first = await getText(path1);
//        const second = await getText(path2)
//        console.log(first + ' > ' + second)
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// start('./test.txt' , './utils.js')





// CREATE SERVER WITH EVENT EMITTER

// const http = require('http');
// const server = http.createServer();

// server.on('request' , (req,res) => {
//     console.log(req.method + ' -> ' + req.url)
//     res.end('Annen')
// })

// server.listen(4200);



// RETURN DATA WHEN REQUESTED EXAMPLE

// const fs = require('fs');
// const responseText = fs.readFileSync('./test.txt' , 'utf-8');
// const http = require('http');
// const server = http.createServer((req , res) => {
//     if(req.method === 'GET' && req.url === '/api/freaks') {
//         res.end(responseText);
//     }
//     else {
//         res.end('Error, no method specified!');
//     }
// });

// server.listen(4200);






// RESPONSE HEADERLARI EKLEMEK : res.writeHead - status code, response type gibi 
// const { readFileSync } = require('fs');
// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log('user connected to server')
//     if(req.url === '/api') {
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.write('<h1>Welcome</h1>')
//     }
//     else {
//         res.writeHead(404)
//         res.write('not found')
//     }
//     res.end()
// })

// server.listen(5100);



//EXPRESS.JS


// const express = require('express');
// const app = express()
// const port = 4200;

// app.get('/' , (req,res) => {
//     res.end('Welcome.');
//     console.log(req.method +' to ' + req.url)
// })

// app.get('/users' , (req , res) => {
//     res.end('Users api');
// })  

// app.all('*' , (req,res) => {
//     res.status(404).send('<h1 style = "text-align : center;">Resource not found</h1>')
// })

// app.listen(port)
// console.log('Server listening on port ' + port);



import bodyParser from 'body-parser';
import express from 'express'
import userRoutes from './routes/users.js';
const app = express();
const PORT = 4200

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json())
app.use('/api' , userRoutes)

app.listen(PORT , () => {
    console.log('Server listening on port ' + PORT +'....');
})
















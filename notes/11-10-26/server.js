// import http from "http";
// import fs from "fs";

// function requestReceived(req, res) {
//     console.log("Request received: " + req.url);

//     if (req.url === "/") {
//         // load index.html from public and send data as response
//         let fileData = fs.readFileSync("./public/index.html");
//         let resConfig = {
//             "Content-Type": "text/plain"
//         };
//         res.writeHead(200, resConfig);
//         res.end(fileData);
//     }
//     }

//     let resConfig = {
//         "Content-Type": "text/plain"
//     }
//     // Meta info about the response
//     // Head is meta data -> body is the actual content
//     res.writeHead(200, resConfig);
//     // passes text established in resConfig
//     res.end("This is a message from the server");

// let server = http.createServer(requestReceived);

// server.listen(3000);


import express from "express";

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.get('/lucy', (req,res) => {
    res.send("Hello from Lucy!");
})

app.listen(port);
import express from "express"; // node finds express module in node_modules folder

// app object represents the whole server
// http.createServer()
const app = express(); 
const port = process.env.PORT || 3000;

// serves the website from the public folder
// express.static() is a middleware function that serves static files directly from folder
// substitutes if statements for each file in the public folder
app.use(express.static("public")); 

// class example: 
//     else if (req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About</h1><p>This page was made by a server, not read from a file.</p>");
// express sets status code (200) and content type (text/html)
app.get('/about', (req,res) => {
    res.send("This page shows how I hosted a website using express, showing you my cute fighting game!");
})

// starts the server and listens for requests on the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
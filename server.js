const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const url = req.url;
    let filePath = '';
    if (url === '/home') {
        filePath = path.join(__dirname, 'public', 'home.html');
    } else if (url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
        return;
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<h1>500 Internal Server Error</h1>');
            res.end();
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

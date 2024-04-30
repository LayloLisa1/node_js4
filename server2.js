const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    let filePath = '';
    switch (url) {
        case '/home':
            filePath = path.join(__dirname, 'public', 'home.html');
            break;
        case '/product':
            filePath = path.join(__dirname, 'public', 'product.html');
            break;
        case '/price':
            filePath = path.join(__dirname, 'public', 'price.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'public', 'contact.html');
            break;
        case '/login':
            filePath = path.join(__dirname, 'public', 'login.html');
            break;
        case '/joinus':
            filePath = path.join(__dirname, 'public', 'joinus.html');
            break;
        default:
            filePath = path.join(__dirname, 'public', '404.html');
            break;
    }
    // Read the HTML file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Return 404 Not Found if there's an error reading the file
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.end();
            return;
        }
        // Return the HTML content
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

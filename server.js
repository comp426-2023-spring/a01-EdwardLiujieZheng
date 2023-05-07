// import modules
const http = require('http');
const fs = require('fs');
const minimist = require('minimist');

// parse args
const argv = minimist(process.argv.slice(2));
const port = argv.port == undefined ? 3000 : argv.port;

// pass file and make server
fs.readFile('./public/index.html', 'utf-8', (err, content) => {
    if (err) return console.error(err);

    // make server
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    });

    server.listen(port, () => console.log(`Server listening on port ${port}`));
});

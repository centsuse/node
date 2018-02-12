const http = require('http');
let server = http.createServer((req, res) => {
    console.info(req.url);
    res.write('aaaa');
    res.end();
})
server.listen(9898);
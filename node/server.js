const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    console.info(req.url);
    fs.readFile(`.${req.url}`, (err, data) => {
        if(err){
            res.write(`<html>404<html>`);
            console.info('读取文件失败');
        }else{
            res.write(data);
        }
    });
});
server.listen(9999);

//res.write输出信息，直接填写字符串有点问题？？使用html文件格式
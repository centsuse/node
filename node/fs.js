const fs = require('fs');

fs.readFile('helloworld.js', (err, data) => {
    if(err){
        console.info('读取文件出错');
    }else{
        console.info(data);
        console.info(data.toString());
    }
})
fs.writeFile('再见波波', 'helloworld.js', err => {
    if(err){
        console.info(写入文件失败);
    }
})
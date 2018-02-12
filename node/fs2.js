const fs = require('fs');

fs.readFile('events.js', (err, data) => {
    console.info(data);
    console.info(err);
    if(err){
        console.info('读取文件失败');
    }else{
        fs.writeFile('再见波波', data, err => {
            if(err){
                console.info('写入文件失败');
            }
        })
    }
})

//err 在前，data在后，位置不能写反，writeFile会把文件原有信息清空，再写入

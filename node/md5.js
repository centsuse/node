// const crypto = require('crypto');

// let md5 = crypto.createHash('md5');

// md5.update('1');
// md5.update('16');
// console.info(md5.digest('hex'));

//双层md5
function md5(str) {
    const crypto = require('crypto');
    let obj = crypto.createHash('md5');
    return obj.update(str).digest('hex');;
}
console.info(md5(md5('110')));
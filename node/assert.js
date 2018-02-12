const assert = require('assert');

function sum(a, b) {
    assert((a+b) > 0, '两个参数和要大于0');
    return a + b;
}
console.info(sum(-1, 2));

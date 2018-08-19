const tooltpl = require('../../tpl');

let output = tooltpl.generate(' \
    const xxx = require(\'xxx\'); \
    module.exports = { \
        a: ${a}, \
        b: { \
            list: [${item}], \
        }, \
    }; \
', { a: 123, item: 321 });

console.log(output);

const test = require('tape');




test('default rules', function (t) {
    t.plan(3);

    let defaultRules = require('../../src/format/password.js').defaultRules;

    t.equal(typeof defaultRules, 'object');
    t.equal(typeof defaultRules.content, 'object');
    t.equal(typeof defaultRules.size, 'object');
});



test('validate', function (t) {
    t.plan(10);

    let validate = require('../../src/format/password.js').validate;

    t.equal(typeof validate, 'function');
    t.notOk(validate(), 'Empty values are invalid');
    t.notOk(validate({}), 'Empty objects are invalid');
    t.notOk(validate({ foo : 'bar'}), 'Objects not well structured are invalid');
    t.notOk(validate({ content : 'bar'}), 'Objects not well structured are invalid');
    t.notOk(validate({ size : 'bar'}), 'Objects not well structured are invalid');
    t.notOk(validate({ content : {} }), 'Objects not well structured are invalid');
    t.notOk(validate({ content : {}, size : {} }), 'Objects not well structured are invalid');
    t.notOk(validate({ content : {}, size : { min: 'a', max : '12'} }), 'Objects not well structured are invalid');

    t.ok(validate({ content : {}, size : { min : 1, max : 12} }), 'Objects well structured are valid');
});


test('format', function (t) {
    t.plan(3);

    let format = require('../../src/format/password.js').format;

    t.equal(typeof format, 'function');

    let rules = {
        content: {
            lower: true,
            special : true
        },
        size : {
            min : 1,
            max : 4
        }
    };
    t.equal(format(rules), 'lower,special,1-4');


    let rules2 = {
        content: {
            lower: false,
            upper: true,
            special : true
        },
        size : {
            min : 4,
            max : 4
        }
    };
    t.equal(format(rules2), 'upper,special,4');
});

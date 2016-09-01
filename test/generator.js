const test = require('tape');
const generatorFactory = require('../src/generator.js');

test('API', function (t) {
    t.plan(3);

    t.equal(typeof generatorFactory, 'function');
    t.equal(typeof generatorFactory(), 'object');
    t.notEqual(generatorFactory(), generatorFactory(), 'A new object is factored' );
});

test('Generate one', t => {
    t.plan(8);

    let generator = generatorFactory();

    generator.generate(1).then( result => {

        t.equal(typeof result, 'object', 'We have received something');
        t.equal(typeof result.info, 'object', 'The result contains the info property');
        t.equal(result.info.results, 1, 'The result contains one entry');
        t.equal(result.info.page, 1, 'The result contains one page');

        t.equal(result.results.length, 1, 'We have received one user');
        t.equal(typeof result.results[0].email, 'string', 'Our user has an email');
        t.equal(typeof result.results[0].login.password, 'string', 'Our user has a password');
        t.equal(typeof result.results[0].login.username, 'string', 'Our user has a password');

    }).catch( err => t.fail(err));
});


test('Generate 50', t => {
    t.plan(14);

    let generator = generatorFactory();

    generator.generate(50).then( result => {

        t.equal(typeof result, 'object', 'We have received something');
        t.equal(typeof result.info, 'object', 'The result contains the info property');
        t.equal(result.info.results, 50, 'The result contains one entry');
        t.equal(result.info.page, 1, 'The result contains one page');

        t.equal(result.results.length, 50, 'We have received one user');
        t.equal(typeof result.results[0].email, 'string', 'Our user has an email');
        t.equal(typeof result.results[0].login.password, 'string', 'Our user has a password');
        t.equal(typeof result.results[0].login.username, 'string', 'Our user has a password');

        t.equal(typeof result.results[24].email, 'string', 'Our user has an email');
        t.equal(typeof result.results[24].login.password, 'string', 'Our user has a password');
        t.equal(typeof result.results[24].login.username, 'string', 'Our user has a password');

        t.equal(typeof result.results[49].email, 'string', 'Our user has an email');
        t.equal(typeof result.results[49].login.password, 'string', 'Our user has a password');
        t.equal(typeof result.results[49].login.username, 'string', 'Our user has a password');

    }).catch( err => t.fail(err));
});

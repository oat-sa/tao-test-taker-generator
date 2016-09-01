
const endpoint             = 'https://randomuser.me/api/';
const numberThreshold      = 5000;

const request              = require('request');
const defaultPasswordRules = require('./format/password.js').defaultRules;
const validatePassword     = require('./format/password.js').validate;
const formatPassword       = require('./format/password.js').format;

const generator = function generator ({ password = defaultPasswordRules, format = 'json', excludes = 'location,picture' } = {}) {

    if(!validatePassword(password)){
        throw new TypeError('Wootch, we cannot do anything with your password rules');
    }


    return {
        data : '',
        out(stream, only = false){
            this.stream = stream;
            this.streamOnly = only;
            return this;
        },
        generate(number = 1){
            if(number > numberThreshold){
                number = numberThreshold;
            }

            return new Promise( (resolve, reject) =>{

                const req = request.get({
                    uri : endpoint,
                    qs  : {
                        results : number,
                        password : formatPassword(password),
                        fmt: format,
                        excl: excludes
                    }
                });

                req.on('error', reject);

                if(this.stream){
                    req.pipe(this.stream);

                }

                if(this.streamOnly){
                    req.on('end', resolve);
                }  else {
                    req.on('data', data => this.data += data.toString())
                       .on('end', () => {
                           if(format === 'json'){
                               resolve(JSON.parse(this.data));
                           } else {
                               resolve(this.data);
                           }
                       });
                }
            });
        }
    };
};

module.exports = generator;

const defaultPasswordRules = {
    content: {
        lower:   true,
        upper:   true,
        special: true,
        numner:  true
    },
    size : {
        min:     6,
        max:     6
    }
};

const validatePassword = function validatePassword(password) {
    return typeof password === 'object' &&
           typeof password.content === 'object' &&
           typeof password.size === 'object' &&
           typeof password.size.min === 'number' &&
           typeof password.size.max === 'number';

};

const formatPassword = function formatPassword(password = defaultPasswordRules){
    const size = password.size.min === password.size.max ? `${password.size.min}` : `${password.size.min}-${password.size.max}`;

    return Object.keys(password.content)
                 .filter( key  => password.content[key] )
                 .concat( [size] )
                 .join(',');
};

module.exports.defaultRules = defaultPasswordRules;
module.exports.validate = validatePassword;
module.exports.format = formatPassword;


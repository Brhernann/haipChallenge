const Joi = require('joi');

const thestring = {
    data: Joi.string().required(),
}

const thelength = {
    data: Joi.number().integer().required(),
}

module.exports = {
    thestring, 
    thelength 
};
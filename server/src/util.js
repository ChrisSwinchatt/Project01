/**
 * Various utility functions.
 * @module util
 */
'use strict';

var path = require('path');

/**
 * Return true if the object has type 'undefined' or value 'null'.
 */
module.exports.isNullOrUndefined = function(object) {
    return typeof object === 'undefined' || object == null;
}

/**
 * Get the name of a module.
 * @param mod A reference to the module.
 * @return The name of the module, which is the filename minus the file extension.
 * @example getModuleName({filename: '/usr/src/module.js'}) ==> 'module'
 */
module.exports.getModuleName = function(mod) {
    return path.basename(mod.filename, path.extname(mod.filename));
}

/**
 * Get the qualified name of a function within a module.
 * @param mod A reference to the module the function resides in.
 * @param fun A reference to the function.
 * @return A string containing the name of the module and function in the format 'module.function'.
 * @example getFunctionName({filename: 'module.js'}, {name: 'foo'}) ==> 'module.foo'
 */
module.exports.getFunctionName = function(mod, fun) {
    return `${module.exports.getModuleName(mod)}.${fun.name}`;
}
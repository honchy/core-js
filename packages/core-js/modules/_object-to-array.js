var objectKeys = require('./_object-keys');
var toIndexedObject = require('core-js-internals/to-indexed-object');
var propertyIsEnumerable = require('./_object-property-is-enumerable').f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (propertyIsEnumerable.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

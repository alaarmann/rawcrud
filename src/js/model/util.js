/*
 * Utility Functions 
*/

/*globals exports */

exports.clone = function ( aObjectToClone ) {
  'use strict';
  var result = {};
  var property;
  for (property in aObjectToClone) {
    if (Object.prototype.hasOwnProperty.call(aObjectToClone, property)) {
      result[property] = aObjectToClone[property];
    }
  }
  return result;
};

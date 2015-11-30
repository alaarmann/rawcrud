/*
 * Result Component 
*/

/*globals require, module */

var createView = require('./listView.js');

module.exports = (function () {
  'use strict';
  var containerElement;
  var getModel;

  var create = function (parameters){
    var result;
    containerElement = parameters.containerElement;
    getModel = parameters.getModel;
    
    createView(parameters);

    result = {};

    return result;
  };
 
  return create;
}());


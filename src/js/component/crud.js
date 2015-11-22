/*
 * CRUD Component 
*/

/*globals require, module */

var $ = require('jquery');
var createResultlist = require('./result.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var model;  
    var resultlistElement;
    var resultlistComponent;
    var result;

    containerElement = parameters.containerElement;
    model = parameters.model;
    resultlistElement = $('<div/>').addClass('result');
    containerElement.append(resultlistElement);
    resultlistComponent = createResultlist({containerElement : resultlistElement, model : model.getHeadItems()});

    result = {};

    return result;
  };
 
  return create;
}());


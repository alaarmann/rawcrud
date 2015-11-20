/*
 * CRUD Component 
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require, module */

var $ = require('jquery');
var createResultlist = require('./result.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var resultlistElement;
    var resultlistComponent;  
    var result;

    containerElement = parameters.containerElement;
    resultlistElement = $('<div/>').addClass('result');
    containerElement.append(resultlistElement);
    resultlistComponent = createResultlist({containerElement : resultlistElement});

    result = {};

    return result;
  };
 
  return create;
}());


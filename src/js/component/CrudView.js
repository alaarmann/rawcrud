/*
 * CRUD View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var editorElement;
    var resultlistElement;

    editorElement = $('<div/>').addClass('editor');
    aContainerElement.append(editorElement);

    resultlistElement = $('<div/>').addClass('result');
    aContainerElement.append(resultlistElement);
    
    return ;
  };
 
  return create;
}());


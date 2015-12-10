/*
 * CRUD View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var editorElement;
    var buttonElement;
    var resultlistElement;

    editorElement = $('<div/>').addClass('create');
    aContainerElement.append(editorElement);

    buttonElement = $('<div>Create HeadItem</div>').addClass('button');
    aContainerElement.append(buttonElement);

    resultlistElement = $('<div/>').addClass('result');
    aContainerElement.append(resultlistElement);
    
    return ;
  };
 
  return create;
}());


/*
 * CRUD Component 
*/

/*globals require, module */

var $ = require('jquery');
var createCreate = require('./create.js');
var createResultlist = require('./result.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var model;  
    var createElement;
    var createComponent;
    var resultlistElement;
    var resultlistComponent;
    var result;
    var buttonElement;

    containerElement = parameters.containerElement;
    model = parameters.model;

    createElement = $('<div/>').addClass('create');
    containerElement.append(createElement);
    createComponent = createCreate({containerElement : createElement, model : model.addHeadItem});

    buttonElement = $('<div>Create HeadItem</div>').addClass('button');
    buttonElement.button().on( "click", function() {
      createElement.find('.create-dialog').dialog( "open" );
    });

    containerElement.append(buttonElement);

    resultlistElement = $('<div/>').addClass('result');
    containerElement.append(resultlistElement);
    resultlistComponent = createResultlist({containerElement : resultlistElement, getModel : model.getHeadItems});

    result = {};

    return result;
  };
 
  return create;
}());


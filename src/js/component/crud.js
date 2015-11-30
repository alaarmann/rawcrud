/*
 * CRUD Component 
*/

/*globals require, module */

var $ = require('jquery');
var createCreate = require('./create.js');
var createResultlist = require('./result.js');

module.exports = (function () {
  'use strict';
  var createElement;
  var model;

  var editRecordAt = function (aIndex){
    var modelToWorkOn = model.startWorkOn(aIndex);
    createElement.triggerHandler('open', [ modelToWorkOn ]);
    
  };

  var create = function (parameters){
    var containerElement;
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
      var newModelToWorkOn = model.createHeadItem();
      createElement.triggerHandler('open', [ newModelToWorkOn ]);
    });

    containerElement.append(buttonElement);

    resultlistElement = $('<div/>').addClass('result');
    containerElement.append(resultlistElement);
    resultlistComponent = createResultlist({containerElement : resultlistElement, getModel : model.getHeadItems, editRecordAt : editRecordAt});

    result = {};

    return result;
  };
 
  return create;
}());


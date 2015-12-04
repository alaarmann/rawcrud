/*
 * CRUD Component 
*/

/*globals require, module */

var $ = require('jquery');
var createEditor = require('./editor.js');
var createResultlist = require('./result.js');

module.exports = (function () {
  'use strict';
  var editorElement;
  var model;

  var editRecordAt = function (aId){
    var modelToWorkOn = model.startWorkOn(aId);
    editorElement.triggerHandler('open', [ modelToWorkOn ]);
    
  };

  var create = function (parameters){
    var containerElement;
    var editorComponent;
    var resultlistElement;
    var resultlistComponent;
    var result;
    var buttonElement;

    containerElement = parameters.containerElement;
    model = parameters.model;

    editorElement = $('<div/>').addClass('create');
    containerElement.append(editorElement);
    editorComponent = createEditor({containerElement : editorElement, model : model.save});

    buttonElement = $('<div>Create HeadItem</div>').addClass('button');
    buttonElement.button().on( "click", function() {
      var newModelToWorkOn = model.createHeadItem();
      editorElement.triggerHandler('open', [ newModelToWorkOn ]);
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


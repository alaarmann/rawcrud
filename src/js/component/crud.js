/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./editor.js');
var createResultlist = require('./result.js');
var createView = require('./crudView.js');


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
    var view;

    containerElement = parameters.containerElement;
    model = parameters.model;

    view = createView(containerElement);

    editorElement = containerElement.find('.create');
    editorComponent = createEditor({containerElement : editorElement, model : model.save, onsuccess : model.retrieve});

    buttonElement = containerElement.find('.button');
    buttonElement.button().on( "click", function() {
      var newModelToWorkOn = model.createHeadItem();
      editorElement.triggerHandler('open', [ newModelToWorkOn ]);
    });

    resultlistElement = containerElement.find('.result');
    resultlistComponent = createResultlist({containerElement : resultlistElement, getModel : model.getHeadItems, editRecordAt : editRecordAt});

    model.retrieve();
    
    result = {};

    return result;
  };
 
  return create;
}());


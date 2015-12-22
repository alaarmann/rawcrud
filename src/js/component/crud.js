/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./editor.js');
var createResultlist = require('./list.js');
var createView = require('./crudView.js');


module.exports = (function () {
  'use strict';
  var editorElement;
  var repository;

  var editRecordAt = function (aId){
    var modelToWorkOn = repository.startWorkOn(aId);
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
    repository = parameters.repository;

    view = createView(containerElement);

    editorElement = containerElement.find('.editor');
    editorComponent = createEditor({containerElement : editorElement, saveToRepository : repository.save});

    buttonElement = containerElement.find('.button');
    buttonElement.button().on( "click", function() {
      var newModelToWorkOn = repository.createHeadItem();
      editorElement.triggerHandler('open', [ newModelToWorkOn ]);
    });

    resultlistElement = containerElement.find('.result');
    resultlistComponent = createResultlist({containerElement : resultlistElement, editRecordAt : editRecordAt});

    // Initially populate resultList
    resultlistElement.triggerHandler('render', {getHeadItems : function(){ return repository.retrieve(); }});
    
    result = {};

    return result;
  };
 
  return create;
}());


/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./editor.js');
var createResultlist = require('./list.js');
var createView = require('./crudView.js');


module.exports = (function () {
  'use strict';
  var resultlistElement;
  var repository;

  var editRecordAt = function (aId){
    var modelToWorkOn = repository.startWorkOn(aId);
    resultlistElement.trigger('open', {target : 'editor', data : [ modelToWorkOn ]});   
  };

  var create = function (parameters){
    var containerElement;
    var editorComponent;
    var editorElement;
    var resultlistComponent;
    var result;
    var buttonElement;
    var view;

    containerElement = parameters.containerElement;
    repository = parameters.repository;

    view = createView(containerElement);

    editorElement = containerElement.find('.editor');
    buttonElement = containerElement.find('.button');
    resultlistElement = containerElement.find('.result');


    editorComponent = createEditor({containerElement : editorElement, saveToRepository : repository.save});

    buttonElement.button().on( "click", function() {
      var newModelToWorkOn = repository.createHeadItem();
      // let open event bubble up to navigator
      resultlistElement.trigger('open', {target : 'editor', data : [ newModelToWorkOn ]});
    });

    
    resultlistComponent = createResultlist({containerElement : resultlistElement, editRecordAt : editRecordAt, retrieve : repository.retrieve});

    // Initially populate resultList --> move this to navigator!
    resultlistElement.triggerHandler('show');
    
    result = {};

    return result;
  };
 
  return create;
}());


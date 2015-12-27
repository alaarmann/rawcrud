/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./editor.js');
var createRetriever = require('./RetrieverPresenter.js');
var createView = require('./crudView.js');


module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var retrieverElement;
    var repository;
    var containerElement;
    var editorComponent;
    var editorElement;
    var retrieverComponent;
    var result;
    var buttonElement;
    var view;

    containerElement = parameters.containerElement;
    repository = parameters.repository;

    view = createView(containerElement);

    editorElement = containerElement.find('.editor');
    buttonElement = containerElement.find('.button');
    retrieverElement = containerElement.find('.result');


    editorComponent = createEditor({containerElement : editorElement, saveToRepository : repository.save});

    buttonElement.button().on( "click", function() {
      var newModelToWorkOn = repository.createHeadItem();
      // let open event bubble up to navigator
      retrieverElement.trigger('open', {target : 'editor', data : [ newModelToWorkOn ]});
    });

    
    retrieverComponent = createRetriever({containerElement : retrieverElement, startWorkOn : repository.startWorkOn, retrieve : repository.retrieve});

    result = {};

    return result;
  };
 
  return create;
}());


/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var createView = require('./CrudView.js');


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
    var view;

    containerElement = parameters.containerElement;
    repository = parameters.repository;

    view = createView(containerElement);

    editorElement = containerElement.find('.editor');
    retrieverElement = containerElement.find('.result');


    editorComponent = createEditor({containerElement : editorElement, saveToRepository : repository.save});

    retrieverComponent = createRetriever({containerElement : retrieverElement, startWorkOn : repository.startWorkOn, retrieve : repository.retrieve, createHeadItem : repository.createHeadItem});

    result = {};

    return result;
  };
 
  return create;
}());


/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var createView = require('./CrudView.js');


module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var retrieverElement;
    var editorComponent;
    var editorElement;
    var retrieverComponent;
    var result;
    var view;

    view = createView(aContainerElement);

    // TODO: move cascading component-creation to separate module. No jquery dependency here!
    editorElement = aContainerElement.find('.editor');
    retrieverElement = aContainerElement.find('.result');


    editorComponent = createEditor(editorElement);

    retrieverComponent = createRetriever(retrieverElement);

    result = {};

    return result;
  };
 
  return create;
}());


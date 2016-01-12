/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var RegistrationCapable = require('./RegistrationCapable.js');
var makeNavigationCapable = require('./NavigationCapable.js');

module.exports = function (aContainerElement){
  'use strict';
  var component;

  component = {getContainerElement : function(){return aContainerElement;}};
  RegistrationCapable.apply(component);
  makeNavigationCapable.apply(component);

  // order matters here
  component.register('editor', createEditor);
  component.register('result', createRetriever);

  // Open Retriever
  component.openNewScreen('result');

  return component;
};


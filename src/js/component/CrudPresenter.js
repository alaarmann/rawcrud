/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var RegistrationCapable = require('./RegistrationCapable.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var createExtendable = require('../trait/Extendable.js');
var makeContainerHolder = require('./ContainerHolder.js');

module.exports = function (aContainerElement){
  'use strict';
  var component = {};

  createExtendable(component)
    .acquire(makeContainerHolder)
    .acquire(RegistrationCapable)
    .acquire(makeNavigationCapable);

  // order matters here
  component.setContainerElement(aContainerElement);
  component.register('editor', createEditor);
  component.register('result', createRetriever);

  // Open Retriever
  component.openNewScreen('result');

  return component;
};


/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var RegistrationCapable = require('./RegistrationCapable.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var createAspirant = require('../trait/Aspirant.js');

module.exports = function (aContainerElement){
  'use strict';
  var component = createAspirant()
    .acquire(RegistrationCapable)
    .acquire(makeNavigationCapable)
    .start();

  // order matters here
  component.getContainerElement = function(){ return aContainerElement;};
  component.register('editor', createEditor);
  component.register('result', createRetriever);

  // Open Retriever
  component.openNewScreen('result');

  return component;
};


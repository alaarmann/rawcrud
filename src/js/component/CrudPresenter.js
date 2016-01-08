/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var RegistrationCapable = require('./RegistrationCapable.js');
var makeNavigationCapable = require('./NavigationCapable.js');



module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var thisComponent;

    thisComponent = {getContainerElement : function(){return aContainerElement;}};
    RegistrationCapable.apply(thisComponent);
    makeNavigationCapable.apply(thisComponent, [aContainerElement]);


    thisComponent.register('editor', createEditor);
    thisComponent.register('result', createRetriever);

    // Open Retriever
    thisComponent.openNewScreen('result');

    return;
  };
 
  return create;
}());


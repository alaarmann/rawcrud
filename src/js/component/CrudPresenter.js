/*
 * CRUD Component 
*/

/*globals require, module */

var createEditor = require('./EditorPresenter.js');
var createRetriever = require('./RetrieverPresenter.js');
var RegistrationCapable = require('./RegistrationCapable.js');



module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var thisComponent;

    thisComponent = {getContainerElement : function(){return aContainerElement;}};
    RegistrationCapable.apply(thisComponent);

    thisComponent.register('editor', createEditor);
    thisComponent.register('result', createRetriever);


    return;
  };
 
  return create;
}());


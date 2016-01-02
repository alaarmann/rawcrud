/*
 * Editor Component 
*/

/*globals require, module */

var createView = require('./EditorView.js');
var createBaseComponent = require('./BaseComponent.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var repository = require('../model/repository.js');


module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var save;
    var processForm;
    var component = {};

    // User triggered action, will be bound to .actionProcess
    component.actionProcess = function(){
      processForm();
    };
    component.actionDefault = function(){
      processForm();
    };
    component.actionCancel = function(){
      // Screen flow
      component.closeScreen();
    };
    component.view = createView(aContainerElement);

    createBaseComponent.apply(component, [aContainerElement]);
    makeNavigationCapable.apply(component, [aContainerElement]);

    save = repository.save;

    processForm = function(){
      component.evaluate();
      save(component.model);

      // Screen flow
      component.closeScreen();
    };

    return component;
  };
 
  return create;
}());


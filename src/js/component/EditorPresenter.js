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
    var view;
    var component = {getContainerElement : function(){return aContainerElement;}};

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
    // Callback for screen flow (Navigation triggered action)
    component.openScreen = function(aModelToWorkOn){
      var view; 
      if (typeof component.getView === 'function'){
        view = component.getView();
      }
      // model is set HERE!
      component.model = aModelToWorkOn;
      component.render();
      if (view && typeof view.open === 'function'){
        view.open();
      }
    };

    view = createView(aContainerElement);
    component.getView = function(){return view;};

    createBaseComponent.apply(component);
    makeNavigationCapable.apply(component);

    save = repository.save;

    processForm = function(){
      component.evaluate();
      save(component.model);

      // Screen flow
      component.closeScreen();
    };

    // bind actions once at construction time
    component.bindAction();
    component.bindActivate();

    return component;
  };
 
  return create;
}());


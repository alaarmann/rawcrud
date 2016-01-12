/*
 * Editor Component 
*/

/*globals require, module */

var createView = require('./EditorView.js');
var createBaseComponent = require('./BaseComponent.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var repository = require('../model/repository.js');
var createExtendable = require('../trait/Extendable.js');
var makeContainerHolder = require('./ContainerHolder.js');

module.exports =  function (aContainerElement){
  'use strict';
  var save;
  var processForm;
  var component = {};

  createExtendable(component).acquire(makeContainerHolder).acquire(createView).acquire(createBaseComponent).acquire(makeNavigationCapable);

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
    // model is set HERE!
    component.model = aModelToWorkOn;
    component.render();
    if (typeof component.openView === 'function'){
      component.openView();
    }
  };


  save = repository.save;

  processForm = function(){
    component.evaluate();
    save(component.model);

    // Screen flow
    component.closeScreen();
  };

  // once at construction time
  // TODO: order is important here!!
  component.setContainerElement(aContainerElement);
  component.buildView();
  component.bindAction();
  component.bindActivate();

  return component;
};


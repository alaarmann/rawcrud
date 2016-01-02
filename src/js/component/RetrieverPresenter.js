/*
 * Retriever Presenter 
*/

/*globals require, module */

var createView = require('./RetrieverView.js');
var createBaseComponent = require('./BaseComponent.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var repository = require('../model/repository.js');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var component = {};
    var processForm;

    // User triggered event
    component.activateHeadItems = function(aActivatedId){
      editRecordAt(aActivatedId);
    };
    component.actionCreate = function(){
      var newModelToWorkOn = repository.createHeadItem();
      component.openNewScreen('editor', [ newModelToWorkOn ]);
    };
    component.view = createView(aContainerElement);
    createBaseComponent.apply(component, [aContainerElement]);
    makeNavigationCapable.apply(component, [aContainerElement]);

    processForm = function(){
      component.model = {getHeadItems : function(){ return repository.retrieve(); }};
      component.render();
    };
    component.openScreen = processForm;
    component.showScreen = processForm;

    var editRecordAt = function (aId){
      var modelToWorkOn = repository.startWorkOn(aId);
      component.openNewScreen('editor', [ modelToWorkOn ]);
    };

    return component;
  };
 
  return create;
}());


/*
 * Retriever Presenter 
*/

/*globals require, module */

var createView = require('./RetrieverView.js');
var createBaseComponent = require('./BaseComponent.js');
var makeNavigationCapable = require('./NavigationCapable.js');
var repository = require('../model/repository.js');
var createHeadItemFilter = require('../model/headItemFilter.js');
var createExtendable = require('../trait/Extendable.js');
var makeContainerHolder = require('./ContainerHolder.js');

module.exports = function (aContainerElement){
  'use strict';
  var component = {};
  var processForm;

  createExtendable(component).acquire(makeContainerHolder).acquire(createView).acquire(createBaseComponent).acquire(makeNavigationCapable);

  // User triggered event
  component.activateHeadItems = function(aActivatedId){
    editRecordAt(aActivatedId);
  };
  component.actionCreate = function(){
    var newModelToWorkOn = repository.createHeadItem();
    component.openNewScreen('editor', [ newModelToWorkOn ]);
  };
  component.actionFind = function(){
    processForm();
  };
  component.actionDefault = function(){
    processForm();
  };

  processForm = function(){
    var headItemFilter = createHeadItemFilter();
    component.model = headItemFilter;
    component.evaluate();

    console.log('retrieve with filter owner=' + headItemFilter.getOwner() + ' and reference=' + headItemFilter.getReference());
    component.model = {getHeadItems : function(){ return repository.retrieve(headItemFilter); }};
    component.render();
  };
  component.openScreen = processForm;
  component.showScreen = processForm;

  var editRecordAt = function (aId){
    var modelToWorkOn = repository.startWorkOn(aId);
    component.openNewScreen('editor', [ modelToWorkOn ]);
  };

  // once at construction time
  // TODO: order is important here!!
  component.setContainerElement(aContainerElement);
  component.buildView();
  component.bindAction();
  component.bindActivate();
  return component;
};


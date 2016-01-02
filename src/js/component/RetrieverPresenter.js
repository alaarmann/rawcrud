/*
 * Retriever Presenter 
*/

/*globals require, module */

var createView = require('./RetrieverView.js');
var createBaseComponent = require('./BaseComponent.js');
var repository = require('../model/Repository.js');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var result;
    var component;
    var processForm;

    component = createBaseComponent(
      // User triggered event
      {
        'containerElement' : aContainerElement,
        'activateHeadItems' : function(aActivatedId){
          editRecordAt(aActivatedId);
        },
        'actionCreate' : function(){
          var newModelToWorkOn = repository.createHeadItem();
          component.navigateByOpen('editor', [ newModelToWorkOn ]);
        },
        'view' : createView(aContainerElement)
      }
    );

    processForm = function(){
      component.model = {getHeadItems : function(){ return repository.retrieve(); }};
      component.render();
    };
    component.show = processForm;

    var editRecordAt = function (aId){
      var modelToWorkOn = repository.startWorkOn(aId);
      component.navigateByOpen('editor', [ modelToWorkOn ]);
    };

    result = {};

    return result;
  };
 
  return create;
}());


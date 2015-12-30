/*
 * Retriever Presenter 
*/

/*globals require, module */

var createView = require('./RetrieverView.js');
var createBaseComponent = require('./BaseComponent.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var result;
    var component;
    var processForm;

    component = createBaseComponent(
      // User triggered event
      {
        'containerElement' : parameters.containerElement,
        'activateHeadItems' : function(aActivatedId){
          editRecordAt(aActivatedId);
        },
        'actionCreate' : function(){
          var newModelToWorkOn = parameters.createHeadItem();
          component.navigateByOpen('editor', [ newModelToWorkOn ]);
        },
        'view' : createView(parameters)
      }
    );

    processForm = function(){
      component.model = {getHeadItems : function(){ return parameters.retrieve(); }};
      component.render();
    };
    component.show = processForm;

    var editRecordAt = function (aId){
      var modelToWorkOn = parameters.startWorkOn(aId);
      component.navigateByOpen('editor', [ modelToWorkOn ]);
    };

    result = {};

    return result;
  };
 
  return create;
}());


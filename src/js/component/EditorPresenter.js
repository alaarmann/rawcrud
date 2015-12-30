/*
 * Editor Component 
*/

/*globals require, module */

var createView = require('./EditorView.js');
var createBaseComponent = require('./BaseComponent.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var save;
    var result;
    var processForm;
    var component;

    component = createBaseComponent(
      {
        'containerElement' : parameters.containerElement,
        // User triggered action, will be bound to .actionProcess
        'actionProcess' : function(){
          processForm();
        },
        'actionDefault' : function(){
          processForm();
        },
        'actionCancel' : function(){
          // Screen flow
          component.close();
        },
        'view' : createView(parameters.containerElement)
      }
    );

    save = parameters.saveToRepository;

    processForm = function(){
      component.evaluate();
      save(component.model);

      // Screen flow
      component.close();
    };

    result = {};

    return result;
  };
 
  return create;
}());


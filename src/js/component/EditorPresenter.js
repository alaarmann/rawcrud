/*
 * Editor Component 
*/

/*globals require, module */

var createView = require('./EditorView.js');
var createBaseComponent = require('./BaseComponent.js');
var repository = require('../model/repository.js');


module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var save;
    var result;
    var processForm;
    var component;

    component = createBaseComponent(
      {
        'containerElement' : aContainerElement,
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
        'view' : createView(aContainerElement)
      }
    );

    save = repository.save;

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


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
    var view;
    var processForm;
    var component;

    component = createBaseComponent(
      {
        'containerElement' : parameters.containerElement,
        // User triggered action
        'chooseProcess' : function(){
          processForm();
        }

      }
    );

    save = parameters.saveToRepository;

    view = createView(component.containerElement);

    processForm = function(){
      component.evaluate();
      save(component.model);

      // Screen flow
      view.close();
      component.containerElement.trigger('close');
    };

    
//    component.containerElement.on( "ua.process", function( event ) {
//      event.preventDefault();
//      processForm();
//    });

    // Screen flow, Navigation triggered action
    component.containerElement.on('open', function(aEvent, aModelToWorkOn){
      // model is set HERE!
      component.model = aModelToWorkOn;
      component.render();
      view.open();
    });

    result = {};

    return result;
  };
 
  return create;
}());


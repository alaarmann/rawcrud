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
    var dialog;
    var processForm;
    var component;

    component = createBaseComponent(
      {
        'containerElement' : parameters.containerElement
      }
    );

    save = parameters.saveToRepository;

    dialog = createView(component.containerElement);

    processForm = function(){
      component.evaluate();
      save(component.model);
      dialog.close();
      component.containerElement.trigger('close');
    };

    component.containerElement.on( "ua.process", function( event ) {
      event.preventDefault();
      processForm();
    });

    component.containerElement.on('open', function(aEvent, aModelToWorkOn){
      // model is set HERE!
      component.model = aModelToWorkOn;
      component.render();
      dialog.open();
    });

    result = {};

    return result;
  };
 
  return create;
}());


/*
 * Editor Component 
*/

/*globals require, module */

var createView = require('./editorView.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var save;
    var result;
    var dialogForm;
    var dialog;
    var processForm;
    var owner;
    var reference;
    var view;
    var model;
    var onsuccess;
    var render;
    var evaluate;

    containerElement = parameters.containerElement;
    containerElement.uniqueId();
    save = parameters.model;
    onsuccess = parameters.onsuccess;

    view = createView(containerElement);

    dialog = view;
    dialogForm = dialog.find('form');
    owner = view.find('#owner');
    reference = view.find('#reference');

    processForm = function(){
      evaluate();
      save(model);
      onsuccess();
      dialog.dialog( "close" );
    };

    // submit triggered by e.g. enter while dialog has focus
    dialogForm.on( "submit", function( event ) {
      event.preventDefault();
      processForm();
    });

    dialog.dialog( "option", "buttons", {
      'Create': processForm,
      'Cancel': function() {
          dialog.dialog( "close" );
        }
    });

    containerElement.on('open', function(aEvent, aModelToWorkOn){
      // FIXME model is set HERE!?
      model = aModelToWorkOn;
      render();
      dialog.dialog( 'open' );
    });

    /* Wire model's properties to output fields in view */ 
    render = function(){
      var each;
      var propertyName;
      var className;

      for (each in model) {
        if (each.indexOf('get') !== 0) {
          continue;
        }
        if (!model.hasOwnProperty(each)) {
          continue;
        }
        propertyName = each.slice('get'.length);
        className = 'prop' + propertyName;

        containerElement.find('input.' + className).val(model[each]());
      }
    };

    /* Wire model's properties to input fields in view */ 
    evaluate = function(){
      var each;
      var propertyName;
      var className;

      for (each in model) {
        if (each.indexOf('set') !== 0) {
          continue;
        }
        if (!model.hasOwnProperty(each)) {
          continue;
        }
        propertyName = each.slice('set'.length);
        className = 'prop' + propertyName;

        model[each](containerElement.find('input.' + className).val());
      }

    };

    result = {};

    return result;
  };
 
  return create;
}());


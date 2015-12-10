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
      model.setOwner(owner.val());
      model.setReference(reference.val());
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
      model = aModelToWorkOn;
      owner.val(model.getOwner());
      reference.val(model.getReference());
      dialog.dialog( 'open' );
    });

    result = {};

    return result;
  };
 
  return create;
}());


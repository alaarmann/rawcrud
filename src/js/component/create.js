/*
 * Create Component 
*/

/*globals require, module */

var createView = require('./editorView.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var addHeadItem;
    var result;
    var dialogForm;
    var dialog;
    var processForm;
    var owner;
    var reference;
    var view;

    containerElement = parameters.containerElement;
    containerElement.uniqueId();
    addHeadItem = parameters.model;

    view = createView(containerElement);

    dialog = view;
    dialogForm = dialog.find('form');
    owner = view.find('#owner');
    reference = view.find('#reference');

    processForm = function(){
      addHeadItem({
        'owner' : owner.val(), 
        'reference' : reference.val() 
      });
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

    result = {};

    return result;
  };
 
  return create;
}());


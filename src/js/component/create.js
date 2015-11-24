/*
 * Create Component 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var addHeadItem;
    var result;
    var dialogElement;
    var dialogForm;
    var dialog;
    var buttonElement;
    var processForm;
    var ownerElement;
    var referenceElement;

    containerElement = parameters.containerElement;
    addHeadItem = parameters.model;


    processForm = function(){
      addHeadItem({
        'owner' : ownerElement.val(), 
        'reference' : referenceElement.val() 
      });
      dialog.dialog( "close" );
    };

    dialogElement = $('<div title="Create new HeadItem"/>').addClass('create-dialog');
    dialogForm =  $('<form>' +
        '<fieldset>' +
          '<label for="owner">Owner</label>' +
          '<input type="text" name="owner" id="owner" value="" class="text ui-widget-content ui-corner-all">' +
          '<label for="reference">Reference</label>' +
          '<input type="text" name="reference" id="reference" value="" class="text ui-widget-content ui-corner-all">' +
          '<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">' +
        '</fieldset>' +
      '</form>'
    );

    ownerElement = dialogForm.find('#owner');
    referenceElement = dialogForm.find('#reference');
    
    containerElement.append(dialogElement);
    dialogElement.append(dialogForm);

    dialog = dialogElement.dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Create": processForm,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
      }
    });
 
    dialogForm.on( "submit", function( event ) {
      event.preventDefault();
      processForm();
    });

 
    buttonElement = $('<div>Create HeadItem</div>').addClass('button');
    buttonElement.button().on( "click", function() {
      dialog.dialog( "open" );
    });

    containerElement.append(buttonElement);

    result = {};

    return result;
  };
 
  return create;
}());


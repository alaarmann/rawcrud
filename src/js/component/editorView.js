/*
 * Editor View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var dialogElement;
    var containerElementId;
    
    containerElementId = aContainerElement.attr('id');
    dialogElement =  $(
      '<div title="Create / edit HeadItem" class="editor-dialog">' +
        '<form>' +
          '<fieldset>' +
            '<label for="owner">Owner</label>' +
            '<input type="text" name="owner" id="owner" value="" class="text ui-widget-content ui-corner-all"/>' +
            '<label for="reference">Reference</label>' +
            '<input type="text" name="reference" id="reference" value="" class="text ui-widget-content ui-corner-all"/>' +
            '<input type="submit" tabindex="-1" style="position:absolute; top:-1000px"/>' +
          '</fieldset>' +
        '</form>' +
      '</div>'
    );

    aContainerElement.append(dialogElement);

    dialogElement.dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      appendTo : '#' + containerElementId,
      close: function() {
      }
    });

//    dialogForm.on( "submit", function( event ) {
//      event.preventDefault();
//      processForm();
//    });

 

    return dialogElement;
  };
 
  return create;
}());


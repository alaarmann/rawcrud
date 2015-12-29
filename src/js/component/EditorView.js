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
    var open;
    var close;
        
    aContainerElement.uniqueId();

    containerElementId = aContainerElement.attr('id');
    dialogElement =  $(
      '<div title="Create / edit HeadItem" class="editor-dialog">' +
        '<form>' +
          '<fieldset>' +
            '<label for="owner">Owner</label>' +
            '<input type="text" name="owner" id="owner" value="" class="propOwner text ui-widget-content ui-corner-all"/>' +
            '<label for="reference">Reference</label>' +
            '<input type="text" name="reference" id="reference" value="" class="propReference text ui-widget-content ui-corner-all"/>' +
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
      },
      buttons: [
        {
          text: "OK",
          'class' : 'actionProcess',
          click : function(){} // Real action is bound in BasePresenter This is to avoid error in console: 'click is undefined'          
        },
        {
          text: "Cancel",
          'class' : 'actionCancel',
          click : function(){
            close();
          }
        }
      ]
    });

    // submit triggered by e.g. enter while dialog has focus
    aContainerElement.find('form').on( "submit", function( event ) {
      event.preventDefault();
      aContainerElement.triggerHandler('ua.process');
    });

    open = function() {
      dialogElement.dialog( 'open' );
    };

    close = function() {
      dialogElement.dialog( 'close' );
    };
 

    return {
      open : open,
      close : close
    };
  };
 
  return create;
}());


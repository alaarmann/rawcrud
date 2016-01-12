/*
 * Editor View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = function (){
  'use strict';
  var dialogElement;
  var that = this;

  that.buildView = function(){
    var containerElement = that.getContainerElement();
    var containerElementId;
        
    containerElement.uniqueId();

    containerElementId = containerElement.attr('id');
    dialogElement =  $(
      '<div title="Create / edit HeadItem" class="editor-dialog">' +
        '<form>' +
          '<fieldset>' +
            '<label for="owner">Owner</label>' +
            '<input type="text" name="owner" id="owner" value="" class="propOwner text ui-widget-content ui-corner-all"/>' +
            '<label for="reference">Reference</label>' +
            '<input type="text" name="reference" id="reference" value="" class="propReference text ui-widget-content ui-corner-all"/>' +
            '<input type="submit" tabindex="-1" class="invisible"/>' +
          '</fieldset>' +
        '</form>' +
      '</div>'
    );

    containerElement.append(dialogElement);

    dialogElement.dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      appendTo : '#' + containerElementId,
      close: function( aEvent ) {
        // event triggered by built-in close (X)-Button
        if ( aEvent.originalEvent ) {
            containerElement.triggerHandler('actionCancel');
            return false;
        }
      },
      buttons: [
        {
          text: "OK",
          'class' : 'actionProcess',
          click : function(){} // Real action is bound in BasePresenter This is to avoid error in console: 'click is undefined'          
        },
        {
          text: "Cancel",
          click : function(){
            containerElement.triggerHandler('actionCancel'); // presenter binds actions to events also
          }
        }
      ]
    });

    return;
  };

  that.openView = function() {
    dialogElement.dialog( 'open' );
  };

  that.closeView = function() {
    dialogElement.dialog( 'close' );
  };

  return that;
};


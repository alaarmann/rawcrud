/*
 * Retriever View 
*/

/*globals require, module */

var $ = require('jquery');

/*
  required:
  getContainerElement()
*/
module.exports = function (){
  'use strict';
  var creatorElement;
  var filterElement;
  var tableElement;
  var that = this;

  that.buildView = function(){
    var containerElement = that.getContainerElement();
    filterElement =  $(
      '<div title="Filter for HeadItem-Search">' +
        '<form>' +
          '<fieldset>' +
            '<label for="filterOwner">Owner</label>' +
            '<input type="text" name="owner" id="filterOwner" value="" class="propOwner text ui-widget-content ui-corner-all"/>' +
            '<label for="filterReference">Reference</label>' +
            '<input type="text" name="reference" id="filterReference" value="" class="propReference text ui-widget-content ui-corner-all"/>' +
            '<div class="actionFind button">Find HeadItems</div>' +
            '<input type="submit" tabindex="-1" class="invisible"/>' +
          '</fieldset>' +
        '</form>' +
      '</div>'
    );
    containerElement.append(filterElement);
    filterElement.find('.actionFind.button').button();

    creatorElement = $('<div>Create HeadItem</div>').addClass('button');
    containerElement.append(creatorElement);
    creatorElement.button().on( 'click', function() {
      containerElement.triggerHandler('actionCreate');
      return false;
    });

    tableElement = $('<table/>');
    tableElement.append('<tr><th  class="propId">Id (hidden)</th><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    tableElement.append('<tr class="propHeadItems rawcrud-list"><td class="propId"></td><td class="propOwner"></td><td class="propReference"></td><td>Zeile , Spalte 3</td></tr>');
    containerElement.append(tableElement);
    containerElement.addClass('headItems');

    return ;
  };

  return that;
};

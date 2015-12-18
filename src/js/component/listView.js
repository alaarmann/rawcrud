/*
 * List View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';
  var containerElement;
  var tableElement;

  var create = function (parameters){
    containerElement = parameters.containerElement;

    tableElement = $('<table/>');
    tableElement.append('<tr><th  class="propId">Id (hidden)</th><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
      tableElement.append('<tr class="propHeadItems rawcrud-list"><td class="propId"></td><td class="propOwner"></td><td class="propReference"></td><td>Zeile , Spalte 3</td></tr>');
    containerElement.append(tableElement);
    containerElement.addClass('headItems');
    containerElement.on('dblclick', '.propHeadItems', function(){
      var selectedId = $(this).find('.propId').text();
      parameters.editRecordAt(selectedId);
    });

    return ;
  };
 
  return create;
}());


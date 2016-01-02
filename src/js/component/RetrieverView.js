/*
 * Retriever View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';
  var tableElement;

  var create = function (aContainerElement){
    var creatorElement;

    creatorElement = $('<div>Create HeadItem</div>').addClass('button');
    aContainerElement.append(creatorElement);
    creatorElement.button().on( 'click', function() {
      aContainerElement.triggerHandler('actionCreate');
      return false;
    });



    tableElement = $('<table/>');
    tableElement.append('<tr><th  class="propId">Id (hidden)</th><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
      tableElement.append('<tr class="propHeadItems rawcrud-list"><td class="propId"></td><td class="propOwner"></td><td class="propReference"></td><td>Zeile , Spalte 3</td></tr>');
    aContainerElement.append(tableElement);
    aContainerElement.addClass('headItems');

    return ;
  };
 
  return create;
}());


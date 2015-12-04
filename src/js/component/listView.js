/*
 * List View 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';
  var containerElement;
  var getModel;
  var tableElement;

  var render = function(){
    var model;
    var i;
    model = getModel();
    tableElement.find('td').closest('tr').remove();
    for(i=0;i<model.length;i+=1){
      tableElement.append('<tr class="headItem"><td class="id">' + model[i].getId() + '</td><td>' + model[i].getOwner() + '</td><td>' + model[i].getReference() + '</td><td>Zeile ' + i + ', Spalte 3</td></tr>');
    }

  };


  var create = function (parameters){
    containerElement = parameters.containerElement;
    getModel = parameters.getModel;

    tableElement = $('<table/>');
    tableElement.append('<tr><th  class="id">Id (hidden)</th><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    containerElement.append(tableElement);
    containerElement.addClass('headItems');
    containerElement.on('render', function(){
      render();
    });
    containerElement.on('dblclick', '.headItem', function(){
      var selectedId = $(this).find('.id').text();
      parameters.editRecordAt(selectedId);
    });

    render();

    return ;
  };
 
  return create;
}());


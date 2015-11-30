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
      tableElement.append('<tr class="headItem"><td>' + model[i].getOwner() + '</td><td>' + model[i].getReference() + '</td><td>Zeile ' + i + ', Spalte 3</td></tr>');
    }

  };


  var create = function (parameters){
    containerElement = parameters.containerElement;
    getModel = parameters.getModel;

    tableElement = $('<table/>');
    tableElement.append('<tr><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    containerElement.append(tableElement);
    containerElement.addClass('headItems');
    containerElement.on('render', function(){
      render();
    });
    containerElement.on('dblclick', '.headItem', function(){
      var rowIndex = tableElement.find('.headItem').index(this);
      parameters.editRecordAt(rowIndex);
    });

    render();

    return ;
  };
 
  return create;
}());


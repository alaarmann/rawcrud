/*
 * Result Component 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';
  var containerElement;
  var model;
  var tableElement;

  var render = function(){
    var i;
    tableElement.find('td').closest('tr').remove();
    for(i=0;i<model.length;i+=1){
      tableElement.append('<tr><td>' + model[i].getOwner() + '</td><td>' + model[i].getReference() + '</td><td>Zeile ' + i + ', Spalte 3</td></tr>');
    }

  };

  var create = function (parameters){
    var result;
    containerElement = parameters.containerElement;
    model = parameters.model;
    tableElement = $('<table/>');
    tableElement.append('<tr><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    containerElement.append(tableElement);
    containerElement.addClass('headItemsList');
    containerElement.on('render', function(){
      render();
    });

    render();
    result = {};

    return result;
  };
 
  return create;
}());


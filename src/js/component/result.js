/*
 * Result Component 
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var containerElement;
    var model;
    var tableElement;
    var result;
    var i;
    containerElement = parameters.containerElement;
    model = parameters.model;
    tableElement = $('<table/>');
    tableElement.append('<tr><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    for(i=0;i<model.length;i+=1){
      tableElement.append('<tr><td>' + model[i].getOwner() + '</td><td>' + model[i].getReference() + '</td><td>Zeile 1, Spalte 3</td></tr>');
    }
    containerElement.append(tableElement);

    result = {};

    return result;
  };
 
  return create;
}());


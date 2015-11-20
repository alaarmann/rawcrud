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
    var tableElement;
    var result;
    containerElement = parameters.containerElement;
    tableElement = $('<table/>');
    tableElement.append('<tr><th>Ueberschrift Spalte 1</th><th>Ueberschrift Spalte 2</th><th>Ueberschrift Spalte 3</th></tr>');
    tableElement.append('<tr><td>Zeile 1, Spalte 1</td><td>Zeile 1, Spalte 2</td><td>Zeile 1, Spalte 3</td></tr>');
    containerElement.append(tableElement);

    result = {};

    return result;
  };
 
  return create;
}());


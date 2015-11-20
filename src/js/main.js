/*
 * RawCRUD 
 * A raw CRUD application
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require */

var $ = require('jquery');
  
require('jquery-ui');

var createCrud = require('./component/crud.js');


$(function() {
  'use strict';
  var crudComponent;
//  $( ".search .options" ).selectable();

  crudComponent = createCrud({containerElement : $('#app .main')});
});

 

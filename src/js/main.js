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
var createModel = require('./model/model.js');


$(function() {
  'use strict';
  var crudComponent;
  var model;
//  $( ".search .options" ).selectable();
  model = createModel();
  crudComponent = createCrud({
    containerElement : $('#app .main'),
    model : model
  });
});

 

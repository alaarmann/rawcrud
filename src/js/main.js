/*
 * RawCRUD 
 * A raw CRUD application
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

 

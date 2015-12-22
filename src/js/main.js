/*
 * RawCRUD 
 * A raw CRUD application
*/

/*globals require */

var $ = require('jquery');
  
require('jquery-ui');

var createCrud = require('./component/crud.js');
var createRepository = require('./model/Repository.js');


$(function() {
  'use strict';
  var crudComponent;
  var repository;
//  $( ".search .options" ).selectable();
  repository = createRepository();
  crudComponent = createCrud({
    containerElement : $('#app .main'),
    repository : repository
  });
});

 

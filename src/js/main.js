/*
 * RawCRUD 
 * A raw CRUD application
*/

/*globals require */

var $ = require('jquery');
  
require('jquery-ui');

var createCrud = require('./component/CrudPresenter.js');

$(function() {
  'use strict';
  var crudComponent;
  var containerElement;

  containerElement = $('#app .main');

  crudComponent = createCrud(containerElement);

});

 

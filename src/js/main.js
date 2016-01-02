/*
 * RawCRUD 
 * A raw CRUD application
*/

/*globals require */

var $ = require('jquery');
  
require('jquery-ui');

var createCrud = require('./component/CrudPresenter.js');
var createNavigator = require('./navigator/Navigator.js');

$(function() {
  'use strict';
  var crudComponent;
  var containerElement;

  containerElement = $('#app .main');

  crudComponent = createCrud(containerElement);

  // attach navigator to topmost element
  createNavigator(containerElement);

  // start retriever
  containerElement.trigger('showScreen', {target : 'result'});
});

 

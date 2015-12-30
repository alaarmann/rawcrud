/*
 * RawCRUD 
 * A raw CRUD application
*/

/*globals require */

var $ = require('jquery');
  
require('jquery-ui');

var createCrud = require('./component/CrudPresenter.js');
var createRepository = require('./model/Repository.js');
var createNavigator = require('./navigator/Navigator.js');

$(function() {
  'use strict';
  var crudComponent;
  var repository;
  var containerElement;

  containerElement = $('#app .main');

  repository = createRepository();
  crudComponent = createCrud({
    containerElement : containerElement,
    repository : repository
  });

  // attach navigator to topmost element
  createNavigator(containerElement);

  // start retriever
  containerElement.trigger('show', {target : 'result'});
});

 

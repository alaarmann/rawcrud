/*
 * List Component 
*/

/*globals require, module */

var createView = require('./listView.js');
var createBaseComponent = require('./BaseComponent.js');

module.exports = (function () {
  'use strict';
  var getModel;
  var workOn;

  var create = function (parameters){
    var result;
    var component;

    component = createBaseComponent();

    component.containerElement = parameters.containerElement;

    getModel = parameters.getModel;
    workOn = parameters.workOn;
    
    createView(parameters);
    component.containerElement.on('render', function(){
      component.model = getModel();
      component.render();
    });

    component.model = getModel();
    component.render();
    result = {};

    return result;
  };
 
  return create;
}());


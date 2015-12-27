/*
 * List Component 
*/

/*globals require, module */

var createView = require('./listView.js');
var createBaseComponent = require('./BaseComponent.js');

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var result;
    var component;

    component = createBaseComponent(
      // User triggered event
      {
        'containerElement' : parameters.containerElement,
        'activateHeadItems' : function(aActivatedId){
          parameters.editRecordAt(aActivatedId);
        }
      }
    );

    createView(parameters);

    // Navigation triggered event
    component.containerElement.on('show', function(){
      component.model = {getHeadItems : function(){ return parameters.retrieve(); }};
      component.render();
    });

    result = {};

    return result;
  };
 
  return create;
}());


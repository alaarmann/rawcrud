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
          editRecordAt(aActivatedId);
        }
      }
    );

    createView(parameters);

    // Navigation triggered events
    component.containerElement.on('open show', function(){
      component.model = {getHeadItems : function(){ return parameters.retrieve(); }};
      component.render();
    });

    var editRecordAt = function (aId){
      var modelToWorkOn = parameters.startWorkOn(aId);
      component.containerElement.trigger('open', {target : 'editor', data : [ modelToWorkOn ]});   
    };



    result = {};

    return result;
  };
 
  return create;
}());


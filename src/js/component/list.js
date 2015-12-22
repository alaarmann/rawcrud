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

    // Model triggered event
    component.containerElement.on('render', function(aEvent, aModel){
      component.model = aModel;
      component.render();
    });

    result = {};

    return result;
  };
 
  return create;
}());


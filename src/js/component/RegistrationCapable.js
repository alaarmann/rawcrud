/*
 * RegistrationCapable 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var register;
  
    register = function(aId, aComponentCreator){
      var descendantElement;

      descendantElement = aContainerElement.find('.' + aId);
      if (!descendantElement.length){
        descendantElement = $('<div/>').addClass(aId);
        aContainerElement.append(descendantElement);
      }
      aComponentCreator(descendantElement);
    };
    
    return {
      register : register
    };
  };
 
  return create;
}());


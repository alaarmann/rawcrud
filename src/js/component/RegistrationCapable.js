/*
 * RegistrationCapable 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (){
    var register;
    var containerElement;

    // error at contruction-time if not defined
    containerElement = this.getContainerElement();

    register = function(aId, aComponentCreator){
      var descendantElement;

      descendantElement = containerElement.find('.' + aId);
      if (!descendantElement.length){
        descendantElement = $('<div/>').addClass(aId);
        containerElement.append(descendantElement);
      }
      aComponentCreator(descendantElement);
    };
    
    this.register = register;
    return this;
  };
 
  return create;
}());


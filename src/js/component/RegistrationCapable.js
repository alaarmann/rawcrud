/*
 * RegistrationCapable 
*/

/*globals require, module */

var $ = require('jquery');
/*
  required:
  getContainerElement()
*/

module.exports = function (){
  'use strict';
  var register;
  var that = this;

  register = function(aId, aComponentCreator){
    var containerElement;
    var descendantElement;
 
    containerElement = that.getContainerElement();

    descendantElement = containerElement.find('.' + aId);
    if (!descendantElement.length){
      descendantElement = $('<div/>').addClass(aId);
      containerElement.append(descendantElement);
    }
    aComponentCreator(descendantElement);
  };
    
  that.register = register;
  return that;
};


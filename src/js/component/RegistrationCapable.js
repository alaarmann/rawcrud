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
  var containerElement;
  var that = this;

  // error at contruction-time if not defined
  containerElement = that.getContainerElement();

  register = function(aId, aComponentCreator){
    var descendantElement;

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


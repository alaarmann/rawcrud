/*
 * ContainerHolder
*/

/*globals module */

module.exports =  function (){
  'use strict';
  var that = this;

  that.setContainerElement = function(aContainerElement){
    that.containerElement = aContainerElement;
  };

  that.getContainerElement = function(){
    return that.containerElement;
  };

  return that;
};


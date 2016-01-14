/*
 * Aspirant 
*/

/*globals module */

module.exports =  function (aBeginner){
  'use strict';
  var trainee = aBeginner || {};
  var acquire;
  var start;
  var aspirant;

  acquire = function(aCapability){
    aCapability.apply(trainee);
    return aspirant;
  };

  start = function(){
    return trainee;
  };

  aspirant = {
    acquire : acquire, 
    start : start
  };
  return aspirant;
};


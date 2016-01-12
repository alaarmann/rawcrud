/*
 * Extendable 
*/

/*globals module */

module.exports =  function (aAspirant){
  'use strict';
  var acquire;
  var extendable;

  acquire = function(aTrait){
    aTrait.apply(aAspirant);
    return extendable;
  };
  extendable = {acquire : acquire };
  return extendable;
};


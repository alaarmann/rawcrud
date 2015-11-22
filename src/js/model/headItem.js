/*
 * Head Item 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var owner;
    var reference;
    var customer;  
    var result;

    owner = parameters.owner;
    reference = parameters.reference;

    var getOwner = function(){
        return owner;
    };
    var getReference = function(){
        return reference;
    };
    var setCustomer = function(aCustomer){
        customer = aCustomer;
    };
    var getCustomer = function(){
        return customer;
    };

    result = {
      getOwner : getOwner,
      getReference : getReference,
      setCustomer : setCustomer,
      getCustomer : getCustomer
    };
    return result;
  };
 
  return create;
}());


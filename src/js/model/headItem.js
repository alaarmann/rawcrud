/*
 * Head Item 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var id;
    var owner;
    var reference;
    var customer;  
    var result;

    parameters = parameters || {};
    id = parameters.id;
    owner = parameters.owner;
    reference = parameters.reference;

    var getId = function(){
        return id;
    };
    var getOwner = function(){
        return owner;
    };
    var setOwner = function(aOwner){
        owner = aOwner;
    };
    var getReference = function(){
        return reference;
    };
    var setReference = function(aReference){
        reference = aReference;
    };
    var setCustomer = function(aCustomer){
        customer = aCustomer;
    };
    var getCustomer = function(){
        return customer;
    };

    result = {
      getId : getId,
      getOwner : getOwner,
      setOwner : setOwner,
      getReference : getReference,
      setReference : setReference,
      setCustomer : setCustomer,
      getCustomer : getCustomer
    };
    return result;
  };
 
  return create;
}());


/*
 * Head Item Filter
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (parameters){
    var owner;
    var reference;
    var customer;  
    var result;

    parameters = parameters || {};
    owner = parameters.owner;
    reference = parameters.reference;

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
    var exportCollection = function(){
      var result = {};
      result.owner = owner;
      result.reference = reference;
      return result;
    };

    result = {
      getOwner : getOwner,
      setOwner : setOwner,
      getReference : getReference,
      setReference : setReference,
      setCustomer : setCustomer,
      getCustomer : getCustomer,
      exportCollection : exportCollection
    };
    return result;
  };
 
  return create;
}());


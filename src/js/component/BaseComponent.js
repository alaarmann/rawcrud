/*
 * BaseComponent 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (){
    var result = {};

    /* Wire model's properties to output fields in view */ 
    result.render = function(){
      var each;
      var propertyName;
      var className;

      for (each in result.model) {
        if (each.indexOf('get') !== 0) {
          continue;
        }
        if (!result.model.hasOwnProperty(each)) {
          continue;
        }
        propertyName = each.slice('get'.length);
        className = 'prop' + propertyName;

        result.containerElement.find('input.' + className).val(result.model[each]());
      }
    };

    /* Wire model's properties to input fields in view */ 
    result.evaluate = function(){
      var each;
      var propertyName;
      var className;

      for (each in result.model) {
        if (each.indexOf('set') !== 0) {
          continue;
        }
        if (!result.model.hasOwnProperty(each)) {
          continue;
        }
        propertyName = each.slice('set'.length);
        className = 'prop' + propertyName;

        result.model[each](result.containerElement.find('input.' + className).val());
      }

    };

    return result;
  };
 
  return create;
}());


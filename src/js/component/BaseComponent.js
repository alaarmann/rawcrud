/*
 * BaseComponent 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (){
    var result = {};
    var internalRender;

    /* Wire model's properties to output fields in view */ 
    internalRender = function(aContainerElement, aModel){
      var each;
      var propertyName;
      var className;
      var value;
      var prototypeItem;
      var newItem;
      var i;

      for (each in aModel) {
        if (each.indexOf('get') !== 0) {
          continue;
        }
        if (!aModel.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(aModel[each]) !== 'function') {
          continue;
        }

        propertyName = each.slice('get'.length);
        console.log('propertyName: ' + propertyName);
        className = 'prop' + propertyName;
        value = aModel[each]();
        // Treat list value differently than single value
        if (value && value.constructor === Array){
          prototypeItem = aContainerElement.find('.rawcrud-list.' + className);
          prototypeItem.nextAll().remove();
          // FIXME do not clone id attributes
          for(i=0;i<value.length;i+=1){
            newItem = prototypeItem.clone().removeClass('rawcrud-list').appendTo(prototypeItem.parent());
            internalRender(newItem, value[i]);
          }
        } else {
          aContainerElement.find('input.' + className).val(value);
          aContainerElement.find('td.' + className).text(value);
        }
        
      }
    };

    result.render = function() {
      return internalRender(result.containerElement, result.model);
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
        if (typeof(result.model[each]) !== 'function') {
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


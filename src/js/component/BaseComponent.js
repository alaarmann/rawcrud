/*
 * BaseComponent 
*/

/*globals require, module */
var $ = require('jquery');


module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var internalRender;
    var createUserTriggeredEventHandler;
    var createUserTriggeredActionEventHandler;
    var that = this;

    
    createUserTriggeredEventHandler = function(aHandler){
      var activatedId;
      return function(){
          activatedId = $(this).find('.propId').text();
          aHandler(activatedId);
        };
    };

    /* Attach handler for user triggered event */
    (function (){
      var each;
      var propertyName;
      var className;

      for (each in that) {
        if (each.indexOf('activate') !== 0) {
          continue;
        }
        if (!that.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(that[each]) !== 'function') {
          continue;
        }
        propertyName = each.slice('activate'.length);

        className = 'prop' + propertyName;

        aContainerElement.on('dblclick', '.' + className, createUserTriggeredEventHandler(that[each]));
      }

    })();

    createUserTriggeredActionEventHandler = function(aHandler){
      return function(){
          aHandler();
          return false;
        };
    };

    (function (){
      var each;
      var className;

      for (each in that) {
        if (each.indexOf('action') !== 0) {
          continue;
        }
        if (!that.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(that[each]) !== 'function') {
          continue;
        }

        if (each === 'actionDefault') {
          aContainerElement.on( 'submit', 'form', createUserTriggeredActionEventHandler(that[each]));
        } else {
          className = each;

          aContainerElement.on('click', '.' + className, createUserTriggeredActionEventHandler(that[each]));
          aContainerElement.on(each, createUserTriggeredActionEventHandler(that[each]));
        }

      }

    })();


    /* Wire model's properties to output fields in view */ 
    internalRender = function(aInternalContainerElement, aModel){
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
        //console.log('propertyName: ' + propertyName);
        className = 'prop' + propertyName;
        value = aModel[each]();
        // Treat list value differently than single value
        if (value && value.constructor === Array){
          prototypeItem = aInternalContainerElement.find('.rawcrud-list.' + className);
          prototypeItem.nextAll().remove();
          // FIXME do not clone id attributes
          for(i=0;i<value.length;i+=1){
            newItem = prototypeItem.clone().removeClass('rawcrud-list').appendTo(prototypeItem.parent());
            internalRender(newItem, value[i]);
          }
        } else {
          aInternalContainerElement.find('input.' + className).val(value);
          aInternalContainerElement.find('td.' + className).text(value);
        }
        
      }
    };

    that.render = function() {
      return internalRender(aContainerElement, that.model);
    };

    /* Wire model's properties to input fields in view */ 
    that.evaluate = function(){
      var each;
      var propertyName;
      var className;

      for (each in that.model) {
        if (each.indexOf('set') !== 0) {
          continue;
        }
        if (!that.model.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(that.model[each]) !== 'function') {
          continue;
        }
        propertyName = each.slice('set'.length);
        className = 'prop' + propertyName;

        that.model[each](aContainerElement.find('input.' + className).val());
      }

    };

    return that;
  };
 
  return create;
}());


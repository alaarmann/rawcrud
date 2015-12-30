/*
 * BaseComponent 
*/

/*globals require, module */
var $ = require('jquery');


module.exports = (function () {
  'use strict';

  var create = function (aThisComponent){
    var result = aThisComponent || {};
    var internalRender;
    var createUserTriggeredEventHandler;
    var createUserTriggeredActionEventHandler;
    var open;
    var close;

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

      for (each in result) {
        if (each.indexOf('activate') !== 0) {
          continue;
        }
        if (!result.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(result[each]) !== 'function') {
          continue;
        }
        propertyName = each.slice('activate'.length);

        className = 'prop' + propertyName;

        result.containerElement.on('dblclick', '.' + className, createUserTriggeredEventHandler(result[each]));
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

      for (each in result) {
        if (each.indexOf('action') !== 0) {
          continue;
        }
        if (!result.hasOwnProperty(each)) {
          continue;
        }
        if (typeof(result[each]) !== 'function') {
          continue;
        }

        if (each === 'actionDefault') {
          result.containerElement.on( 'submit', 'form', createUserTriggeredActionEventHandler(result[each]));
        } else {
          className = each;

          result.containerElement.on('click', '.' + className, createUserTriggeredActionEventHandler(result[each]));
          result.containerElement.on(each, createUserTriggeredActionEventHandler(result[each]));
        }

      }

    })();


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
        //console.log('propertyName: ' + propertyName);
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

    // Screen flow, Navigation triggered action
    open = function(aEvent, aModelToWorkOn){
      // model is set HERE!
      result.model = aModelToWorkOn;
      result.render();
      if (result.view && typeof result.view.open === 'function'){
        result.view.open();
      }
    };

    result.open = open;
    result.containerElement.on('open', function(aEvent, aModelToWorkOn){
      result.open(aEvent, aModelToWorkOn);
      //TODO: aEvent.stopPropagation(); This prevents dialog from opening
      // Presumably conflict with dialog-widget's open-event
    });


    // Screen flow
    close = function(){
      if (result.view && typeof result.view.close === 'function'){
        result.view.close();
      }
      result.containerElement.trigger('close');
    };
    
    result.close = close;

    return result;
  };
 
  return create;
}());


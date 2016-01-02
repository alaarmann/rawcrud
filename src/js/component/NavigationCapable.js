/*
 * NavigationCapable 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var open;
    var close;
    var navigateByOpen;
    var that = this;

    
    // Screen flow, Navigation triggered action
    open = function(aEvent, aModelToWorkOn){
      // model is set HERE!
      that.model = aModelToWorkOn;
      that.render();
      if (that.view && typeof that.view.open === 'function'){
        that.view.open();
      }
    };

    that.open = open;
    aContainerElement.on('open', function(aEvent, aModelToWorkOn){
      that.open(aEvent, aModelToWorkOn);
      //TODO: aEvent.stopPropagation(); This prevents dialog from opening
      // Presumably conflict with dialog-widget's open-event
    });

    aContainerElement.on('show', function(aEvent, aModelToWorkOn){
      if (typeof that.show === 'function'){
        that.show(aEvent, aModelToWorkOn);
      }
      return false;
    });

    // Screen flow
    close = function(){
      if (that.view && typeof that.view.close === 'function'){
        that.view.close();
      }
      aContainerElement.trigger('close');
    };
    
    that.close = close;

    navigateByOpen = function(aTarget, aData){
      aContainerElement.trigger('open', {target : aTarget, data : aData});   
    };
    that.navigateByOpen = navigateByOpen;

    return that;
  };
 
  return create;
}());


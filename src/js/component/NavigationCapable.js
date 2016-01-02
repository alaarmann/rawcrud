/*
 * NavigationCapable 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var openScreen;
    var closeScreen;
    var openNewScreen;
    var that = this;

    
    // Screen flow, Navigation triggered action
    openScreen = function(aEvent, aModelToWorkOn){
      // model is set HERE!
      that.model = aModelToWorkOn;
      that.render();
      if (that.view && typeof that.view.open === 'function'){
        that.view.open();
      }
    };

    that.openScreen = openScreen;
    aContainerElement.on('openScreen', function(aEvent, aModelToWorkOn){
      that.openScreen(aEvent, aModelToWorkOn);
      //TODO: aEvent.stopPropagation(); This prevents dialog from opening
      // Presumably conflict with dialog-widget's open-event
    });

    aContainerElement.on('showScreen', function(aEvent, aModelToWorkOn){
      if (typeof that.showScreen === 'function'){
        that.showScreen(aEvent, aModelToWorkOn);
      }
      return false;
    });

    // Screen flow
    closeScreen = function(){
      if (that.view && typeof that.view.close === 'function'){
        that.view.close();
      }
      aContainerElement.trigger('closeScreen');
    };
    
    that.closeScreen = closeScreen;

    openNewScreen = function(aTarget, aData){
      aContainerElement.trigger('openScreen', {target : aTarget, data : aData});   
    };
    that.openNewScreen = openNewScreen;

    return that;
  };
 
  return create;
}());


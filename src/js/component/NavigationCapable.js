/*
 * NavigationCapable 
*/

/*globals module */

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var closeScreen;
    var openNewScreen;
    var that = this;

    
    aContainerElement.on('openScreen', function(aEvent, aModelToWorkOn){
      that.openScreen(aModelToWorkOn);
      //TODO: aEvent.stopPropagation(); This prevents dialog from opening
      // Presumably conflict with dialog-widget's open-event
    });

    aContainerElement.on('showScreen', function(aEvent, aModelToWorkOn){
      if (typeof that.showScreen === 'function'){
        that.showScreen(aModelToWorkOn);
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


/*
 * NavigationCapable 
*/

/*globals require, module */

var $ = require('jquery');

var navigationHistory = {};

var handleNavigationToOpenScreen = function(aFromScreen, aToScreen, aData){
  'use strict';
  navigationHistory[aToScreen] = {fromScreen : aFromScreen};
  console.log('Navigating from ' + aFromScreen + ' to open ' + aToScreen);
  $('.' + aToScreen).triggerHandler('openScreen', aData);
};

//var handleNavigationToShowScreen = function(aFromScreen, aToScreen, aData){
//  navigationHistory[aToScreen] = {fromScreen : aFromScreen};
//  console.log('Navigating from ' + aFromScreen + ' to show ' + aToScreen);
//  $('.' + aToScreen).triggerHandler('showScreen', aData);
//};

var handleNavigationOnCloseScreen = function(aFromScreen){
  'use strict';
  var toScreen;

  toScreen = navigationHistory[aFromScreen].fromScreen;
  delete navigationHistory[aFromScreen];
  console.log('Navigating from ' + aFromScreen + ' back to ' + toScreen);
  $('.' + toScreen).triggerHandler('showScreen');
};


module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var closeScreen;
    var openNewScreen;
    var that = this;

    
    aContainerElement.on('openScreen', function(aEvent, aModelToWorkOn){
      if (typeof that.openScreen === 'function'){
        that.openScreen(aModelToWorkOn);
      }
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
      var fromScreen;

      if (that.view && typeof that.view.close === 'function'){
        that.view.close();
      }
      fromScreen = aContainerElement.attr('class').split(/\s+/)[0];
      handleNavigationOnCloseScreen(fromScreen);
    };
    
    that.closeScreen = closeScreen;

    openNewScreen = function(aToScreen, aData){
      var fromScreen = aContainerElement.attr('class').split(/\s+/)[0];
      handleNavigationToOpenScreen(fromScreen, aToScreen, aData);
    };
    that.openNewScreen = openNewScreen;

    return that;
  };
 
  return create;
}());


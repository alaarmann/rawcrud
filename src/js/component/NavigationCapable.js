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

var handleNavigationOnCloseScreen = function(aFromScreen){
  'use strict';
  var toScreen;

  toScreen = navigationHistory[aFromScreen].fromScreen;
  delete navigationHistory[aFromScreen];
  console.log('Navigating from ' + aFromScreen + ' back to ' + toScreen);
  $('.' + toScreen).triggerHandler('showScreen');
};

/*
  required:
  getContainerElement()
  closeView()[optional]
*/
module.exports =  function (){
  'use strict';
  var closeScreen;
  var openNewScreen;
  var that = this;
  var containerElement = that.getContainerElement();

    
  containerElement.on('openScreen', function(aEvent, aModelToWorkOn){
    if (typeof that.openScreen === 'function'){
      that.openScreen(aModelToWorkOn);
    }
    return false;
  });

  containerElement.on('showScreen', function(aEvent, aModelToWorkOn){
    if (typeof that.showScreen === 'function'){
      that.showScreen(aModelToWorkOn);
    }
    return false;
  });

  // Screen flow
  closeScreen = function(){
    var fromScreen;
    if (typeof that.closeView === 'function'){
      that.closeView();
    }
    fromScreen = containerElement.attr('class').split(/\s+/)[0];
    handleNavigationOnCloseScreen(fromScreen);
  };
    
  that.closeScreen = closeScreen;

  openNewScreen = function(aToScreen, aData){
    var fromScreen = containerElement.attr('class').split(/\s+/)[0];
    handleNavigationToOpenScreen(fromScreen, aToScreen, aData);
  };
  that.openNewScreen = openNewScreen;

  return that;
};


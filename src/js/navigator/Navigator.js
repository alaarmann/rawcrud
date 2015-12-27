/*
 * Navigator
 * Manages transitions between screens (i.e. presenters).
*/

/*globals require, module */

var $ = require('jquery');

module.exports = (function () {
  'use strict';

  var create = function (aContainerElement){
    var result;
    var open;
    var close;
    var navigationHistory = {};

    console.log('Creating navigator on ' + aContainerElement.attr('class'));
    /*
     * on open navigate to new screen and open it
     */
    // use event delegation-syntax, otherwise eventsource is not true eventsource
    aContainerElement.on('open', 'div', function(aEvent, aEventData){
      var fromScreen = $(this).attr('class').split(/\s+/)[0];
      var toScreen =  aEventData.target;

      navigationHistory[toScreen] = {fromScreen : fromScreen};
      console.log('Navigating from ' + fromScreen + ' to ' + toScreen);
      aContainerElement.find('.' + toScreen).triggerHandler('open', aEventData.data);
    });

    /*
     * on close navigate back to previous screen and show it
     */
    aContainerElement.on('close', 'div', function(){
      var toScreen;
      var fromScreen = $(this).attr('class').split(/\s+/)[0];

      toScreen = navigationHistory[fromScreen].fromScreen;
      delete navigationHistory[fromScreen];
      console.log('Navigating from ' + fromScreen + ' to ' + toScreen);
      aContainerElement.find('.' + toScreen).triggerHandler('show');
    });

    result = {
      open : open,
      close : close
    };

    return result;
  };
 
  return create;
}());


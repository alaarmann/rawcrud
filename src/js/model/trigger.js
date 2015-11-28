/*
 * Trigger: Function publishes events that are subscribed by views 
*/

/*globals require, module */

var $ = require('jquery');

module.exports = function(aEventName, aTarget){
  'use strict';
  $('.' + aTarget).triggerHandler(aEventName);

};
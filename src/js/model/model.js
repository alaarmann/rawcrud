/*
 * Model (container) 
*/

/*globals require, module */

var createHeadItem = require('./headItem.js');
var trigger = require('./trigger.js');
var util = require('./util.js');

module.exports = (function () {
  'use strict';

  var create = function (){
    var result;
    var headItems = [];

    headItems.push(createHeadItem({owner : 'NEMO', reference : '20151119-003'}));
    headItems.push(createHeadItem({owner : 'NEMO', reference : '20151120-001'}));
    headItems.push(createHeadItem({owner : 'NEMO', reference : '20151122-005'}));

    var getHeadItems = function(){
        return headItems;
    };

    var addHeadItem = function(aHeadItem){
        headItems.push(aHeadItem);
        trigger('render', 'headItems');
        return;
    };

    var startWorkOn = function(aIndex){

        return util.clone(headItems[aIndex]);
    };

    result = {
      getHeadItems : getHeadItems,
      addHeadItem : addHeadItem,
      startWorkOn : startWorkOn,
      createHeadItem : createHeadItem
    };
    return result;
  };
 
  return create;
}());


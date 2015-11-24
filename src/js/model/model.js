/*
 * Model (container) 
*/

/*globals require, module */

var createHeadItem = require('./headItem.js');

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

    var addHeadItem = function(aHeadItemSpec){
        headItems.push(createHeadItem(aHeadItemSpec));
        return;
    };

    result = {
      getHeadItems : getHeadItems,
      addHeadItem : addHeadItem
    };
    return result;
  };
 
  return create;
}());


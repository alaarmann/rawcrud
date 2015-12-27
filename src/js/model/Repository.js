/*
 * Management Repository 
*/

/*globals require, module */


var createHeadItem = require('./headItem.js');

var idCounter = 1000000;
var createId = function (){
  'use strict';
  idCounter += 1;
  return idCounter.toString();
};

module.exports = (function () {
  'use strict';

  var create = function (){
    var result;
    var headItems = {};
    var headItemsRetrieved = {};
    var curId;

    curId = createId();
    headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151119-003'});
    curId = createId();
    headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151120-001'});
    curId = createId();
    headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151122-005'});

    var getHeadItems = function(){
      var result = [];
      var each;

      for (each in headItemsRetrieved) {
        if (!headItemsRetrieved.hasOwnProperty(each)) {
          continue;
        }
        result.push(headItemsRetrieved[each]);
      }
      return result;
    };

    var save = function(aHeadItem){
        var collection = aHeadItem.exportCollection();
        if (typeof(collection.id) === 'undefined' || !collection.id){
          collection.id = createId();
        }
        headItems[collection.id] = createHeadItem(collection);
        return;
    };

    var startWorkOn = function(aId){
        return createHeadItem(headItemsRetrieved[aId].exportCollection());
    };

    var retrieve = function(){
      var each;

      headItemsRetrieved = {};
      for (each in headItems) {
        if (!headItems.hasOwnProperty(each)) {
          continue;
        }
        headItemsRetrieved[each] = headItems[each];
      }
        
      return getHeadItems();
    };


    result = {
      save : save,
      startWorkOn : startWorkOn,
      createHeadItem : createHeadItem,
      retrieve : retrieve
    };
    return result;
  };
 
  return create;
}());


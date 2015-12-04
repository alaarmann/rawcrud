/*
 * Model (container) 
*/

/*globals require, module */


var createHeadItem = require('./headItem.js');
var trigger = require('./trigger.js');

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

      for (each in headItems) {
        if (!headItems.hasOwnProperty(each)) {
          continue;
        }
        result.push(headItems[each]);
      }
      return result;
    };

    var save = function(aHeadItem){
        var collection = aHeadItem.exportCollection();
        if (typeof(collection.id) === 'undefined' || !collection.id){
          collection.id = createId();
        }
        headItems[collection.id] = createHeadItem(collection);
        trigger('render', 'headItems');
        return;
    };

    var startWorkOn = function(aId){
        return createHeadItem(headItems[aId].exportCollection());
    };

    result = {
      getHeadItems : getHeadItems,
      save : save,
      startWorkOn : startWorkOn,
      createHeadItem : createHeadItem
    };
    return result;
  };
 
  return create;
}());


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

var headItems = {};
var headItemsRetrieved = {};

(function () {
  'use strict';

  var curId;

  curId = createId();
  headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151119-003'});
  curId = createId();
  headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151120-001'});
  curId = createId();
  headItems[curId] = createHeadItem({id : curId, owner : 'NEMO', reference : '20151122-005'});
  return;
}());

var getHeadItems = function(){
  'use strict';
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
  'use strict';
  var collection = aHeadItem.exportCollection();
  if (typeof(collection.id) === 'undefined' || !collection.id){
    collection.id = createId();
  }
  headItems[collection.id] = createHeadItem(collection);
  return;
};

var startWorkOn = function(aId){
  'use strict';
  return createHeadItem(headItemsRetrieved[aId].exportCollection());
};

var retrieve = function(aFilter){
  'use strict';
  var each;

  headItemsRetrieved = {};
  for (each in headItems) {
    if (!headItems.hasOwnProperty(each)) {
      continue;
    }
    if (((typeof aFilter.getOwner() === 'undefined' || aFilter.getOwner() === null || aFilter.getOwner().length === 0) || headItems[each].getOwner().indexOf(aFilter.getOwner()) > -1) && ((typeof aFilter.getReference() === 'undefined' || aFilter.getReference() === null || aFilter.getReference().length === 0) || headItems[each].getReference().indexOf(aFilter.getReference()) > -1)) {
      headItemsRetrieved[each] = headItems[each];
    }
  }
        
  return getHeadItems();
};

module.exports = (function () {
  'use strict';
  return {
    save : save,
    startWorkOn : startWorkOn,
    createHeadItem : createHeadItem,
    retrieve : retrieve
  };
}());



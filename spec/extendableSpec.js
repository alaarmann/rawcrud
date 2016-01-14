/*
 * Extendable Specification
*/

/*globals require, describe, it, expect, beforeEach */

var SumCapable = function(){
  'use strict';
  var that = this;
  
  that.sumAB = function(){
    return that.getA() + that.getB();
  };
  return that;
};

var PrettySumCapable = function(){
  'use strict';
  var that = this;
  
  that.sumAB = function(){
    return that.getA() +  ' + ' + that.getB() + ' = ' + (that.getA() + that.getB());
  };
  return that;
};

describe('Extendable', function() {
  'use strict';

  beforeEach(function() {
    var createExtendable = require('../src/js/trait/Extendable.js');

    this.aspirant = {};
    this.extendable = createExtendable(this.aspirant);
  });

  describe('acquire', function() {
    it('returns the Extendable', function() {
      var result = this.extendable.acquire(SumCapable);
      expect(result).toBe(result);
    });

    it('bestows capability on aspirant', function() {
      this.extendable.acquire(SumCapable);
      this.aspirant.getA = function(){return 3;};
      this.aspirant.getB = function(){return 4;};
      expect(this.aspirant.sumAB).toBeDefined();
      expect(this.aspirant.sumAB()).toEqual(7);      
    });

    it('excludes conflicting methods', function() {
      this.extendable
        .acquire(SumCapable)
        .acquire(PrettySumCapable);
      expect(this.aspirant.sumAB).not.toBeDefined();
    });
  });
});

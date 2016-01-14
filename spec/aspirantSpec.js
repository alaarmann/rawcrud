/*
 * Aspirant Specification
*/

/*globals require, describe, it, expect, beforeEach, xit */

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
    var createAspirant = require('../src/js/trait/Aspirant.js');
    this.aspirant = createAspirant();
  });

  describe('acquire', function() {
    it('returns aspirant', function() {
      var result = this.aspirant.acquire(SumCapable);
      expect(result).toBe(this.aspirant);
    });

    it('bestows capability on aspirant', function() {
      var incumbent = this.aspirant.acquire(SumCapable).start();
      incumbent.getA = function(){return 3;};
      incumbent.getB = function(){return 4;};
      expect(incumbent.sumAB).toBeDefined();
      expect(incumbent.sumAB()).toEqual(7);      
    });

    xit('excludes conflicting methods', function() {
      var incumbent = this.aspirant
        .acquire(SumCapable)
        .acquire(PrettySumCapable)
        .start();
      expect(incumbent.sumAB).not.toBeDefined();
    });
  });
});

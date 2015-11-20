/*
 * Head Item Specification
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require, describe, it, expect, jasmine */

var createHeadItem = require('../src/js/model/headItem.js');

describe("HeadItem", function() {
  'use strict';
 
  describe("create", function() {
    it("creates a HeadItem with owner and reference", function() {
      var headItem = createHeadItem({owner : 'NEMO', reference : '20151120-001'});

      expect(headItem).not.toBe(null);
      expect(headItem.getOwner()).toEqual('NEMO');
      expect(headItem.getReference()).toEqual('20151120-001');
    });
  });

  describe("getCustomer / setCustomer", function() {
    it("sets / gets customer", function() {
      var headItem = createHeadItem({owner : 'NEMO', reference : '20151120-001'});
      headItem.setCustomer('CUST');
      expect(headItem.getCustomer()).not.toBe(null);
      expect(headItem.getCustomer()).toEqual('CUST');
    });
  });
});

/*
 * Head Item Specification
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require, describe, it, expect */

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

    it("creates an empty HeadItem without specification", function() {
      var newHeadItem = createHeadItem();

      expect(newHeadItem).not.toBe(null);
      expect(newHeadItem.getOwner()).toBe(undefined);
      expect(newHeadItem.getReference()).toBe(undefined);
    });

  });

  describe("getOwner / setOwner", function() {
    it("sets / gets owner", function() {
      var headItem = createHeadItem({owner : 'NEMO', reference : '20151120-001'});
      headItem.setOwner('IDEM');
      expect(headItem.getOwner()).not.toBe(null);
      expect(headItem.getOwner()).toEqual('IDEM');
    });
  });

  describe("getReference / setReference", function() {
    it("sets / gets owner", function() {
      var headItem = createHeadItem({owner : 'NEMO', reference : '20151120-001'});
      headItem.setReference('aRef');
      expect(headItem.getReference()).not.toBe(null);
      expect(headItem.getReference()).toEqual('aRef');
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

  describe("getCustomer / setCustomer", function() {
    it("sets / gets customer", function() {
      var headItem = createHeadItem({owner : 'NEMO', reference : '20151120-001'});
      headItem.setCustomer('CUST');
      expect(headItem.getCustomer()).not.toBe(null);
      expect(headItem.getCustomer()).toEqual('CUST');
    });
  });
});

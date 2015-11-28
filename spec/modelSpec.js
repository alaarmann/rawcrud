/*
 * Model Specification
*/

/*globals require, describe, it, expect, beforeEach */

var createModel = require('../src/js/model/model.js');

describe("Model", function() {
  'use strict';
 
  beforeEach(function() {
    this.model = createModel();
    this.headItemCount = 3;
  });

  describe("create", function() {
    it("creates a Model, list of HeadItems is pre-set", function() {
      var model = this.model;

      expect(model).not.toBe(null);
      expect(model.getHeadItems()).not.toBe(null);
      expect(model.getHeadItems().length).toEqual(this.headItemCount);
    });
  });

  describe("addHeadItem", function() {
    it("adds a HeadItem to the Model", function() {
      var model = this.model;
      model.addHeadItem({owner : 'NEMO', reference : '20151124-006'});
      var headItems = model.getHeadItems();

      expect(headItems.length).toEqual(this.headItemCount + 1);
      expect(headItems[this.headItemCount].getReference()).toEqual('20151124-006');
      expect(headItems[this.headItemCount].getOwner()).toEqual('NEMO');
    });
  });
});

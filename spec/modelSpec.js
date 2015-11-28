/*
 * Model Specification
*/

/*globals require, describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, jasmine */

var mockery = require('mockery');

describe("Model", function() {
  'use strict';

  beforeAll(function() {
    mockery.registerAllowables(['../src/js/model/model.js', './headItem.js']);
  });

  afterAll(function() {
    mockery.deregisterAllowables(['../src/js/model/model.js', './headItem.js']);
  });
 
  beforeEach(function() {
    mockery.enable({ useCleanCache: true });
    this.triggerMock = jasmine.createSpy('trigger');
    mockery.registerMock('./trigger.js', this.triggerMock);
    var createModel = require('../src/js/model/model.js');

    this.model = createModel();
    this.headItemCount = 3;
  });

  afterEach(function() {
    mockery.deregisterMock('./trigger.js');
    mockery.disable();
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
      expect(this.triggerMock).toHaveBeenCalledWith('render', 'headItems');
    });
  });
});

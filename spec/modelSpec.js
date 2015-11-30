/*
 * Model Specification
*/

/*globals require, describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, jasmine */

var mockery = require('mockery');

describe("Model", function() {
  'use strict';
  var allowables = ['../src/js/model/model.js', './headItem.js', './util.js', 'jquery'];

  beforeAll(function() {
    mockery.registerAllowables(allowables);
  });

  afterAll(function() {
    mockery.deregisterAllowables(allowables);
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

  describe("createHeadItem", function() {
    it("creates a HeadItem according to given specification", function() {
      var model = this.model;
      var newHeadItem = model.createHeadItem({owner : 'NEMO', reference : '20151130-007'});

      expect(newHeadItem).not.toBe(null);
      expect(newHeadItem.getOwner()).toEqual('NEMO');
      expect(newHeadItem.getReference()).toEqual('20151130-007');
    });

    it("creates an empty HeadItem without specification", function() {
      var model = this.model;
      var newHeadItem = model.createHeadItem();

      expect(newHeadItem).not.toBe(null);
      expect(newHeadItem.getOwner()).toBe(undefined);
      expect(newHeadItem.getReference()).toBe(undefined);
    });
  });

  describe("addHeadItem", function() {
    it("adds a HeadItem to the Model", function() {
      var model = this.model;
      model.addHeadItem(model.createHeadItem({owner : 'NEMO', reference : '20151124-006'}));
      var headItems = model.getHeadItems();

      expect(headItems.length).toEqual(this.headItemCount + 1);
      expect(headItems[this.headItemCount].getReference()).toEqual('20151124-006');
      expect(headItems[this.headItemCount].getOwner()).toEqual('NEMO');
      expect(this.triggerMock).toHaveBeenCalledWith('render', 'headItems');
    });
  });

  describe("startWorkOn", function() {
    it("returns a clone of the HeadItem at given index", function() {
      var model = this.model;
      var clonedHeadItem = model.startWorkOn(1);
      var headItem = model.getHeadItems()[1];

      expect(clonedHeadItem).not.toBe(null);
      expect(clonedHeadItem).not.toBe(headItem);
      expect(clonedHeadItem).toEqual(headItem);
      expect(clonedHeadItem.getOwner()).toEqual(headItem.getOwner());
      expect(clonedHeadItem.getReference()).toEqual(headItem.getReference());
    });
  });
});

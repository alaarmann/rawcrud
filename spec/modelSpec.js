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
    it("creates a Model, list of HeadItems is empty", function() {
      var model = this.model;

      expect(model).not.toBe(null);
      expect(model.getHeadItems()).not.toBe(null);
      expect(model.getHeadItems().length).toEqual(0);
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

  describe("save", function() {
    it("saves a new item thereby creating it", function() {
      var model = this.model;
      model.save(model.createHeadItem({owner : 'NEMO', reference : '20151124-006'}));
      model.retrieve();
      var headItems = model.getHeadItems();

      expect(headItems.length).toEqual(this.headItemCount + 1);
      expect(headItems[this.headItemCount].getReference()).toEqual('20151124-006');
      expect(headItems[this.headItemCount].getOwner()).toEqual('NEMO');
    });
  });

  describe("startWorkOn", function() {
    it("returns a clone of the HeadItem at given index", function() {
      var model = this.model;
      model.retrieve();
      var anId = '1000001';
      var clonedHeadItem = model.startWorkOn(anId);
      var headItem = model.getHeadItems()[0];

      expect(clonedHeadItem).not.toBe(null);
      expect(clonedHeadItem).not.toBe(headItem);
      expect(clonedHeadItem.getOwner).not.toBe(headItem.getOwner);
      expect(clonedHeadItem.getReference).not.toBe(headItem.getReference);
      expect(clonedHeadItem.getOwner()).toEqual(headItem.getOwner());
      expect(clonedHeadItem.getReference()).toEqual(headItem.getReference());
    });
  });

  describe("retrieve", function() {
    it("retrieves item list", function() {
      var model = this.model;

      expect(model.getHeadItems().length).toEqual(0);
      model.retrieve();
      expect(model.getHeadItems().length).toEqual(this.headItemCount);
    });

    it("triggers view to render headItems", function() {
      var model = this.model;

      model.retrieve();
      expect(this.triggerMock).toHaveBeenCalledWith('render', 'headItems');
    });
  });
});

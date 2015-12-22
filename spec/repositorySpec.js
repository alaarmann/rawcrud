/*
 * Repository Specification
*/

/*globals require, describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, jasmine */

var mockery = require('mockery');

describe("Repository", function() {
  'use strict';
  var allowables = ['../src/js/model/Repository.js', './headItem.js', './util.js', 'jquery'];

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
    var createRepository = require('../src/js/model/Repository.js');

    this.repository = createRepository();
    this.headItemCount = 3;
  });

  afterEach(function() {
    mockery.deregisterMock('./trigger.js');
    mockery.disable();
  });

  describe("create", function() {
    it("creates a Repository", function() {
      var repository = this.repository;

      expect(repository).not.toBe(null);
    });
  });

  describe("createHeadItem", function() {
    it("creates a HeadItem according to given specification", function() {
      var repository = this.repository;
      var newHeadItem = repository.createHeadItem({owner : 'NEMO', reference : '20151130-007'});

      expect(newHeadItem).not.toBe(null);
      expect(newHeadItem.getOwner()).toEqual('NEMO');
      expect(newHeadItem.getReference()).toEqual('20151130-007');
    });

    it("creates an empty HeadItem without specification", function() {
      var repository = this.repository;
      var newHeadItem = repository.createHeadItem();

      expect(newHeadItem).not.toBe(null);
      expect(newHeadItem.getOwner()).toBe(undefined);
      expect(newHeadItem.getReference()).toBe(undefined);
    });
  });

  describe("save", function() {
    it("saves a new item thereby creating it", function() {
      var repository = this.repository;
      repository.save(repository.createHeadItem({owner : 'NEMO', reference : '20151124-006'}));
      var headItems = repository.retrieve();

      expect(headItems.length).toEqual(this.headItemCount + 1);
      expect(headItems[this.headItemCount].getReference()).toEqual('20151124-006');
      expect(headItems[this.headItemCount].getOwner()).toEqual('NEMO');
    });
  });

  describe("startWorkOn", function() {
    it("returns a clone of the HeadItem at given index", function() {
      var repository = this.repository;
      repository.retrieve();
      var anId = '1000001';
      var clonedHeadItem = repository.startWorkOn(anId);
      var headItem = repository.retrieve()[0];

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
      var repository = this.repository;
      var headItems = repository.retrieve();

      expect(headItems.length).toEqual(this.headItemCount);
    });

    it("does not trigger view to render headItems", function() {
      var repository = this.repository;

      repository.retrieve();
      expect(this.triggerMock).not.toHaveBeenCalledWith('render', 'headItems');
    });
  });
});

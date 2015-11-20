/*
 * Model Specification
*/

/*jshint         strict : true, browser : false,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, undef : true,
  white  : true
*/
/*globals require, describe, it, expect, jasmine */

var createModel = require('../src/js/model/model.js');

describe("Model", function() {
  'use strict';
 
  describe("create", function() {
    it("creates a Model, list of HeadItems is pre-set", function() {
      var model = createModel();

      expect(model).not.toBe(null);
      expect(model.getHeadItems()).not.toBe(null);
      expect(model.getHeadItems().length).toEqual(3);
    });
  });
});

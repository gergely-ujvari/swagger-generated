/*
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FootballApi);
  }
}(this, function(expect, FootballApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V2KnockoutGroup', function() {
      beforeEach(function() {
        instance = new FootballApi.V2KnockoutGroup();
      });

      it('should create an instance of V2KnockoutGroup', function() {
        // TODO: update the code to test V2KnockoutGroup
        expect(instance).to.be.a(FootballApi.V2KnockoutGroup);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property order (base name: "order")', function() {
        // TODO: update the code to test the property order
        expect(instance).to.have.property('order');
        // expect(instance.order).to.be(expectedValueLiteral);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

      it('should have the property matches (base name: "matches")', function() {
        // TODO: update the code to test the property matches
        expect(instance).to.have.property('matches');
        // expect(instance.matches).to.be(expectedValueLiteral);
      });

      it('should have the property childObjectId (base name: "child_object_id")', function() {
        // TODO: update the code to test the property childObjectId
        expect(instance).to.have.property('childObjectId');
        // expect(instance.childObjectId).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('PlayerEditDto', function() {
      beforeEach(function() {
        instance = new FootballApi.PlayerEditDto();
      });

      it('should create an instance of PlayerEditDto', function() {
        // TODO: update the code to test PlayerEditDto
        expect(instance).to.be.a(FootballApi.PlayerEditDto);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property countryId (base name: "country_id")', function() {
        // TODO: update the code to test the property countryId
        expect(instance).to.have.property('countryId');
        // expect(instance.countryId).to.be(expectedValueLiteral);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property birthdate (base name: "birthdate")', function() {
        // TODO: update the code to test the property birthdate
        expect(instance).to.have.property('birthdate');
        // expect(instance.birthdate).to.be(expectedValueLiteral);
      });

      it('should have the property birthCityId (base name: "birth_city_id")', function() {
        // TODO: update the code to test the property birthCityId
        expect(instance).to.have.property('birthCityId');
        // expect(instance.birthCityId).to.be(expectedValueLiteral);
      });

      it('should have the property profile (base name: "profile")', function() {
        // TODO: update the code to test the property profile
        expect(instance).to.have.property('profile');
        // expect(instance.profile).to.be(expectedValueLiteral);
      });

      it('should have the property social (base name: "social")', function() {
        // TODO: update the code to test the property social
        expect(instance).to.have.property('social');
        // expect(instance.social).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

    });
  });

}));

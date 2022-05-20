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
    describe('Tournament', function() {
      beforeEach(function() {
        instance = new FootballApi.Tournament();
      });

      it('should create an instance of Tournament', function() {
        // TODO: update the code to test Tournament
        expect(instance).to.be.a(FootballApi.Tournament);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property regionalLeague (base name: "regional_league")', function() {
        // TODO: update the code to test the property regionalLeague
        expect(instance).to.have.property('regionalLeague');
        // expect(instance.regionalLeague).to.be(expectedValueLiteral);
      });

      it('should have the property clientSortorder (base name: "client_sortorder")', function() {
        // TODO: update the code to test the property clientSortorder
        expect(instance).to.have.property('clientSortorder');
        // expect(instance.clientSortorder).to.be(expectedValueLiteral);
      });

      it('should have the property urlLogo (base name: "url_logo")', function() {
        // TODO: update the code to test the property urlLogo
        expect(instance).to.have.property('urlLogo');
        // expect(instance.urlLogo).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

    });
  });

}));

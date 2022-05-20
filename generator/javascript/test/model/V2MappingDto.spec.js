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
    describe('V2MappingDto', function() {
      beforeEach(function() {
        instance = new FootballApi.V2MappingDto();
      });

      it('should create an instance of V2MappingDto', function() {
        // TODO: update the code to test V2MappingDto
        expect(instance).to.be.a(FootballApi.V2MappingDto);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property entityType (base name: "entity_type")', function() {
        // TODO: update the code to test the property entityType
        expect(instance).to.have.property('entityType');
        // expect(instance.entityType).to.be(expectedValueLiteral);
      });

      it('should have the property domainId (base name: "domain_id")', function() {
        // TODO: update the code to test the property domainId
        expect(instance).to.have.property('domainId');
        // expect(instance.domainId).to.be(expectedValueLiteral);
      });

      it('should have the property providerId (base name: "provider_id")', function() {
        // TODO: update the code to test the property providerId
        expect(instance).to.have.property('providerId');
        // expect(instance.providerId).to.be(expectedValueLiteral);
      });

    });
  });

}));

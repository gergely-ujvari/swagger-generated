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
    describe('V2MappingRequestsDto', function() {
      beforeEach(function() {
        instance = new FootballApi.V2MappingRequestsDto();
      });

      it('should create an instance of V2MappingRequestsDto', function() {
        // TODO: update the code to test V2MappingRequestsDto
        expect(instance).to.be.a(FootballApi.V2MappingRequestsDto);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property mappingRequests (base name: "mapping_requests")', function() {
        // TODO: update the code to test the property mappingRequests
        expect(instance).to.have.property('mappingRequests');
        // expect(instance.mappingRequests).to.be(expectedValueLiteral);
      });

    });
  });

}));

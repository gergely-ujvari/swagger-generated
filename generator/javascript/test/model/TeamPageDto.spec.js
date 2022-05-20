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
    describe('TeamPageDto', function() {
      beforeEach(function() {
        instance = new FootballApi.TeamPageDto();
      });

      it('should create an instance of TeamPageDto', function() {
        // TODO: update the code to test TeamPageDto
        expect(instance).to.be.a(FootballApi.TeamPageDto);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

      it('should have the property pageMeta (base name: "page_meta")', function() {
        // TODO: update the code to test the property pageMeta
        expect(instance).to.have.property('pageMeta');
        // expect(instance.pageMeta).to.be(expectedValueLiteral);
      });

    });
  });

}));

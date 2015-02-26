'use strict';

var assert     = require('ember-cli/tests/helpers/assert');
var MockClient = require('../helpers/mock-s3-client');
var Adapter    = require('../../lib/s3-asset-adapter');

describe('s3-asset-adapter', function() {
  var mockClient;
  var adapterOptions;

  beforeEach(function() {
    mockClient = new MockClient();

    adapterOptions = {
      connection: {},
      client: mockClient
    };
  });

  describe('initialization', function() {
    it('throws and error if initiated without config', function() {
      try {
        new Adapter();
      } catch(e) {
        assert.equal(e.message, 'Adapter must define a `connection` property\n');

        return;
      }

      assert.ok(false, 'Should have thrown an exception');
    });

    it('it sets the s3 client if supplied', function() {
      var subject = new Adapter(adapterOptions);

      assert.equal(subject.client, mockClient);
    });
  });
});

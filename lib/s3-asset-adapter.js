var CoreObject  = require('core-object');
var SilentError = require('ember-cli/lib/errors/silent');

var Adapter = CoreObject.extend({
  init: function() {
    if (!this.connection) {
      throw new SilentError('Adapter must define a `connection` property\n');
    }

    this.client = this.client || this._client.apply(this);
  },

  upload: function() {
    >>>>>>>>>>>> Up to here <<<<<<<<<<<<<<
  },

  _client: function() {
    var S3 = require('aws-sdk').S3;
    return new S3({
      accessKeyId: this.connection.accessKeyId,
      secretAccessKey: this.connection.secretAccessKey,
      region: this.connection.region
    });
  }
});

Adapter.type = 'asset-adapter';

module.exports = Adapter;

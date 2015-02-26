'use strict';

var S3AssetAdapter = require('./lib/s3-asset-adapter');

function EmberCLIDeployS3AssetAdapter() {
  this.name = 'ember-cli-deploy-redis-asset-adapter';
  this.adapter = S3AssetAdapter;
}

module.exports = EmberCLIDeployS3AssetAdapter;

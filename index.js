/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-jquery-zoom',

  included: function(){

    this._super.included.apply(this, arguments);

    this.import({
      production: 'vendor/jquery-zoom/jquery.zoom.min.js',
      development: 'vendor/jquery-zoom/jquery.zoom.js'
    });

  },

  treeForVendor(vendorTree) {
    
    return new Funnel(path.join(this.project.root, 'node_modules', 'jquery-zoom'), {
        destDir: 'jquery-zoom'
      });
  },
};

module.exports = {
  name: 'ember-jquery-zoom',
  normalizeEntityName() {
  },
  afterInstall: function() {
    var that = this;

    return this.addPackageToProject('jquery-zoom');

  }
}

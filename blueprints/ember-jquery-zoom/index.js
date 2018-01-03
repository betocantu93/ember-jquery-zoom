module.exports = {
  name: 'ember-jquery-zoom',
  normalizeEntityName() {
  },
  afterInstall: function() {

    return this.addPackageToProject('jquery-zoom');

  }
}

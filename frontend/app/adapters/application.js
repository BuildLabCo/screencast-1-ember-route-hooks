import DS from 'ember-data';

DS.ActiveModelAdapter.reopen({
  coalesceFindRequests: true
});

export default DS.ActiveModelAdapter.extend({
});

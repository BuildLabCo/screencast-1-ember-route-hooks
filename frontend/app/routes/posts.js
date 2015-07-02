import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    var user = this.controllerFor("application").get("session.userId");
    console.log((user) ? "Logged In" : "Not Logged In");

    if (!user) {
      return this.transitionTo("login");
    }
    return;
  },

  model: function() {
    return this.store.find("post");
  }

});
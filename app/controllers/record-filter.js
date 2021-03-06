import Ember from "ember";
const { computed } = Ember;
export default Ember.ObjectController.extend({
  needs: ['records'],

  checked: computed('controllers.records.filterValue', function() {
    return this.get('controllers.records.filterValue') === this.get('name');
  })
});

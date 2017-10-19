import Typeahead from './Typeahead.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-bulma-typeahead', Typeahead);
  }
};

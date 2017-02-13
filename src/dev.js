import Vue from 'vue'
import vSelect from './components/Select.vue'
import countries from 'docs/data/advanced.js'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.component('v-select', vSelect)

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    placeholder: "placeholder",
    value: null,
    options: countries,
    groupOptions: [{
      group: 'First',
      label: 'a'
    }, {
      group: 'First',
      label: 'b'
    }, {
      group: 'Second',
      label: 'c'
    }, {
      group: 'Third',
      label: 'd'
    }, {
      group: 'Second',
      label: 'e'
    }, {
      group: 'Second',
      label: 'f'
    }, {
      group: 'First',
      label: 'g'
    }, {
      group: 'Third',
      label: 'h'
    }, {
      group: 'Third',
      label: 'i'
    }, {
      group: 'First',
      label: 'j'
    }],
    ajaxOptions: []
  },
  methods: {
    getOptions(search, loading) {
      loading(true)
      this.$http.get('https://api.github.com/search/repositories?q=' + search, {
      }).then(resp => {
        this.ajaxOptions = resp.data.items
        loading(false)
      })
    }
  }
})

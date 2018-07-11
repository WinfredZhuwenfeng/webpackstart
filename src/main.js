import Vue from 'vue'
import App from './App.vue'
new Vue({
  el:'#app',
  // template:'<App></App>',
  // conponents:{
  //   App
  // }
  render: function (createElement) {
    return createElement(App)
  }
})

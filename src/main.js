// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { adapt } from 'src/tool/initRem'

// 设置设计稿的尺寸为750，1rem = 100px
const designWidth = 750
const rem2px = 100
adapt(designWidth, rem2px)

import 'src/assets/style.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import examples from './components/examples.vue'
import sidebar from './components/sidebar.vue'
import hh from './components/header.vue'
import routes from './router'
import store from './store'
import '../src/index.scss'
import './index.scss'

import highlight from 'highlight.js'
import 'highlight.js/styles/kimbie.light.css'

Vue.use(VueRouter)
Vue.component('examples', examples)
Vue.directive('highlight', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        highlight.highlightBlock(el)
    }
})
const router = new VueRouter({
    routes
})

router.afterEach(route => {
    store.routerName = route.name
})

const app = new Vue({
    components: {
        sidebar,
        hh,
    },
    router
}).$mount('#app')

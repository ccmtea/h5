import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'
import sidebar from './components/sidebar.vue'
import hh from './components/header.vue'
import routes from './router'
import store from './store'
import '../src/index.scss'
import './index.scss'


Vue.use(VueRouter)

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

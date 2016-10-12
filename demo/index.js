import Vue from 'vue'
import '../src/index.scss'
import VueAnimatedList from 'vue-animated-list'
import sidebar from './components/sidebar.vue'

Vue.use(VueAnimatedList)
var app = new Vue({
    el: '#app',
    components: {
        hh: sidebar,
    },
    data: {
        message: 'Hello Vue!'
    }
})

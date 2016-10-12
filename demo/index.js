import Vue from 'vue'
import '../src/index.scss'
import index2 from './index2'
import header from './components/header.vue'

var app = new Vue({
    el: '#app',
    components: {
        hh: header,
    },
    data: {
        message: 'Hello Vue!'
    }
})

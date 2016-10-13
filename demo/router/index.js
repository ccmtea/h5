import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Btn from './ui/Btn.vue'

export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/btn', name: 'btn', component: Btn }
]

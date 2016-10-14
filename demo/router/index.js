import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Variate from './basis/variate.vue'

export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/variate', name: 'variate', component: Variate }
]

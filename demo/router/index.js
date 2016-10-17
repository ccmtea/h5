import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Variate from './basis/variate.vue'
import BorderOne from './basis/borderOne.vue'
import Arrows from './basis/arrows.vue'


export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/variate', name: 'variate', component: Variate },
    { path: '/borderOne', name: 'borderOne', component: BorderOne },
    { path: '/arrows', name: 'arrows', component: Arrows }
]

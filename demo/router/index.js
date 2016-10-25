import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Variate from './basis/variate.vue'
import BorderOne from './basis/borderOne.vue'
import Caret from './basis/caret.vue'
import Text_cut_off from './basis/text_cut_off.vue'
import Justify from './basis/justify.vue'


export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/variate', name: 'variate', component: Variate },
    { path: '/borderOne', name: 'borderOne', component: BorderOne },
    { path: '/caret', name: 'caret', component: Caret },
    { path: '/text_cut_off', name: 'text_cut_off', component: Text_cut_off },
    { path: '/justify', name: 'justify', component: Justify }
]

import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Variate from './basis/variate.vue'
import BorderOne from './basis/borderOne.vue'
import Caret from './basis/caret.vue'
import Text_overflow from './basis/text_overflow.vue'
import Justify from './basis/justify.vue'
import Img_pre_seat from './basis/img_pre_seat.vue'


export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/variate', name: 'variate', component: Variate },
    { path: '/borderOne', name: 'borderOne', component: BorderOne },
    { path: '/caret', name: 'caret', component: Caret },
    { path: '/text_overflow', name: 'text_overflow', component: Text_overflow },
    { path: '/justify', name: 'justify', component: Justify },
    { path: '/img_pre_seat', name: 'img_pre_seat', component: Img_pre_seat }
]

import Index from './Index.vue'
import Reset from './basis/reset.vue'
import Constant from './basis/constant.vue'
import Variate from './basis/variate.vue'
import Border from './basis/border.vue'
import Caret from './basis/caret.vue'
import Text_overflow from './basis/text_overflow.vue'
import Justify from './basis/justify.vue'
import Img_pre_seat from './basis/img_pre_seat.vue'
import Text from './basis/text.vue'
import Buttons from './ui_compoents/buttons.vue'
import Avatar from './ui_compoents/avatar.vue'
import Reddot from './ui_compoents/reddot.vue'
import Badge from './ui_compoents/badge.vue'
import Label from './ui_compoents/label.vue'
import Subscript from './ui_compoents/subscript.vue'
import Searchbar from './ui_compoents/searchbar.vue'
import List from './ui_compoents/list.vue'
import Form from './ui_compoents/form.vue'
import Tips from './ui_compoents/tips.vue'
import Dialog from './ui_compoents/dialog.vue'
import ActionSheet from './ui_compoents/actionSheet.vue'
import Tab from './ui_compoents/tab.vue'



export default [
    { path: '/', name: 'index', component: Index },
    { path: '/reset', name: 'reset', component: Reset },
    { path: '/constant', name: 'constant', component: Constant },
    { path: '/variate', name: 'variate', component: Variate },
    { path: '/border', name: 'border', component: Border },
    { path: '/caret', name: 'caret', component: Caret },
    { path: '/text_overflow', name: 'text_overflow', component: Text_overflow },
    { path: '/justify', name: 'justify', component: Justify },
    { path: '/img_pre_seat', name: 'img_pre_seat', component: Img_pre_seat },
    { path: '/text', name: 'text', component: Text },
    { path: '/buttons', name: 'buttons', component: Buttons },
    { path: '/avatar', name: 'avatar', component: Avatar },
    { path: '/reddot', name: 'reddot', component: Reddot },
    { path: '/badge', name: 'badge', component: Badge },
    { path: '/label', name: 'label', component: Label },
    { path: '/subscript', name: 'subscript', component: Subscript },
    { path: '/searchbar', name: 'searchbar', component: Searchbar },
    { path: '/list', name: 'list', component: List },
    { path: '/form', name: 'form', component: Form },
    { path: '/tips', name: 'tips', component: Tips },
    { path: '/dialog', name: 'dialog', component: Dialog },
    { path: '/actionSheet', name: 'actionSheet', component: ActionSheet },
    { path: '/tab', name: 'tab', component: Tab }
]

<template>
    <div class="sidebar">
        <h1>
            <router-link :to="{ name: 'index' }">JUZI-UI</router-link>
            <!--{{ store.routerName }}-->
        </h1>
        <ul>
            <li>
                <h6 @click="showTab1 = !showTab1" :class = "{arrow: showTab1}">基础组件</h6>
                <div v-if="showTab1" class="sidebar-a">
                    <router-link :class="{ cur: store.routerName === 'reset' }" :to="{ name: 'reset'}">重置</router-link>
                    <router-link :class="{ cur: store.routerName === 'constant' }" :to="{ name: 'constant'}">常量</router-link>
                    <router-link :class="{ cur: store.routerName === 'variate' }" :to="{ name: 'variate'}">变量</router-link>
                    <router-link :class="{ cur: store.routerName === 'border' }" :to="{ name: 'border'}">边框1px</router-link>
                    <router-link :class="{ cur: store.routerName === 'caret' }" :to="{ name: 'caret'}">三角符号</router-link>
                    <router-link :class="{ cur: store.routerName === 'text_overflow' }" :to="{ name: 'text_overflow'}">文字截断</router-link>
                    <router-link :class="{ cur: store.routerName === 'justify' }" :to="{ name: 'justify'}">两端对齐</router-link>
                    <router-link :class="{ cur: store.routerName === 'img_pre_seat' }" :to="{ name: 'img_pre_seat'}">预留图片位置</router-link>
                    <router-link :class="{ cur: store.routerName === 'text' }" :to="{ name: 'text'}">文本</router-link>
                    <a href="#">布局</a>
                    <a href="#">两端留白</a>
                    <!--<a href="#">毛玻璃</a>
                    <a href="#">弹层背景虚化</a>-->
                </div>
            </li>
            <li>
                <h6 @click="showTab2 = !showTab2" :class = "{arrow: showTab2}">UI组件</h6>
                <div v-if="showTab2" class="sidebar-a">
                    <router-link :class="{ cur: store.routerName === 'buttons' }" :to="{ name: 'buttons'}">按钮</router-link>
                    <router-link :class="{ cur: store.routerName === 'avatar' }" :to="{ name: 'avatar'}">头像</router-link>
                    <router-link :class="{ cur: store.routerName === 'reddot' }" :to="{ name: 'reddot'}">红点</router-link>
                    <router-link :class="{ cur: store.routerName === 'badge' }" :to="{ name: 'badge'}">徽标</router-link>
                    <router-link :class="{ cur: store.routerName === 'label' }" :to="{ name: 'label'}">标签</router-link>
                    <router-link :class="{ cur: store.routerName === 'subscript' }" :to="{ name: 'subscript'}">角标</router-link>
                    <router-link :class="{ cur: store.routerName === 'searchbar' }" :to="{ name: 'searchbar'}">搜索框</router-link>
                    <router-link :class="{ cur: store.routerName === 'list' }" :to="{ name: 'list'}">列表</router-link>
                    <router-link :class="{ cur: store.routerName === 'form' }" :to="{ name: 'form'}">表单</router-link>
                    <router-link :class="{ cur: store.routerName === 'tips' }" :to="{ name: 'tips'}">提示</router-link>
                    <router-link :class="{ cur: store.routerName === 'dialog' }" :to="{ name: 'dialog'}">对话框</router-link>
                    <a href="#">菜单</a>
                    <a href="#">选项卡</a>
                    <a href="#">页脚</a>
                    <a href="#">导航</a>
                    <a href="#">加载中</a>
                </div>
            </li>
            <li>
                <h6 @click="showTab3 = !showTab3" :class = "{arrow: showTab3}">JS插件</h6>
                <div v-if="showTab3" class="sidebar-a">
                    <a href="#">3333333</a>
                </div>
            </li>
            <li>
                <h6 @click="showTab4 = !showTab4" :class = "{arrow: showTab4}">UI图标</h6>
                <div v-if="showTab4" class="sidebar-a">
                    <a href="#">字体图标</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .sidebar {
        position: fixed;
        width: 256px;
        height: 100%;
        top: 0;
        left: 0;
        color: #666;
        z-index:2;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
        h1 {
            padding-left: 30px;
            line-height: 64px;
            color: #fff;
            font-size: 20px;
            background: #5edd9e;
            a{
                color:#fff;
            }
        }
        ul{
            height:calc(100% - 64px);
            overflow:auto;
        }
        h6,
        .sidebar-a a {
            padding-left: 30px;
            line-height: 45px;
            &.cur{
                background:#ccc;
            }
        }
        h6 {
            position: relative;
            &.arrow {
                &:after {
                    margin-top: -10px;
                    transform: rotate(135deg);
                }
            }
        }
        .sidebar-a a {
            display: block;
            padding-left: 50px;
            color: #666;
        }
        h6:after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            right: 30px;
            top: 50%;
            margin-top: -3px;
            transform: rotate(315deg);
            border-top: 1px solid #999;
            border-right: 1px solid #999;
        }
    }
</style>


<script>
    import store from '../store'
    export default{
        data(){
            return{
                store,
                showTab1: true,
                showTab2: false,
                showTab3: false,
                showTab4: false,
                msg:'',
            }
        }
    }
</script>
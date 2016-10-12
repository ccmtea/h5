<template>
    <div class="sidebar">
        <h1>JUZI-UI</h1>
        <ul>
            <li>
                <h6 class="arrow">基础组件</h6>
                <div class="sidebar-a">
                    <a href="#">重置</a>
                    <a href="#">常量</a>
                    <a href="#">变量</a>
                    <a href="#">布局</a>
                    <a href="#">1px</a>
                    <a href="#">箭头</a>
                    <a href="#">文字截断</a>
                    <a href="#">两端留白</a>
                    <a href="#">两端对齐</a>
                    <a href="#">毛玻璃</a>
                    <a href="#">弹层背景虚化</a>
                </div>
            </li>
            <li>
                <h6>UI组件</h6>
                <div class="sidebar-a">
                    <a href="#">按钮</a>
                    <a href="#">头像</a>
                    <a href="#">红点</a>
                    <a href="#">徽标</a>
                    <a href="#">标签</a>
                    <a href="#">角标</a>
                    <a href="#">搜索框</a>
                    <a href="#">列表</a>
                    <a href="#">表单</a>
                    <a href="#">提示</a>
                    <a href="#">对话框</a>
                    <a href="#">菜单</a>
                    <a href="#">选项卡</a>
                    <a href="#">页脚</a>
                    <a href="#">导航</a>
                    <a href="#">加载中</a>
                </div>
            </li>
            <li>
                <h6>JS插件</h6>
                <div class="sidebar-a">
                    <a href="#">3333333</a>
                </div>
            </li>
            <li>
                <h6>UI图标</h6>
                <div class="sidebar-a">
                    <a href="#">字体图标</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .sidebar {
        position:fixed;
        width:256px;
        height:100%;
        top:0;
        left:0;
        color:#666;
        background:#fff;
        box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
        h1{
            padding-left:30px;
            line-height:64px;
            color:#fff;
            font-size:20px;
            background: #5edd9e;
        }
        h6,.sidebar-a a{
            padding-left:30px;
            line-height:45px;
        }
        h6{
            position:relative;
            &.arrow{
                &:after{
                    margin-top:-3px;
                    transform:rotate(315deg);
                }
            }
        }
        .sidebar-a a{
            display:block;
            padding-left:50px;
            color:#666;
        }
        h6:after{
            content:"";
            position:absolute;
            width:10px;
            height:10px;
            right:30px;
            top:50%;
            margin-top:-10px;
            border-top:1px solid #999;
            border-right:1px solid #999;
            transform:rotate(135deg);
            transition:transform .6s;
        }
    }
</style>


<script>
    export default{
        data(){
            return{
                msg:'dj'
            }
        }
    }
</script>
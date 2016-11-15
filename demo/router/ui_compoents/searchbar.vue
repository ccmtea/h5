<template>
    <div class="searchbars">
        <examples name = "搜索框">
            <div class = "con">
                <div class="main">
                    <pre class="css" v-highlight>

$searchbar-wrapH:45px; //搜索框高度
$searchbar-wrap-ptb:7px;  //搜索框上下内边距
$searchbar-wrap-plr:15px;  //搜索框左右内边距
$searchbar-wrap-bg:#eee;  //搜索框背景颜色
 
$searchbar-bg:#fff;  //输入框背景颜色
$icon-search-lh:$searchbar-wrapH - ($searchbar-wrap-ptb*2);  //box-sizing:border-box  高度 = 行高 + 上下内边距

$icon-cancel-thin-w:40px;  //取消按钮宽度

.ui-searchbar-wrap{
    position: relative;
    height:$ui-searchbar-wrapH;
    padding:$searchbar-wrap-ptb $searchbar-wrap-plr;
    text-align: center;
    background: $searchbar-wrap-bg;
    .icon-cancel-thin,.ui-searchbar-cancel,.ui-searchbar-input{
        display: none;
    }
    .ui-searchbar{
        width:100%;
        height:100%;
        position: relative;
        background: $searchbar-bg;
        border-radius:$br-base;
    }
    .icon-search{
        line-height: $icon-search-lh;
    }
    .ui-searchbar-input{
        height:100%;
        padding-right:$icon-cancel-thin-w;
        border-radius: $br-base;
        background: $searchbar-bg;
        input{
            width:100%;
            padding:5px 0 5px 40px;
            border:none;
        }
    }
    &.focus{
        padding-right:0;
        text-align: left;
        .ui-searchbar-text{
            display: none;
        }
        .ui-searchbar-input,.icon-cancel-thin,.ui-searchbar-cancel{
            display: block;
        }
        .icon-search{
            position: absolute;
            left: 0;
            right: inherit;
            padding:0 0 0 15px;
        }
        .icon-cancel-thin{
            position: absolute;
            width:$icon-cancel-thin-w;
            top:0;
            right:0;
            line-height: $icon-search-lh;
        }
        .ui-searchbar-cancel{
            line-height: $icon-search-lh;
        }
    }
}
                    </pre>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="ui-searchbar-wrap jz-flex-row"&gt;
    &lt;div class="ui-searchbar jz-flex-col"&gt;
        &lt;i class = "icon-search pdl15"&gt;&lt;/i&gt;
        &lt;div class="ui-searchbar-text dib"&gt;搜索&lt;/div&gt;
        &lt;div class="ui-searchbar-input"&gt;
            &lt;input type="text" placeholder="搜索产品"&gt;
        &lt;/div&gt;
        &lt;i class="icon-cancel-thin tc"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="ui-searchbar-cancel plr15"&gt;取消&lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="ui-searchbar-wrap jz-flex-row">
                        <div class="ui-searchbar jz-flex-col">
                            <i class = "icon-search pdl15"></i>
                            <div class="ui-searchbar-text dib">搜索</div>
                            <div class="ui-searchbar-input">
                                <input type="text" placeholder="搜索产品">
                            </div>
                            <i class="icon-cancel-thin tc"></i>
                        </div>
                        <div class="ui-searchbar-cancel plr15">取消</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">

</style>
<script>
    export default{
        data(){
            return {
                addFocus:false,
                message:""
            }
        },
        methods: {
            aFocus: function(){
                this.addFocus = true;
            },
            rFocus: function(){
                this.addFocus = false; 
            },
            iNull: function(){
                this.message = "";
            }
        }
        
    }
    $(function(){
        $('.ui-searchbar').click(function(){
            $('.ui-searchbar-wrap').addClass('focus');
            $('.ui-searchbar-input input').focus();
        });
        $('.ui-searchbar-cancel').click(function(){
            $('.ui-searchbar-wrap').removeClass('focus');
        });
    })
</script>
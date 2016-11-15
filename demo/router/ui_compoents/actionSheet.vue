<template>
    <div class="actionSheets">
        <examples name="菜单">
            <div class="con">
                <div class="main">
                    <pre class="css" v-highlight>
$actionsheet-bg:#EFEFF4;   //菜单背景颜色
$actionsheet-menu-bg:#fff;  //菜单主体内容背景颜色
$actionsheet-action-bg:#fff; //底部按钮背景颜色
$actionsheet-cell-fs:16px;   //菜单字体大小

.ui-actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    backface-visibility: hidden;
    z-index: 11;
    width: 100%;
    background-color: $ui-actionsheet-bg;
    transition: transform .3s;
}
.ui-actionsheet-menu{
    background-color: $ui-actionsheet-menu-bg;
}
.ui-actionsheet-action {
    background-color: $ui-actionsheet-action-bg;
}
.ui-actionsheet-cell {
    position: relative;
    padding: 10px 0;
    font-size:$ui-actionsheet-cell-fs;
    &::before{
        border:none;
        border-bottom:1px solid #ececec;
    }
}
.ui-actionsheet-toggle{
    transform: translate(0, 0);
}
                    </pre>
                    ex:
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;div class="ui-mask"  style="display: none"&gt;&lt;/div&gt;
    &lt;div class="ui-actionsheet js-actionsheet"&gt;
        &lt;div class="ui-actionsheet-menu tc"&gt;
            &lt;div class="ui-cell border ui-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="ui-cell border ui-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="ui-cell border ui-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="ui-cell border ui-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="ui-actionsheet-action tc mt5"&gt;
            &lt;div class="ui-cell ui-actionsheet-cell js-actionsheetcancel"&gt;取消&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <button class="ui-btn ui-btn-default border js-showactionsheet">菜单</button>
                    <div>
                        <div class="ui-mask"  style="display: none"></div>
                        <div class="ui-actionsheet js-actionsheet">
                            <div class="ui-actionsheet-menu tc">
                                <div class="ui-cell border ui-actionsheet-cell">我是菜单</div>
                                <div class="ui-cell border ui-actionsheet-cell">我是菜单</div>
                                <div class="ui-cell border ui-actionsheet-cell">我是菜单</div>
                                <div class="ui-cell border ui-actionsheet-cell">我是菜单</div>
                            </div>
                            <div class="ui-actionsheet-action tc mt5">
                                <div class="ui-cell ui-actionsheet-cell js-actionsheetcancel">取消</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">


</style>
<script>
    $(function(){
        var $actionsheet = $('.js-actionsheet');
        var $mask = $('.ui-mask');
        function hideActionSheet() {
            $actionsheet.removeClass('ui-actionsheet-toggle');
            $mask.fadeOut(200);
        }
        $mask.on('click', hideActionSheet);
        $('.js-actionsheetcancel').on('click', hideActionSheet);
        $(".js-showactionsheet").on("click", function(){
            $actionsheet.addClass('ui-actionsheet-toggle');
            $mask.fadeIn(200);
        });
    });
</script>
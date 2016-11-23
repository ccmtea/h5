<template>
    <div class="actionSheets">
        <examples name="菜单">
            <div class="con">
                <div class="main">
                    css from：actionSheet.scss<br/>
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
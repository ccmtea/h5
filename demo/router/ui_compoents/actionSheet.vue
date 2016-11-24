<template>
    <div class="actionSheets">
        <examples name="菜单">
            <div class="con">
                <div class="main">
                    css from：actionSheet.scss<br/>
                    ex:
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;div class="jz-mask"  style="display: none"&gt;&lt;/div&gt;
    &lt;div class="jz-actionsheet js-actionsheet"&gt;
        &lt;div class="jz-actionsheet-menu tc"&gt;
            &lt;div class="jz-cell border jz-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="jz-cell border jz-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="jz-cell border jz-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
            &lt;div class="jz-cell border jz-actionsheet-cell"&gt;我是菜单&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="jz-actionsheet-action tc mt5"&gt;
            &lt;div class="jz-cell jz-actionsheet-cell js-actionsheetcancel"&gt;取消&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <button class="jz-btn jz-btn-default border js-showactionsheet">菜单</button>
                    <div>
                        <div class="jz-mask"  style="display: none"></div>
                        <div class="jz-actionsheet js-actionsheet">
                            <div class="jz-actionsheet-menu tc">
                                <div class="jz-cell border jz-actionsheet-cell">我是菜单</div>
                                <div class="jz-cell border jz-actionsheet-cell">我是菜单</div>
                                <div class="jz-cell border jz-actionsheet-cell">我是菜单</div>
                                <div class="jz-cell border jz-actionsheet-cell">我是菜单</div>
                            </div>
                            <div class="jz-actionsheet-action tc mt5">
                                <div class="jz-cell jz-actionsheet-cell js-actionsheetcancel">取消</div>
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
        var $mask = $('.jz-mask');
        function hideActionSheet() {
            $actionsheet.removeClass('jz-actionsheet-toggle');
            $mask.fadeOut(200);
        }
        $mask.on('click', hideActionSheet);
        $('.js-actionsheetcancel').on('click', hideActionSheet);
        $(".js-showactionsheet").on("click", function(){
            $actionsheet.addClass('jz-actionsheet-toggle');
            $mask.fadeIn(200);
        });
    });
</script>
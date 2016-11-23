<template>
    <div class="dialogs">
        <examples>
            <div class="con">
                <div class="main">
                    css from： btn.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="js-dialog" id="dialog1" style = "display:none"&gt;
    &lt;div class="ui-mask"&gt;&lt;/div&gt;
    &lt;div class="ui-dialog ui-dialog1"&gt;
        &lt;div class="ui-dialog-hd tc"&gt;&lt;span class="ui-dhd-title"&gt;我是弹窗标题&lt;/span&gt;&lt;/div&gt;
        &lt;div class="ui-dialog-bd tc pd15"&gt;我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容&lt;/div&gt;
        &lt;div class="ui-dialog-fd ui-flex-row tc mt10 border"&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist ui-flex-col"&gt;辅助操作&lt;/a&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary ui-flex-col border"&gt;主操作&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <a href="demo/dialog1.html"  target="_blank" class="ui-btn ui-btn-default border showDialog1">弹窗1</a>
                    <pre class="html" v-highlight>
&lt;div class="js-dialog" id="dialog2" style = "display:none"&gt;
    &lt;div class="ui-mask"&gt;&lt;/div&gt;
    &lt;div class="ui-dialog  ui-dialog2"&gt;
        &lt;div class="ui-dialog-hd tl plr15"&gt;&lt;span class="ui-dhd-title"&gt;我是弹窗标题&lt;/span&gt;&lt;/div&gt;
        &lt;div class="ui-dialog-bd tl pd15"&gt;我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容&lt;/div&gt;
        &lt;div class="ui-dialog-fd tr mt10 border plr15"&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist plr10 dib"&gt;辅助操作&lt;/a&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary plr10 dib"&gt;主操作&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <a href="demo/dialog2.html"  target="_blank" class="ui-btn ui-btn-default border showDialog2">弹窗2</a>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
</style>
<script>
    export default{
        data(){
            return {
            }
        },
        methods: {
        }
        
    }
    $(function(){
        var $dialog1 = $("#dialog1"),
            $dialog2 = $("#dialog2");
        $(".showDialog1").on("click",function(){
            $dialog1.fadeIn();
        });
        $(".showDialog2").on("click",function(){
            $dialog2.fadeIn();
        })

        $('.dialogs').on('click', '.ui-dialog-btn', function(){
            $(this).parents('.js-dialog').fadeOut(200);
        });
    })
</script>
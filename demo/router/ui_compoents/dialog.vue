<template>
    <div class="dialogs">
        <examples>
            <div class="con">
                <div class="main">
                    css from： btn.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="js-dialog" id="dialog1" style = "display:none"&gt;
    &lt;div class="jz-mask"&gt;&lt;/div&gt;
    &lt;div class="jz-dialog jz-dialog1"&gt;
        &lt;div class="jz-dialog-hd tc"&gt;&lt;span class="jz-dhd-title"&gt;我是弹窗标题&lt;/span&gt;&lt;/div&gt;
        &lt;div class="jz-dialog-bd tc pd15"&gt;我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容&lt;/div&gt;
        &lt;div class="jz-dialog-fd jz-flex-row tc mt10 border"&gt;
            &lt;a href="javascript:;" class="jz-dialog-btn jz-dialog-btn-assist jz-flex-col"&gt;辅助操作&lt;/a&gt;
            &lt;a href="javascript:;" class="jz-dialog-btn jz-dialog-btn-primary jz-flex-col border"&gt;主操作&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <a href="/h5/demo/dialog1.html"  target="_blank" class="jz-btn jz-btn-default border showDialog1">弹窗1</a>
                    <pre class="html" v-highlight>
&lt;div class="js-dialog" id="dialog2" style = "display:none"&gt;
    &lt;div class="jz-mask"&gt;&lt;/div&gt;
    &lt;div class="jz-dialog  jz-dialog2"&gt;
        &lt;div class="jz-dialog-hd tl plr15"&gt;&lt;span class="jz-dhd-title"&gt;我是弹窗标题&lt;/span&gt;&lt;/div&gt;
        &lt;div class="jz-dialog-bd tl pd15"&gt;我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容&lt;/div&gt;
        &lt;div class="jz-dialog-fd tr mt10 border plr15"&gt;
            &lt;a href="javascript:;" class="jz-dialog-btn jz-dialog-btn-assist plr10 dib"&gt;辅助操作&lt;/a&gt;
            &lt;a href="javascript:;" class="jz-dialog-btn jz-dialog-btn-primary plr10 dib"&gt;主操作&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <a href="/h5/demo/dialog2.html"  target="_blank" class="jz-btn jz-btn-default border showDialog2">弹窗2</a>
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

        $('.dialogs').on('click', '.jz-dialog-btn', function(){
            $(this).parents('.js-dialog').fadeOut(200);
        });
    })
</script>
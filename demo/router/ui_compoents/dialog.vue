<template>
    <div class="dialogs">
        <examples>
            <div class="con">
                <div class="main">
                    css from：mixin.scss && btn.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="js-dialog" id="dialog1" style = "display:none"&gt;
    &lt;div class="ui-mask"&gt;&lt;/div&gt;
    &lt;div class="ui-dialog ui-dialog1"&gt;
        &lt;div class="ui-dialog-hd tc"&gt;&lt;span class="ui-dhd-title"&gt;我是弹窗标题&lt;/span&gt;&lt;/div&gt;
        &lt;div class="ui-dialog-bd tc pd15"&gt;我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容&lt;/div&gt;
        &lt;div class="ui-dialog-fd jz-flex-row tc mt10 border"&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist jz-flex-col"&gt;辅助操作&lt;/a&gt;
            &lt;a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary jz-flex-col border"&gt;主操作&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <button class="ui-btn ui-btn-default border showDialog1">弹窗1</button>
                    <div class="js-dialog" id="dialog1" style = "display:none">
                        <div class="ui-mask"></div>
                        <div class="ui-dialog ui-dialog1">
                            <div class="ui-dialog-hd tc"><span class="ui-dhd-title">我是弹窗标题</span></div>
                            <div class="ui-dialog-bd tc pd15">我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容</div>
                            <div class="ui-dialog-fd jz-flex-row tc mt10 border">
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist jz-flex-col">辅助操作</a>
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary jz-flex-col border">主操作</a>
                            </div>
                        </div>
                    </div>
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
                    <button class="ui-btn ui-btn-default border showDialog2">弹窗2</button>
                    <div class="js-dialog" id="dialog2" style = "display:none">
                        <div class="ui-mask"></div>
                        <div class="ui-dialog  ui-dialog2">
                            <div class="ui-dialog-hd tl plr15"><span class="ui-dhd-title">我是弹窗标题</span></div>
                            <div class="ui-dialog-bd tl pd15">我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容</div>
                            <div class="ui-dialog-fd tr mt10 border plr15">
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist plr10 dib">辅助操作</a>
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary plr10 dib">主操作</a>
                            </div>
                        </div>
                    </div>
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
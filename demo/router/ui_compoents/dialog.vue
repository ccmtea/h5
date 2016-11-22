<template>
    <div class="dialogs">
        <examples>
            <div class="con">
                <div class="main">
                    <pre class="css" v-highlight>
$ui-dialog-w:94%; //弹窗宽度
$ui-dialog-b:4px; //弹窗圆角

$ui-dialog-hd-fs:20px;  //弹窗标题字体大小
$ui-dialog-hd-color:#313131;   //弹窗标题颜色
 
$ui-dialog-bd-fs:16px;  //弹窗主体字体大小
$ui-dialog-bd-color:#858585;   //弹窗主体字体颜色

$ui-dialog-fd-h:38px;  //弹窗底部高度

$ui-dialog-btn-fs:14px;  //弹窗底部字体大小
$ui-dialog-btna-color:#313131;   //弹窗底部辅助按钮字体颜色
$ui-dialog-btnp-color:#5edd9e;   //弹窗底部主要按钮字体颜色


.ui-mask{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 10;
    background: rgba(0,0,0,.7);
}
.ui-dialog{
    position:fixed;
    width:$ui-dialog-w;
    max-width:300px;
    top:50%;
    left:50%;
    padding:15px 0 0;
    z-index: 500;

    transform: translate(-50%, -50%);
    background:#fff;
    border-radius:$ui-dialog-b;
    .ui-dialog-hd{
        font-size:$ui-dialog-hd-fs;
        color:$ui-dialog-hd-color;
    }
    .ui-dialog-bd{
        font-size:$ui-dialog-bd-fs;
        color:$ui-dialog-bd-color;
    }
    .ui-dialog-fd{
        height:$ui-dialog-fd-h;
        line-height:$ui-dialog-fd-h;
        &::before{
            border:none;
            border-top:1px solid #ececec;
        }
    }
    .ui-dialog-btn{
        font-size:$ui-dialog-btn-fs;
    }
    .ui-dialog-btn-assist{
        color:$ui-dialog-btna-color;
    }
    .ui-dialog-btn-primary{
        color:$ui-dialog-btnp-color;
        &::before{
            border:none;
            border-left:1px solid #ececec;
        }
    }
}
                    </pre>
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
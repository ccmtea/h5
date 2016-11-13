<template>
    <div class="dialogs">
        <examples>
            <div class="con">
                <div class="main">
                    <button class="btn btn-default border showDialog1">弹窗1</button>
                    <button class="btn btn-default border showDialog2">弹窗2</button>
                    <div class="js-dialog" id="dialog1" style = "display:none">
                        <div class="ui-mask"></div>
                        <div class="ui-dialog ui-dialog1">
                            <div class="ui-dialog-hd tc"><span class=""ui-dhd-title>我是弹窗标题</span></div>
                            <div class="ui-dialog-bd tc pd15">我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容我是弹窗类容</div>
                            <div class="ui-dialog-fd jz-flex-row tc mt10 border">
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-assist jz-flex-col">辅助操作</a>
                                <a href="javascript:;" class="ui-dialog-btn ui-dialog-btn-primary jz-flex-col border">主操作</a>
                            </div>
                        </div>
                    </div>
                    <div class="js-dialog" id="dialog2" style = "display:none">
                        <div class="ui-mask"></div>
                        <div class="ui-dialog  ui-dialog2">
                            <div class="ui-dialog-hd tl plr15"><span class=""ui-dhd-title>我是弹窗标题</span></div>
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
    width:94%;
    max-width:300px;
    top:50%;
    left:50%;
    padding:15px 0 0;
    z-index: 500;

    transform: translate(-50%, -50%);
    background:#fff;
    border-radius:4px;
    .ui-dialog-hd{
        font-size:20px;
        color:#313131;
    }
    .ui-dialog-bd{
        font-size:16px;
        color:#858585;
    }
    .ui-dialog-fd{
        height:38px;
        line-height:38px;
        &::before{
            border:none;
            border-top:1px solid #ececec;
        }
    }
    .ui-dialog-btn{
        font-size:14px;
    }
    .ui-dialog-btn-assist{
        color:#313131;
    }
    .ui-dialog-btn-primary{
        &::before{
            border:none;
            border-left:1px solid #ececec;
        }
    }
}
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
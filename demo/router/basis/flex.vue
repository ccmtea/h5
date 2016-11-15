<template>
    <div class="flexs">
        <examples>
            <div class="con">
                <div class="main">
                    <div class="jz-flex-row flex">
                        <div class="jz-flex-col">hi</div>
                    </div>
                    <div class="jz-flex-row flex">
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                    </div>
                    <div class="jz-flex-row flex">
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                    </div>
                     <div class="jz-flex-row flex">
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                        <div class="jz-flex-col">hi</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
.flex{
    &>div{
        height:40px;
        margin:5px;
        line-height:40px;
        text-align:center;
        color: #cfcfcf;
        background:#ebebeb;
    }
}
</style>

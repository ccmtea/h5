<template>
    <div class="constant">
        <examples name="三角符号">
            <div class="pre">
                <pre class="css" v-highlight>
    from：constant.scss

    /*   三角符号    start*/
    .caret-solid{
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }
    .caret-solid-top{
        transform: rotate(180deg);
    }
    .caret-solid-left{
        transform: rotate(90deg);
    }
    .caret-solid-right{
        transform: rotate(-90deg);
    }
    /*   三角符号    end*/
                </pre>
            </div>
            <div class="con">
                ex：
                <div class="main">
                    下：<span class="caret-solid"></span>
                    <span class="caret-solid caret-solid-top"></span>
                    <span class="caret-solid caret-solid-right"></span>
                    <span class="caret-solid caret-solid-left"></span>
                </div>
        </examples>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {

            }
        },
    }
</script>
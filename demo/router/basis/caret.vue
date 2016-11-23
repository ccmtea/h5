<template>
    <div class="caret">
        <examples name="三角符号">
            <div class="con">
                <div class="main">
                    css from：constant.scss<br/>
                    ex：
                    <pre class="html/css" v-highlight>
&lt;span class="caret-solid"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-top"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-left"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-right"&gt;&lt;/span&gt;                      
                    </pre>
                    下：<span class="caret-solid"></span>
                    上：<span class="caret-solid caret-solid-top"></span>
                    左：<span class="caret-solid caret-solid-left"></span>
                    右：<span class="caret-solid caret-solid-right"></span>
                </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
    .caret-solid{
        margin:0 10px;
    }
</style>
<script>
    export default{
        data(){
            return {

            }
        },
    }
</script>
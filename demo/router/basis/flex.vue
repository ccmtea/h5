<template>
    <div class="flexs">
        <examples>
            <div class="con">
                <div class="main">
                    css from：mixin.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="jz-flex-row flex"&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
&lt;div class="jz-flex-row flex"&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
&lt;div class="jz-flex-row flex"&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
    &lt;div class="jz-flex-row flex"&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="jz-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
                    </pre>
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

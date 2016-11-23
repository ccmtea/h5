<template>
    <div class="flexs">
        <examples>
            <div class="con">
                <div class="main">
                    css from：constant.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="ui-flex-row flex"&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ui-flex-row flex"&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ui-flex-row flex"&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
    &lt;div class="ui-flex-row flex"&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
    &lt;div class="ui-flex-col"&gt;hi&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-flex-row flex">
                        <div class="ui-flex-col">hi</div>
                    </div>
                    <div class="ui-flex-row flex">
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
                    </div>
                    <div class="ui-flex-row flex">
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
                    </div>
                     <div class="ui-flex-row flex">
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
                        <div class="ui-flex-col">hi</div>
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

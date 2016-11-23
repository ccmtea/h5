<template>
    <div class="layouts">
        <examples name="布局">
            <div class="con">
                <div class="main">
                    <a href="/demo/layouts.html" target="_blank" class="ui-btn ui-btn-default border text-center">布局</a>
                    <pre class="html" v-highlight>
&lt;div id="ui-header"&gt;
    &lt;div class="ui-header-wrap"&gt;我是头部&lt;/div&gt;
&lt;/div&gt;
&lt;div class="ui-wrap"&gt;
    &lt;div class="ui-wrap-top"&gt;我是内容中固定&lt;/div&gt;
    &lt;div class="ui-main"&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div id="ui-footer"&gt;
    &lt;nav class="ui-footer-wrap" &gt;我是底部导航&lt;/nav&gt;
&lt;/div&gt;
                    </pre>
                </div>
            </div>
        </examples>
    </div>
</template>
<style>
    #ui-wrapper, #ui-main, body, html {
        height: 100%;
        position: relative;
    }
</style>
<template>
    <div class="layouts">
        <examples name="布局">
            <div class="con">
                <div class="main">
                    <a href="/h5/demo/layouts.html" target="_blank" class="jz-btn jz-btn-default border text-center">布局</a>
                    <pre class="html" v-highlight>
&lt;div id="jz-header"&gt;
    &lt;div class="jz-header-wrap"&gt;我是头部&lt;/div&gt;
&lt;/div&gt;
&lt;div class="jz-wrap"&gt;
    &lt;div class="jz-wrap-top"&gt;我是内容中固定&lt;/div&gt;
    &lt;div class="jz-main"&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div id="jz-footer"&gt;
    &lt;nav class="jz-footer-wrap" &gt;我是底部导航&lt;/nav&gt;
&lt;/div&gt;
                    </pre>
                </div>
            </div>
        </examples>
    </div>
</template>
<style>
    #jz-wrapper, #jz-main, body, html {
        height: 100%;
        position: relative;
    }
</style>

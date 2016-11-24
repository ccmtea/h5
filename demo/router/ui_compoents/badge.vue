<template>
    <div class="badges">
        <examples name="徽标">
            <div class="con">
                <div class="main">
                    css from：mixin.scss && btn.scss <br/>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="jz-badge tc"&gt;123&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="jz-badge tc">123</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-badge-border tc"&gt;1&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="jz-badge-border tc">1</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-badge-wrap"&gt;
    我是绝对定位(不带边框)徽标
    &lt;div class="jz-badge jz-badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-badge-wrap">
                        我是绝对定位(不带边框)徽标
                        <div class="jz-badge jz-badge-pos">99</div>
                    </div>
                    <br/>
                    <pre class="html" v-highlight>
&lt;div class="jz-badge-wrap"&gt;
    我是绝对定位(带边框)徽标
    &lt;div class="jz-badge-border jz-badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-badge-wrap">
                        我是绝对定位(带边框)徽标
                        <div class="jz-badge-border jz-badge-pos">99</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lange = "scss">

</style>
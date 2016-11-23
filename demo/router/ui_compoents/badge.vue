<template>
    <div class="badges">
        <examples name="徽标">
            <div class="con">
                <div class="main">
                    css from：mixin.scss && btn.scss <br/>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="ui-badge tc"&gt;123&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="ui-badge tc">123</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-badge-border tc"&gt;1&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="ui-badge-border tc">1</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-badge-wrap"&gt;
    我是绝对定位(不带边框)徽标
    &lt;div class="ui-badge ui-badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-badge-wrap">
                        我是绝对定位(不带边框)徽标
                        <div class="ui-badge ui-badge-pos">99</div>
                    </div>
                    <br/>
                    <pre class="html" v-highlight>
&lt;div class="ui-badge-wrap"&gt;
    我是绝对定位(带边框)徽标
    &lt;div class="ui-badge-border ui-badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-badge-wrap">
                        我是绝对定位(带边框)徽标
                        <div class="ui-badge-border ui-badge-pos">99</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lange = "scss">

</style>
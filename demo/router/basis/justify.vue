<template>
    <div class="justify">
        <examples name="两端对齐">
            <div class="con">
                <div class="main">
                css   from：constant.scss<br/>
                ex:
                <pre class="html/css" v-highlight>
&lt;ul class="ui-justify"&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
                    </pre>
                    <ul  class="ui-justify">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style  scoped lang="scss">
    ul li{
        width:50px;
        height:50px;
        background: #ccc;
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
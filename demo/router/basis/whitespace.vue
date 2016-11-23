<template>
    <div class="whitespage">
        <examples name="两端留白">
            <div class="con">
                <div class="main">
                    css from：constant.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;ul class="ui-whitespace plr15"&gt;
    &lt;li class="ui-w-col" style="background:#ccc;"&gt;&lt;/li&gt;
    &lt;li class="ui-w-col" style="background:#ccc;"&gt;&lt;/li&gt;
&lt;/ul&gt;
                    </pre>
                    <ul class="ui-whitespace plr15">
                        <li class="ui-w-col" style="background:#ccc;"></li>
                        <li class="ui-w-col" style="background:#ccc;"></li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
.ui-whitespace{
    display: block;
    overflow: hidden;
    .ui-w-col{
        float:left;
        width:50%;
        padding:5px;
    }
}
</style>
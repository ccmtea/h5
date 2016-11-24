<template>
    <div class="whitespage">
        <examples name="两端留白">
            <div class="con">
                <div class="main">
                    css from：constant.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;ul class="jz-whitespace plr15"&gt;
    &lt;li class="jz-w-col" style="background:#ccc;"&gt;&lt;/li&gt;
    &lt;li class="jz-w-col" style="background:#ccc;"&gt;&lt;/li&gt;
&lt;/ul&gt;
                    </pre>
                    <ul class="jz-whitespace plr15">
                        <li class="jz-w-col" style="background:#ccc;"></li>
                        <li class="jz-w-col" style="background:#ccc;"></li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
.jz-whitespace{
    display: block;
    overflow: hidden;
    .jz-w-col{
        float:left;
        width:50%;
        padding:5px;
    }
}
</style>
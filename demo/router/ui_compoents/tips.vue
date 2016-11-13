<template>
    <div class="tips">
        <examples name = "提示">
            <div class = "con">
                <div class = "main">
                    <pre class="css" v-highlight>
/**
**  ui-tips 普通提示
**  ui-tooltips  工具提示
**  ui-poptips   浮层提示
**/

$ui-tooltips-h:35px;
$ui-tc-right-w:40px;
$ui-tooltips-bg:#fff2ba;

$ui-poptips-h:40px;
$ui-poptips-bg: rgba(0,0,0,.6);

.ui-tooltips{
    position: relative;
    max-width:100%;
    padding:0 $ui-tc-right-w 0 15px;
    line-height: 35px;
    background: $ui-tooltips-bg;
    .ui-tc-right{
        position: absolute;
        width:$ui-tc-right-w;
        top:0;
        right:0;
        font-size:14px;
    }
}
.ui-poptips{
    line-height: $ui-poptips-h;
    color:#fff;
    background-color: $ui-poptips-bg;
}
                    </pre>
                    <pre class="html" v-highlight>
 &lt;div class="ui-tips"&gt;
    &lt;p&gt; &lt;i class="icon-tips-pro mr5"&gt;&lt;/i&gt;&lt;span&gt;我是普通提示&lt;/span>&lt;/p&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-tips">
                        <p><i class="icon-tips-pro mr5"></i><span>我是普通提示</span></p>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-tooltips text-overflow-only"&gt;
    &lt;i class="icon-tips-pro mr5"&gt;&lt;/i&gt;&lt;span class=""&gt;我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示&lt;/span&gt;&lt;i class="icon-close ui-tc-right tc"&gt;&lt;/i&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-tooltips text-overflow-only">
                        <i class="icon-tips-pro mr5"></i><span class="">我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示我是工具提示</span><i class="icon-close ui-tc-right tc"></i>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-poptips tc"&gt;
    &lt;i class="icon-tips-pro mr5"&gt;&lt;/i&gt;&lt;span&gt;我是工具提示我是工具提示&lt;/span&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-poptips tc">
                        <i class="icon-tips-pro mr5"></i><span>我是工具提示我是工具提示</span>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    
</style>
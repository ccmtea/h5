<template>
    <div class="subscripts">
        <examples name = "角标">
            <div class="con">
                <div class="main">
                    css from：subscript.scss<br/>
                    ex：由于角标用绝对定位，作业时需在相对定位元素设相对定位样式！
                    <ul>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-triangle icon-tag-triangle"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-triangle icon-tag-triangle"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-rectObl icon-tag-rectObl"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-rectObl icon-tag-rectObl"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-irregular icon-tag-irregular"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-irregular icon-tag-irregular"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-singleFillet icon-tag-singleFillet"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-singleFillet icon-tag-singleFillet"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-concave icon-tag-concave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-concave icon-tag-concave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-bulge icon-tag-bulge"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-bulge icon-tag-bulge"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-flatConcave icon-tag-flatConcave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-flatConcave icon-tag-flatConcave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-doubleRounded icon-tag-doubleRounded"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-doubleRounded icon-tag-doubleRounded"></span>
                        </li>
                        <pre class="html/css" v-highlight>
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-rect"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li class="ui-subscript ui-s-rect">
                        </li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
    ul{
        overflow: hidden;
        li{
            position:relative;
            height:100px;
            margin:10px 0 0 0;
            background:#e3e3e3;
        }
    }
</style>
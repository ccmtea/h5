<template>
    <div class="subscripts">
        <examples name = "角标">
            <div class="con">
                <div class="main">
                    from：subscript.scss
                    <pre class="css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-triangle{
    &::after{
        padding: 1px 0 0 3px;
    }
}
.ui-s-rectObl{
    &::before{

    }
    &::after{
        content:"会员";
        transform: rotate(-45deg);
        left:-1px;
        top:4px
    }
}
.ui-s-irregular{
    &::before{

    }
    &::after{
        content:"热";
        left:6px;
        top:2px;
    }
}
.ui-s-singleFillet{
    &::before{
        left:3px;
        font-size:15px;
    }
    &::after{
        content:"热";
        padding: 2px 0 0 5px;
    }
}
.ui-s-concave{
    &::before{
        left:-2px;
    }
    &::after{
        content:"首发";
        left:2px;
        top:5px;
    }
}
.ui-s-bulge{
    &::before{
        line-height: 27px;
    }
    &::after{
        content:"首发";
        left:4px;
        top:4px;
    }
}
.ui-s-flatConcave{
    &::before{

    }
    &::after{
        content:"新品";
        left:4px;
        top:1px;
    }
}
.ui-s-doubleRounded{
    &::before{
        font-size:15px;
        line-height:14px;
    }
    &::after{
        content:"新品";
        padding: 0 0 0 7px;
    }
}
.ui-s-rect{
    &::before{
        content:"免费";
        position: absolute;
        width:28px;
        height:13px;
        text-align:center;
        line-height:13px;
        font-size:12px;
        right:0;
        bottom:0;
        background-color: #666;
        color:#fff;
    }
}
                    </pre>
                    ex：由于角标用绝对定位，作业时需在相对定位元素设相对定位样式！
                    <ul>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-triangle{
    &::after{
        padding: 1px 0 0 3px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-triangle icon-tag-triangle"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-triangle icon-tag-triangle"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-rectObl{
    &::before{

    }
    &::after{
        content:"会员";
        transform: rotate(-45deg);
        left:-1px;
        top:4px
    }
}    &::after{
        padding: 1px 0 0 3px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-rectObl icon-tag-rectObl"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-rectObl icon-tag-rectObl"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-irregular{
    &::before{

    }
    &::after{
        content:"热";
        left:6px;
        top:2px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-irregular icon-tag-irregular"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-irregular icon-tag-irregular"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-singleFillet{
    &::before{
        left:3px;
        font-size:15px;
    }
    &::after{
        content:"热";
        padding: 2px 0 0 5px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-singleFillet icon-tag-singleFillet"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-singleFillet icon-tag-singleFillet"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-concave{
    &::before{
        left:-2px;
    }
    &::after{
        content:"首发";
        left:2px;
        top:5px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-concave icon-tag-concave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-concave icon-tag-concave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-bulge{
    &::before{
        line-height: 27px;
    }
    &::after{
        content:"首发";
        left:4px;
        top:4px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-bulge icon-tag-bulge"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-bulge icon-tag-bulge"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.ui-s-flatConcave{
    &::before{

    }
    &::after{
        content:"新品";
        left:4px;
        top:1px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-flatConcave icon-tag-flatConcave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-flatConcave icon-tag-flatConcave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-triangle,.ui-s-concave,.ui-s-irregular,.ui-s-rectObl,.ui-s-bulge,.ui-s-flatConcave,.ui-s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
    &::after{
        content:"新";
    }
}
.ui-s-doubleRounded{
    &::before{
        font-size:15px;
        line-height:14px;
    }
    &::after{
        content:"新品";
        padding: 0 0 0 7px;
    }
}
&lt;li&gt;
    &lt;span class="ui-subscript ui-s-doubleRounded icon-tag-doubleRounded"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="ui-subscript ui-s-doubleRounded icon-tag-doubleRounded"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.ui-subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.ui-s-rect{
    &::before{
        content:"免费";
        position: absolute;
        width:28px;
        height:13px;
        text-align:center;
        line-height:13px;
        font-size:12px;
        right:0;
        bottom:0;
        background-color: #666;
        color:#fff;
    }
}
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
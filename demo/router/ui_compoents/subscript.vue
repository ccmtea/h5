<template>
    <div class="subscripts">
        <examples name = "角标">
            <div class="con">
                <div class="main">
                    from：subscript.scss
                    <pre class="css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-triangle{
    &::after{
        padding: 1px 0 0 3px;
    }
}
.s-rectObl{
    &::before{

    }
    &::after{
        content:"会员";
        transform: rotate(-45deg);
        left:-1px;
        top:4px
    }
}
.s-irregular{
    &::before{

    }
    &::after{
        content:"热";
        left:6px;
        top:2px;
    }
}
.s-singleFillet{
    &::before{
        left:3px;
        font-size:15px;
    }
    &::after{
        content:"热";
        padding: 2px 0 0 5px;
    }
}
.s-concave{
    &::before{
        left:-2px;
    }
    &::after{
        content:"首发";
        left:2px;
        top:5px;
    }
}
.s-bulge{
    &::before{
        line-height: 27px;
    }
    &::after{
        content:"首发";
        left:4px;
        top:4px;
    }
}
.s-flatConcave{
    &::before{

    }
    &::after{
        content:"新品";
        left:4px;
        top:1px;
    }
}
.s-doubleRounded{
    &::before{
        font-size:15px;
        line-height:14px;
    }
    &::after{
        content:"新品";
        padding: 0 0 0 7px;
    }
}
.s-rect{
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
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-triangle{
    &::after{
        padding: 1px 0 0 3px;
    }
}
&lt;li&gt;
    &lt;span class="subscript s-triangle icon-tag-triangle"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-triangle icon-tag-triangle"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-rectObl{
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
    &lt;span class="subscript s-rectObl icon-tag-rectObl"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-rectObl icon-tag-rectObl"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-irregular{
    &::before{

    }
    &::after{
        content:"热";
        left:6px;
        top:2px;
    }
}
&lt;li&gt;
    &lt;span class="subscript s-irregular icon-tag-irregular"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-irregular icon-tag-irregular"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-singleFillet{
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
    &lt;span class="subscript s-singleFillet icon-tag-singleFillet"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-singleFillet icon-tag-singleFillet"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-concave{
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
    &lt;span class="subscript s-concave icon-tag-concave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-concave icon-tag-concave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-bulge{
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
    &lt;span class="subscript s-bulge icon-tag-bulge"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-bulge icon-tag-bulge"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
}
.s-flatConcave{
    &::before{

    }
    &::after{
        content:"新品";
        left:4px;
        top:1px;
    }
}
&lt;li&gt;
    &lt;span class="subscript s-flatConcave icon-tag-flatConcave"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-flatConcave icon-tag-flatConcave"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-triangle,.s-concave,.s-irregular,.s-rectObl,.s-bulge,.s-flatConcave,.s-doubleRounded{
    &:before{
        top:0;
        line-height: 29px;
        font-size:32px;
    }
    &::after{
        content:"新";
    }
}
.s-doubleRounded{
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
    &lt;span class="subscript s-doubleRounded icon-tag-doubleRounded"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li>
                            <span class="subscript s-doubleRounded icon-tag-doubleRounded"></span>
                        </li>
                        <pre class="html/css" v-highlight>
.subscript{
    &::before,&::after{
        position: absolute;
    }
    &::after{
        font-size:12px;
        color:#fff;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
}

.s-rect{
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
    &lt;span class="subscript s-rect"&gt;&lt;/span&gt;
&lt;/li&gt;
                        </pre>
                        <li class="subscript s-rect">
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
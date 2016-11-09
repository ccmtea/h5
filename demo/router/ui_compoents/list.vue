<template>
    <div class="lists">
        <examples name = "列表">
            <div class="con">
                <div class="main">
                    from：list.scss && variate.scss
                    <pre class="css" v-highlight>
$lc-plr:15px;
$lc-ptb:10px;

.list-cells{
    padding-left:$lc-plr;
    &::before{
        border-left:none;
        border-right:none;
    }
    .list-cell{
        padding-left:0;
    }
}
.list-cell{
    padding:$lc-ptb $lc-plr;
    color: inherit;
    &::before{
        border:none;
        border-bottom:1px solid $border-color;
    }
    &:first-child::before{
        border-top:1px solid $border-color;
    }
    .list-cell-hd{
        width:20px;
        height:20px;
        margin-right: 5px;
        background:#ccc;
        
    }
}
                    </pre>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="list-cells border"&gt;
    &lt;div class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="list-cells border">
                        <div class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                               <span>我是带着说明文字的列表</span>
                            </div>
                            <div class="">说明文字</div>
                        </div>
                        <div class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                                <span>我是带着说明文字的列表</span>
                            </div>
                            <div class="">说明文字</div>
                        </div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;div class="list-cell jz-flex-row border"&gt;
        &lt;div class="list-cell-hd"&gt;&lt;/div&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、图标的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="list-cell jz-flex-row border"&gt;
        &lt;div class="list-cell-hd"&gt;&lt;/div&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、图标的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <div class="list-cell jz-flex-row border">
                            <div class="list-cell-hd"></div>
                            <div class="jz-flex-col">
                                <span>我是带着说明文字、图标的列表</span>
                            </div>
                            <div class="">说明文字</div>
                        </div>
                        <div class="list-cell jz-flex-row border">
                            <div class="list-cell-hd"></div>
                            <div class="jz-flex-col">
                                <span>我是带着说明文字、图标的列表</span>
                            </div>
                            <div class="">说明文字</div>
                        </div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;a href="javascript:;"  class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span>我是带着跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <a href="javascript:;"  class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                                <span>我是带着跳转的列表</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                                <span>我是带着跳转的列表</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;a href="javascript:;" class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="list-cell jz-flex-row border"&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span>我是带着说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <a href="javascript:;" class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                                <span>我是带着说明文字、跳转的列表</span>
                            </div>
                            <div class="">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="list-cell jz-flex-row border">
                            <div class="jz-flex-col">
                                <span>我是带着说明文字、跳转的列表</span>
                            </div>
                            <div class="">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="list-cells border"&gt;
    &lt;a href="javascript:;" class="list-cell jz-flex-row border"&gt;
        &lt;div class="list-cell-hd"&gt;&lt;/div&gt;
        &lt;div class="jz-flex-col"&gt;
                &lt;span&gt;我是带着图标、说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="list-cell jz-flex-row border"&gt;
        &lt;div class="list-cell-hd"&gt;&lt;/div&gt;
        &lt;div class="jz-flex-col"&gt;
            &lt;span>我是带着图标、说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=""&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div class="list-cells border">
                        <a href="javascript:;" class="list-cell jz-flex-row border">
                            <div class="list-cell-hd"></div>
                            <div class="jz-flex-col">
                                 <span>我是带着图标、说明文字、跳转的列表</span>
                            </div>
                            <div class="">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="list-cell jz-flex-row border">
                            <div class="list-cell-hd"></div>
                            <div class="jz-flex-col">
                                <span>我是带着图标、说明文字、跳转的列表</span>
                            </div>
                            <div class="">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
.main>div{
    margin-bottom:15px;
}
</style>
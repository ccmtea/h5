<template>
    <div class="lists">
        <examples name = "列表">
            <div class="con">
                <div class="main">
                    css from：list.scss && variate.scss<br/>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="ui-cells border"&gt;
    &lt;div class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-cells border">
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                               <span>我是带着说明文字的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着说明文字的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                        </div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;div class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-hd mr5"&gt;
            &lt;span&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、图标的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-hd mr5"&gt;
            &lt;span&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、图标的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr5">
                                <span></span>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着说明文字、图标的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr5">
                                <span></span>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着说明文字、图标的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                        </div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;a href="javascript:;"  class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span>我是带着跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <a href="javascript:;"  class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着跳转的列表</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着跳转的列表</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                    </div>
                    <pre class="html" v-highlight>
&lt;div&gt;
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span&gt;我是带着说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span>我是带着说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div>
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着说明文字、跳转的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着说明文字、跳转的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-cells border"&gt;
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-hd mr5"&gt;
            &lt;span&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;span&gt;我是带着图标、说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border"&gt;
        &lt;div class="ui-cell-hd mr5"&gt;
            &lt;span&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;span>我是带着图标、说明文字、跳转的列表&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;说明文字&lt;/div&gt;
        &lt;div class="icon-chevron-thin-right"&gt;&lt;/div&gt;
    &lt;/a&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-cells border">
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr5">
                                <span></span>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <span>我是带着图标、说明文字、跳转的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr5">
                                <span></span>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                <span>我是带着图标、说明文字、跳转的列表</span>
                            </div>
                            <div class="ui-cell-fd">说明文字</div>
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
    .ui-cell-hd{
        span{
            display:block;
            width:20px;
            height:20px;
            background:#ccc;
        }
    }
}

</style>
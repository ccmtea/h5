<template>
    <div class="text">
        <examples name = "文本">
            <div class="con">
                <div class="main">
                    from:constant.vue
                    <pre class="css" v-highlight>
/**
**  不同状态文本颜色
**  ui-txt-default  主要内容色
**  ui-txt-info 次要内容色
**  ui-txt-muted 不可点击状态文本色
**  ui-txt-warning  警示
**  ui-txt-highlight  关键词颜色
**  链接文本候默认色
**/
.ui-txt-default{
	color:#3c3c3c;
}
.ui-txt-white{

}
.ui-txt-info{
	color:#a7a7a7;
}
.ui-txt-muted{
	color:#bbb;
}
.ui-txt-warning{
	color:#ff4222;
}
.ui-txt-highlight{
	color:#ff9a33;
}
                    </pre>
                    ex：
                    <pre class="html/css" v-highlight>
&lt;p class="ui-txt-default"&gt;主要内容的时候，我是这个颜色&lt;/p&gt;
.ui-txt-default{
	color:#3c3c3c;
}
                    </pre>
                    <p class="ui-txt-default">主要内容的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="ui-txt-info"&gt;辅助次要的时候，我是这个颜色&lt;/p&gt;
.ui-txt-info{
	color:#a7a7a7;
}
                    </pre>
                    <p class="ui-txt-info">辅助次要的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="ui-txt-muted"&gt;警示的时候，我是这个颜色&lt;/p&gt;
.ui-txt-muted{
	color:#bbb;
}
                    </pre>
                    <p class="ui-txt-muted">警示的时候，我是这个颜色</p>
                     <pre class="html/css" v-highlight>
&lt;p&gt;&lt;a href="#"&gt;链接的时候，我是这个颜色(默认色)&lt;/a&gt;&lt;/p&gt;
                    </pre>                   
                    <p><a href="#">链接的时候，我是这个颜色(默认色)</a></p>
                    <pre class="html/css" v-highlight>
&lt;p class="ui-txt-warning"&gt;不可点击的时候，我是这个颜色&lt;/p&gt;
.ui-txt-warning{
	color:#ff4222;
}
                    </pre>
                    <p class="ui-txt-warning">不可点击的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="ui-txt-highlight"&gt;关键词高亮的时候，我是这个颜色&lt;/p&gt;
.ui-txt-highlight{
	color:#ff9a33;
}
                    </pre>
                    <p class="ui-txt-highlight">关键词高亮的时候，我是这个颜色</p>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    
</style>
<script>
    export default{
        data(){
            return {

            }
        },
    }
</script>
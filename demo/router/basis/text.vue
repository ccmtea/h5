<template>
    <div class="text">
        <examples name = "文本">
            <div class="con">
                <div class="main">
                    css  from:constant.vue<br/>
                    ex：
                    <pre class="html/css" v-highlight>
&lt;p class="jz-txt-default"&gt;主要内容的时候，我是这个颜色&lt;/p&gt;
.jz-txt-default{
	color:#3c3c3c;
}
                    </pre>
                    <p class="jz-txt-default">主要内容的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="jz-txt-info"&gt;辅助次要的时候，我是这个颜色&lt;/p&gt;
.jz-txt-info{
	color:#a7a7a7;
}
                    </pre>
                    <p class="jz-txt-info">辅助次要的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="jz-txt-muted"&gt;不可点击的时候，我是这个颜色&lt;/p&gt;
.jz-txt-muted{
	color:#bbb;
}
                    </pre>
                    <p class="jz-txt-muted">不可点击的时候，我是这个颜色</p>
                    <pre class="html/css" v-highlight>
&lt;p class="jz-txt-warning"&gt;警示的时候，我是这个颜色&lt;/p&gt;
.jz-txt-warning{
	color:#ff4222;
}
                    </pre>
                    <p class="jz-txt-warning">警示的时候，我是这个颜色</p>
                     <pre class="html/css" v-highlight>
&lt;p&gt;&lt;a href="#"&gt;链接的时候，我是这个颜色(默认色)&lt;/a&gt;&lt;/p&gt;
                    </pre>                   
                    <p><a href="#">链接的时候，我是这个颜色(默认色)</a></p>
                    <pre class="html/css" v-highlight>
&lt;p class="jz-txt-highlight"&gt;关键词高亮的时候，我是这个颜色&lt;/p&gt;
.jz-txt-highlight{
	color:#ff9a33;
}
                    </pre>
                    <p class="jz-txt-highlight">关键词高亮的时候，我是这个颜色</p>
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
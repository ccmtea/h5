<template>
    <div class="justify">
        <examples name="两端对齐">
            <div class="con">
                <div class="main">
                    from：constant.scss
                    <pre class="css" v-highlight>
/*   两端对齐    start*/
.ui-justify{
	text-align: justify;
	font-size:0;
	&:after{
		content:"";
		display: inline-block;
		width:100%;
		height:0;
		overflow: hidden;
	}
	>*{
		display: inline-block;
	}
}
/*   两端对齐    end*/
                </pre>
                ex:
                <pre class="html/css" v-highlight>
&lt;ul class="ui-justify"&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
                    </pre>
                    <ul  class="ui-justify">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style  scoped lang="scss">
    ul li{
        width:50px;
        height:50px;
        background: #ccc;
    }
</style>
<script>
    export default{
        data(){
            return {
            }
        },
    }
</script>
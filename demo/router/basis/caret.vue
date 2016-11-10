<template>
    <div class="caret">
        <examples name="三角符号">
            <div class="con">
                <div class="main">
                    from：constant.scss
                    <pre class="html/css" v-highlight>  
 /*   三角符号    start*/
/**
**.caret-solid  默认 下
**.caret-solid-top   上
**.caret-solid-left  左
**.caret-solid-right 右
**/
.caret-solid{
    position:relative;
	&::after{
		content:"";
		position:absolute;
		width: 0;
		height: 0;
		top:50%;
		margin-top:-4px;
		right: 2px;
		vertical-align: middle;
		border-top: 6px solid;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		color:#a6a6a6;
	}
}
.caret-solid-top{
	&::after{
		transform: rotate(180deg);
	}
}
.caret-solid-left{
	&::after{
		transform: rotate(90deg);
	}
}
.caret-solid-right{
	&::after{
		transform: rotate(-90deg);
	}
}
                    </pre>
                    ex：
                    <pre class="html/css" v-highlight>
&lt;span class="caret-solid"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-top"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-left"&gt;&lt;/span&gt;
&lt;span class="caret-solid caret-solid-right"&gt;&lt;/span&gt;                      
                    </pre>
                    下：<span class="caret-solid"></span>
                    上：<span class="caret-solid caret-solid-top"></span>
                    左：<span class="caret-solid caret-solid-left"></span>
                    右：<span class="caret-solid caret-solid-right"></span>
                </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
    .caret-solid{
        margin:0 10px;
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
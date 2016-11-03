<template>
    <div class="reddots">
        <examples name="红点">
            <div class="con">
                <div class="main">
                    from：variate.scss && mixin.scss && reddot.scss
                    <pre class="css" v-highlight>
/*    红点    start*/
@mixin reddot-variant($border-color){
    position: relative;
    &::after{
        content:"";
        position: absolute;
        border:1px solid $border-color;
        border-radius: 50%;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
    }
}

@mixin reddot-size($width,$height,$top,$right){
    width:$width;
    height:$height;
    top:$top;
    right:$right;
}
/*    红点    end*/

/*    红点初始化   start     */
/**
** $reddot-lg  大红点
** $reddot-s  小红点
**/
$reddot-bc:transparent;   //带边框红点边框默认颜色
$reddot-bg:#f74c31;

$reddot-lg-width:8px;
$reddot-lg-height:8px;
$reddot-lg-top:-4px;
$reddot-lg-right:-4px;

$reddot-s-width:6px;
$reddot-s-height:6px;
$reddot-s-top:-3px;
$reddot-s-right:-3px;
/*    红点初始化   end     */

/**
**  .reddot 默认红点基本样式(边框为透明色)
**  .reddot-border  带边框红点基本样式(默认边框为白色，覆盖改变border-color颜色即可)
**  .reddot-s   小尺寸红点（6 * 6）
**  .reddot-lg  大尺寸红点（8 * 8）
**/

.reddot{
    @include reddot-variant($reddot-bc,$reddot-bg);
}

.reddot-border{
    @include reddot-variant(#fff,$reddot-bg);
}

.reddot-s{
    &::after{
        @include reddot-size($reddot-s-width,$reddot-s-height,$reddot-s-top,$reddot-s-right);
    }
}

.reddot-lg{
    &::after{
        @include reddot-size($reddot-lg-width,$reddot-lg-height,$reddot-lg-top,$reddot-lg-right);
    }
}


                    </pre>
                    ex：
                    <br/>
                    <pre class="html/css" v-highlight>
&lt;div class="reddot reddot-lg"&gt;我是大红点且不带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！&lt;/div&gt;
                    </pre>
                    <div class="reddot reddot-lg">我是大红点且不带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！</div>
                    <br/>
                    <pre class="html/css" v-highlight>
&lt;div class="reddot-border reddot-lg"&gt;我是大红点且带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！&lt;/div&gt;
                    </pre>
                    <div class="reddot-border reddot-lg">我是大红点且带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！</div>
                    <br/>
                    <pre class="html/css" v-highlight>
&lt;div class="reddot reddot-s"&gt;我是小红点且不带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！&lt;/div&gt;
                    </pre>
                    <div class="reddot reddot-s">我是小红点且不带边框。听说红点和标签最配！在有可能加红点的文本用标签包起来最好哦！</div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">

</style>
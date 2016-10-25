<template>
    <div class="img-pre-seat">
        <examples name="预留图片位置">
            <div class="con">
                <div class="main">
                    <pre class="css" v-highlight>
/*    预留图片位置    start*/
@mixin img-pre($width,$pb){
    position: relative;
    width:$width;
    height:0;
    padding-bottom:$pb;
}
/*    预留图片位置    end*/
                    </pre>
                    ex:<br>
                    注：用于网络慢，图片未能及时加载出来。起占位作用 (只适用于图片为正方形)
                    <pre>
&lt;div class="img"&gt;
    &lt;img src="/img/img1.png" alt=""&gt;
&lt;/div&gt;
                    </pre>
                    <div class="img">
                        <img src="/img/img1.png" alt="">
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style  scoped lang="scss">
    @import 'src/util/mixin.scss';
    .img{
        @include img-pre(10%,100%);
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
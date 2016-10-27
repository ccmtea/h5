<template>
    <div class="img-pre-seat">
        <examples name="预留图片位置">
            <div class="con">
                <div class="main">
                    <pre class="css" v-highlight>
/*    预留图片位置    start*/
/**
** img-square 图片为正方形
** img-rectangle 图片为长方形
**/
@mixin img-square($parentW,$childW){
    position: relative;
    width:$parentW;
    height:0;
    padding-bottom:$parentW;
    > img{
        position: absolute;
        left:0;
        width:$childW;
        height:$childW;
    }
}
@mixin img-rectangle($imgW,$imgH,$parentW,$childW){
    position: relative;
    width:percentage($parentW);
    height:0;
    padding-bottom:percentage(round($imgH / $imgW * 100) / (100 / $parentW));
    > img{
        position: absolute;
        left:0;
        width:$childW;
        height:$childW;
    }
}
/*    预留图片位置    end*/
                    </pre>
                    ex:

                    <pre>
&lt;div class="img"&gt;
    &lt;img src="/img/img1.png" alt=""&gt;
&lt;/div&gt;
.img{
    @include img-square(10%,100%);
}
                    </pre>
                    <div class="img">
                        <img src="/img/img1.png" alt="">
                    </div>
                    <p>我是正方形的图片</p>
                    <pre>
&lt;div class="img"&gt;
    &lt;img src="/img/img2.png" alt=""&gt;
&lt;/div&gt;
.img2{
    margin-top:10px;
    @include img-rectangle(750,285,0.8,100%);
}
                    </pre>
                    <div class="img2">
                        <img src="/img/img2.png" alt="">
                    </div>
                    <p>我是非正方形</p>
                </div>
            </div>
        </examples>
    </div>
</template>
<style  scoped lang="scss">
    @import 'src/util/mixin.scss';
    .img{
        @include img-square(10%,100%);
    }
    .img2{
        margin-top:10px;
        @include img-rectangle(750,285,0.8,100%);
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
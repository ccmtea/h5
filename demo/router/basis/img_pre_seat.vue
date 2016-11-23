<template>
    <div class="img-pre-seat">
        <examples name="预留图片位置">
            <div class="con">
                <div class="main">
                    css from mixin.scss<br/>
                    ex:
                    <pre class="html/css" v-highlight>
&lt;div class="img"&gt;
    &lt;img src="/img/img1.png" alt=""&gt;
&lt;/div&gt;
.img{
    @include img-square(40%,100%);
}
                    </pre>
                    <div class="img">
                        <img src="img/img1.jpg" alt="">
                    </div>
                    <p>我是正方形的图片</p>
                    <pre class="html/css" v-highlight>
&lt;div class="img"&gt;
    &lt;img src="/img/img2.png" alt=""&gt;
&lt;/div&gt;
.img2{
    margin-top:10px;
    @include img-rectangle(750,285,0.8,100%);
}
                    </pre>
                    <div class="img2">
                        <img src="img/img2.jpg" alt="">
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
        @include img-square(40%,100%);
    }
    .img2{
        margin-top:10px;
        @include img-rectangle(383,195,0.8,100%);
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
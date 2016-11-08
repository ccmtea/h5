<template>
    <div class="badges">
        <examples name="徽标">
            <div class="con">
                <div class="main">
                    from：mixin.scss && btn.scss
                    <pre class="css" v-highlight>
/*    徽标/标签    start*/
@mixin pendant($height,$min-width,$plr,$bg,$fs,$fc,$border-color,$br){
    display: inline-block;
    height:$height;
    min-width:$min-width;
    padding:0 $plr;
    line-height: $height;
    color:$fc;
    font-size:$fs;
    background: $bg;
    border:1px solid $border-color;
    border-radius: $br;
}

@mixin pendant-pos($pos,$top,$right){
    position: $pos;
    top:$top;
    right:$right;
}
/*    徽标/标签    end*/

/***************************
**
**  .badge 初始化徽标
**  .badge-border 初始化徽标(带边框)
**  .badge-wrap  脱离正常流徽标
**
***************************/

/*    徽标初始化   start     */
$badge-height:18px;
$badge-mWidth:18px;
$badge-plr:3px;
$badge-fs:12px;
$badge-fc:#fff;
$badge-bc:transparent;
$badge-bg:#f74c31;
$badge-br:10px;

$badge-pa:absolute;
$badge-top:-16px;
$badge-right:-15px;
/*    徽标初始化   end     */

.badge,.badge-border{
    @include pendant($badge-height,$badge-mWidth,$badge-plr,$badge-bg,$badge-fs,$badge-fc,$badge-bc,$badge-br);
}

.badge-border{
    border-color:#e3e3e3;
}

.badge-wrap{
    position: relative;
    display: inline-block;
    >.badge-pos{
        @include pendant-pos($badge-pa,$badge-top,$badge-right);
    }
}
                    </pre>
                    <pre class="html" v-highlight>
&lt;div class="badge tc"&gt;123&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="badge tc">123</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="badge-border tc"&gt;1&lt;/div&gt;
                    </pre>
                    <div>
                        我是徽标
                        <div class="badge-border tc">1</div>
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="badge-wrap"&gt;
    我是绝对定位(不带边框)徽标
    &lt;div class="badge badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="badge-wrap">
                        我是绝对定位(不带边框)徽标
                        <div class="badge badge-pos">99</div>
                    </div>
                    <br/>
                    <pre class="html" v-highlight>
&lt;div class="badge-wrap"&gt;
    我是绝对定位(带边框)徽标
    &lt;div class="badge-border badge-pos"&gt;99&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="badge-wrap">
                        我是绝对定位(带边框)徽标
                        <div class="badge-border badge-pos">99</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lange = "scss">

</style>
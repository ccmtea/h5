<template>
    <div class="labels">
        <examples name="标签">
            <div class="con">
                <div class="main">
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

/*******************
**
**  .ui-label  初始化标签
**  .ui-label-bg  有背景颜色的标签
**
*******************/

/*    标签初始化   start     */
$label-height:18px;
$label-mWidth:18px;
$label-plr:4px;
$label-fs:12px;
$label-fc:#969393;
$label-bc:#e3e3e3;
$label-bg:transparent;
$label-br:2px;
/*    标签初始化   end     */

.ui-label,.ui-label-bg{
    margin-left:5px;
    @include pendant($label-height,$label-mWidth,$label-plr,$label-bg,$label-fs,$label-fc,$label-bc,$label-br);
    &:first-child{
        margin-left:0;
    }
}

.ui-label-bg{
    background-color: #ccc;
}
                    </pre>
                    ex：
                    <br/>
                    <pre class="html/css" v-highlight>
&lt;div class="ui-label"&gt;恐怖&lt;/div&gt;
&lt;div class="ui-label"&gt;喜剧&lt;/div&gt;
                    </pre>
                    <div class="ui-label">恐怖</div><div class="ui-label">喜剧</div>
                    <pre class="html/css" v-highlight>
&lt;div class="ui-label-bg">生肉&lt;/div&gt;
                    </pre>
                    <div class="ui-label-bg">生肉</div>
                </div>
            </div>
        </examples>
    </div>
</template>
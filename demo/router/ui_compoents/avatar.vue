<template>
    <div class="avatars">
        <examples name="头像">
            <div class="con">
                <div class="main">
                    from：mixin.scss && avatar.scss
                    <pre class="html/css" v-highlight>
/*    头像    start*/
@mixin avatar-variant($color, $bg-color){
    position: relative;
    display: inline-flex;
    align-items: center; 
    justify-content: center;
    color: $color;
    border-radius: 50%;
    background-color: $bg-color;
}

@mixin avatar-size($width, $height){
    width:$width;
    height:$height;
}
/*    头像    end*/

/************************
**
**  avatar-default 100*100
**  avatar-s 60*60
**  avatar-lg 140*140
**
*************************/

/*    头像初始化   start     */
$avatar-color:#fff;
$avatar-bg:#bcbcbc;

$avatar-default-width:50px;
$avatar-default-height:50px;
$avatar-default-fs:24px;

$avatar-s-width:30px;
$avatar-s-height:30px;
$avatar-s-fs:18px;

$avatar-lg-width:70px;
$avatar-lg-height:70px;
$avatar-lg-fs:36px;
/*    头像初始化   end     */


.ui-avatar{
    @include avatar($avatar-color,$avatar-bg);
    >img{
        display: inline-block;
        width:100%;
        height:100%;
        border-radius: 50%;
    }
    >[class^="icon-"]{
        display: inline-block;
    }
}

.ui-avatar-default{
    @include avatar-size($avatar-default-width,$avatar-default-height);
    >[class^="icon-"]{
        font-size:$avatar-default-fs;
    }
}

.ui-avatar-s{
    @include avatar-size($avatar-s-width,$avatar-s-height);
    >[class^="icon-"]{
        font-size:$avatar-s-fs;
    }
}

.ui-avatar-lg{
    @include avatar-size($avatar-lg-width,$avatar-lg-height);
    >[class^="icon-"]{
        font-size:$avatar-lg-fs;
    }
}
                    </pre>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="ui-avatar ui-avatar-default"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="ui-avatar ui-avatar-default">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是默认(100 * 100)尺寸图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-avatar ui-avatar-default"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div&gt;                 
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="ui-avatar ui-avatar-default">
                            <span class="icon-people"></span>
                        </div>
                        我是默认(100 * 100)尺寸字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-avatar ui-avatar-s"&gt;&lt;/div&gt;                        
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="ui-avatar ui-avatar-s">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是小小的（60 * 60）的图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-avatar ui-avatar-s"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="ui-avatar ui-avatar-s">
                            <span class="icon-people"></span>
                        </div>
                        我是小小的（60 * 60）的字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="ui-avatar ui-avatar-lg"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="ui-avatar ui-avatar-lg">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是大大的（140 * 140）的图片头像哦
                    </div>
                    <pre>
&lt;div class="ui-avatar ui-avatar-lg"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div>
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="ui-avatar ui-avatar-lg">
                            <span class="icon-people"></span>
                        </div>
                        我是大大的（140 * 140）的字体图标哦
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style  scoped lang="scss">
    .avatar-size{
        padding:10px 0;
    }
    .size-default{
        padding-left:12px;
    }
    .size-s{
        padding-left:21px;
    }
</style>
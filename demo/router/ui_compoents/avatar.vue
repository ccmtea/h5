<template>
    <div class="avatars">
        <examples name="头像">
            <div class="con">
                <div class="main">
                    from：mixin.scss && variate.scss && avatar.scss
                    <pre class="html/css" v-highlight>
/*    头像初始化   start     */
/**
**  avatar-default 100*100
**  avatar-s 60*60
**  avatar-lg 140*140
**/
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
$avatar-lg-fs:32px;
/*    头像初始化   end     */

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

/**
**  avatar-default 100*100
**  avatar-s 60*60
**  avatar-lg 140*140
**/
.avatar{
    @include avatar($avatar-color,$avatar-bg);
    >img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
}

.avatar-default{
    @include avatar-size($avatar-default-width,$avatar-default-height);
    >[class^="icon-"]{
        font-size:$avatar-default-fs;
    }
}

.avatar-s{
    @include avatar-size($avatar-default-s,$avatar-default-s);
    >[class^="icon-"]{
        font-size:$avatar-s-fs;
    }
}

.avatar-lg{
    @include avatar-size($avatar-default-lg,$avatar-default-lg);
    >[class^="icon-"]{
        font-size:$avatar-lg-fs;
    }
}
                    </pre>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="avatar avatar-default"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="avatar avatar-default">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是默认(100 * 100)尺寸图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="avatar avatar-default"&gt;
    &lt;span class="icon-user-love"&gt;&lt;/span&gt;
&lt;/div&gt;                 
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="avatar avatar-default">
                            <span class="icon-user-love"></span>
                        </div>
                        我是默认(100 * 100)尺寸字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="avatar avatar-s"&gt;&lt;/div&gt;                        
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="avatar avatar-s">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是小小的（60 * 60）的图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="avatar avatar-s"&gt;
    &lt;span class="icon-user-love"&gt;&lt;/span&gt;
&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="avatar avatar-s">
                            <span class="icon-user-love"></span>
                        </div>
                        我是小小的（60 * 60）的字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="avatar avatar-lg"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="avatar avatar-lg">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是大大的（140 * 140）的图片头像哦
                    </div>
                    <pre>
&lt;div class="avatar avatar-lg"&gt;
    &lt;span class="icon-user-love"&gt;&lt;/span&gt;
&lt;/div>
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="avatar avatar-lg">
                            <span class="icon-user-love"></span>
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
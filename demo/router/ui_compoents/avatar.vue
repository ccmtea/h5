<template>
    <div class="avatar">
        <examples name="头像">
            <div class="con">
                <div class="main">
                    from：mixin.scss && variate.scss && avatar.scss
                    <pre class="css" v-highlight>
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
                    <div class="avatar avatar-default">

                    </div>
                    <div class="avatar avatar-default">
                        <span class="icon-newspaper"></span>
                    </div>
                    <div class="avatar avatar-s">
                        
                    </div>
                    <div class="avatar avatar-s">
                        <span class="icon-newspaper"></span>
                    </div>
                    <div class="avatar avatar-lg">
                        
                    </div>
                    <div class="avatar avatar-lg">
                        <span class="icon-newspaper"></span>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
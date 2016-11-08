<template>
    <div class="buttons">
        <examples name ="按钮">
            <div class="con">
                <div class="main">
                    from：mixin.scss && btn.scss
                    <pre class="css" v-highlight>
$fs-base:1em;
$br-base:4px;

/*    按钮    start*/
@mixin btn-variant($color,$background){
    $active-bg:darken($background,10%);
    $disabled-bg:lighten($background,10%);
    
    color:$color;
    background-color:$background;
    &:active{
        background: $active-bg;
    }
    &:disabled{
        background: $disabled-bg;
    }
}

@mixin btn-size($width,$height,$fs,$br){
    width:$width;
    height:$height;
    font-size:$fs;
    border-radius: $br;
}
/*    按钮    end*/

/************************
**
**  btn-default 默认按钮
**  btn-primary 主要按钮
**  btn-secondary 次要按钮
**  btn-warning 警示按钮
**
************************/

/*    按钮初始化   start     */
$btn-width:88px;
$btn-height:36px;

$btn-default-color:#333;
$btn-default-bg:#fff;

$btn-primary-color:#fff;
$btn-primary-bg:#5edd9e;

$btn-secondary-color:#fff;
$btn-secondary-bg:#fc0;

$btn-warning-color:#fff;
$btn-warning-bg:#d9534f;
/*    按钮初始化   end     */


.btn{
    display: inline-block;
    cursor: pointer;
    @include btn-size($btn-width,$btn-height,$fs-base,$br-base);
}

.btn-default{
    @include btn-variant($btn-default-color,$btn-default-bg);
    &:active{
        background: #e6e6e6;
        border-color:#adadad;
    }
    &::before{
        border-radius: $br-base;
    }
}
.btn-primary{
    @include btn-variant($btn-primary-color,$btn-primary-bg);
}
.btn-secondary{
    @include btn-variant($btn-secondary-color,$btn-secondary-bg);
}
.btn-warning{
    @include btn-variant($btn-warning-color,$btn-warning-bg);
}

.btn-block {
  display: block;
  width: 100%;
}
                    </pre>
                    ex：
                    <pre class="html" v-highlight>
&lt;button class="btn btn-default border"&gt;default&lt;/button&gt;
                    </pre>
                    <button class="btn btn-default border">default</button>
                    <pre class="html" v-highlight>
&lt;button class="btn btn-primary"&gt;primary&lt;/button&gt;
                    </pre>
                    <button class="btn btn-primary">primary</button>
                    <pre class="html" v-highlight>
&lt;button class="btn btn-secondary"&gt;secondary&lt;/button&gt;
                    </pre>
                    <button class="btn btn-secondary">secondary</button>
                    <pre class="html" v-highlight>
&lt;button class="btn btn-warning"&gt;warning&lt;/button&gt;
                    </pre>
                    <button class="btn btn-warning">warning</button>
                    <pre class="html" v-highlight>
&lt;button class="btn btn-primary btn-block" disabled &gt;disabled(我是禁用状态，标签在中添加“disabled”)&lt;/button&gt;
                    </pre>                   
                    <button class="btn btn-primary btn-block" disabled>disabled(我是禁用状态，标签在中添加“disabled”)</button>
                    <pre class="html" v-highlight>
&lt;button class="btn btn-primary btn-block"&gt;primary(我是块级按钮，只需添加“btn-block”)&lt;/button&gt;
                    </pre>
                    <button class="btn btn-primary btn-block">primary(我是块级按钮，只需添加“btn-block”)</button>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    
</style>
<script>
    export default{
        data(){
            return {

            }
        },
    }
</script>
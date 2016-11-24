<template>
    <div class="avatars">
        <examples name="头像">
            <div class="con">
                <div class="main">
                    css from：mixin.scss && avatar.scss<br/>
                    ex:
                    <pre class="html" v-highlight>
&lt;div class="jz-avatar jz-avatar-default"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="jz-avatar jz-avatar-default">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是默认(100 * 100)尺寸图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-avatar jz-avatar-default"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div&gt;                 
                    </pre>
                    <div class="avatar-size size-default">
                        <div class="jz-avatar jz-avatar-default">
                            <span class="icon-people"></span>
                        </div>
                        我是默认(100 * 100)尺寸字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-avatar jz-avatar-s"&gt;&lt;/div&gt;                        
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="jz-avatar jz-avatar-s">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是小小的（60 * 60）的图片头像哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-avatar jz-avatar-s"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-s">
                        <div class="jz-avatar jz-avatar-s">
                            <span class="icon-people"></span>
                        </div>
                        我是小小的（60 * 60）的字体图标哦
                    </div>
                    <pre class="html" v-highlight>
&lt;div class="jz-avatar jz-avatar-lg"&gt;&lt;/div&gt;
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="jz-avatar jz-avatar-lg">
                            <img src="img/avatar.jpg" alt="">
                        </div>
                        我是大大的（140 * 140）的图片头像哦
                    </div>
                    <pre>
&lt;div class="jz-avatar jz-avatar-lg"&gt;
    &lt;span class="icon-people"&gt;&lt;/span&gt;
&lt;/div>
                    </pre>
                    <div class="avatar-size size-lg">
                        <div class="jz-avatar jz-avatar-lg">
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
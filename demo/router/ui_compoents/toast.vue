<template>
    <div class="toasts">
        <examples name="弹出式提示">
            <div class="con">
                <div class="main">
                    <pre class="html" v-highlight>
&lt;div class="jz-msg-mode" style="display: none;"&gt;
    &lt;div class="jz-msg-text tc"&gt;我是提示&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <button href="#" class="jz-btn jz-btn-default border jz-btn-block toast-btn1">提示</button>
                    <pre class="html" v-highlight>
&lt;div class="jz-loading-mode" style="display: none;"&gt;
    &lt;div class="jz-spinner"&gt;
        &lt;div class="jz-spinner-container jz-spinner-container1"&gt;
            &lt;div class="jz-circle1"&gt;&lt;/div&gt;
            &lt;div class="jz-circle2"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle3"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle4"&gt;&lt;/div&gt; 
        &lt;/div&gt; 
        &lt;div class="jz-spinner-container jz-spinner-container2"&gt; 
            &lt;div class="jz-circle1"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle2"&gt;&lt;/div&gt;
            &lt;div class="jz-circle3"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle4"&gt;&lt;/div&gt;
        &lt;/div&gt; 
        &lt;div class="jz-spinner-container jz-spinner-container3"&gt; 
            &lt;div class="jz-circle1"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle2"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle3"&gt;&lt;/div&gt; 
            &lt;div class="jz-circle4"&gt;&lt;/div&gt; 
        &lt;/div&gt; 
    &lt;/div&gt;
&lt;/div&gt;                      
                    </pre>
                    <button href="#" class="jz-btn jz-btn-default border jz-btn-block mt15 toast-btn2">加载中提示</button>
                    <div class="jz-msg-mode" style="display: none;">
                        <div class="jz-msg-text tc">我是提示</div>
                    </div>
                    <div class="jz-loading-mode" style="display: none;"> 
                        <div class="jz-spinner"> 
                            <div class="jz-spinner-container jz-spinner-container1"> 
                                <div class="jz-circle1"></div> 
                                <div class="jz-circle2"></div> 
                                <div class="jz-circle3"></div> 
                                <div class="jz-circle4"></div> 
                            </div> 
                            <div class="jz-spinner-container jz-spinner-container2" > 
                                <div class="jz-circle1"></div> 
                                <div class="jz-circle2"></div> 
                                <div class="jz-circle3"></div> 
                                <div class="jz-circle4"></div> 
                            </div> 
                            <div class="jz-spinner-container jz-spinner-container3"> 
                                <div class="jz-circle1"></div> 
                                <div class="jz-circle2"></div> 
                                <div class="jz-circle3"></div> 
                                <div class="jz-circle4"></div> 
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
</style>
<script>
    $(function(){
        var msgToast = $('.jz-msg-mode');
        $('.toast-btn1').on('click', function(){
            if (msgToast.css('display') != 'none') return;
            msgToast.fadeIn(100);
            setTimeout(function () {
                msgToast.fadeOut(100);
            }, 2000);
        });
    });
    $(function(){
        var loadingToast = $('.jz-loading-mode');
        $('.toast-btn2').on('click', function(){
            if (loadingToast.css('display') != 'none') return;
            loadingToast.fadeIn(100);
            setTimeout(function () {
                loadingToast.fadeOut(100);
            }, 2000);
        });
    })
</script>
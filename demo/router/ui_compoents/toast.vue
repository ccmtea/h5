<template>
    <div class="toasts">
        <examples name="弹出式提示">
            <div class="con">
                <div class="main">
                    <pre class="html" v-highlight>
&lt;div class="ui-msg-mode" style="display: none;"&gt;
    &lt;div class="ui-msg-text tc"&gt;我是提示&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <button href="#" class="ui-btn ui-btn-default border ui-btn-block toast-btn1">提示</button>
                    <pre class="html" v-highlight>
&lt;div class="ui-loading-mode" style="display: none;"&gt;
    &lt;div class="ui-spinner"&gt;
        &lt;div class="ui-spinner-container ui-spinner-container1"&gt;
            &lt;div class="ui-circle1"&gt;&lt;/div&gt;
            &lt;div class="ui-circle2"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle3"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle4"&gt;&lt;/div&gt; 
        &lt;/div&gt; 
        &lt;div class="ui-spinner-container ui-spinner-container2"&gt; 
            &lt;div class="ui-circle1"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle2"&gt;&lt;/div&gt;
            &lt;div class="ui-circle3"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle4"&gt;&lt;/div&gt;
        &lt;/div&gt; 
        &lt;div class="ui-spinner-container ui-spinner-container3"&gt; 
            &lt;div class="ui-circle1"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle2"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle3"&gt;&lt;/div&gt; 
            &lt;div class="ui-circle4"&gt;&lt;/div&gt; 
        &lt;/div&gt; 
    &lt;/div&gt;
&lt;/div&gt;                      
                    </pre>
                    <button href="#" class="ui-btn ui-btn-default border ui-btn-block mt15 toast-btn2">加载中提示</button>
                    <div class="ui-msg-mode" style="display: none;">
                        <div class="ui-msg-text tc">我是提示</div>
                    </div>
                    <div class="ui-loading-mode" style="display: none;"> 
                        <div class="ui-spinner"> 
                            <div class="ui-spinner-container ui-spinner-container1"> 
                                <div class="ui-circle1"></div> 
                                <div class="ui-circle2"></div> 
                                <div class="ui-circle3"></div> 
                                <div class="ui-circle4"></div> 
                            </div> 
                            <div class="ui-spinner-container ui-spinner-container2" > 
                                <div class="ui-circle1"></div> 
                                <div class="ui-circle2"></div> 
                                <div class="ui-circle3"></div> 
                                <div class="ui-circle4"></div> 
                            </div> 
                            <div class="ui-spinner-container ui-spinner-container3"> 
                                <div class="ui-circle1"></div> 
                                <div class="ui-circle2"></div> 
                                <div class="ui-circle3"></div> 
                                <div class="ui-circle4"></div> 
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
        var msgToast = $('.ui-msg-mode');
        $('.toast-btn1').on('click', function(){
            if (msgToast.css('display') != 'none') return;
            msgToast.fadeIn(100);
            setTimeout(function () {
                msgToast.fadeOut(100);
            }, 2000);
        });
    });
    $(function(){
        var loadingToast = $('.ui-loading-mode');
        $('.toast-btn2').on('click', function(){
            if (loadingToast.css('display') != 'none') return;
            loadingToast.fadeIn(100);
            setTimeout(function () {
                loadingToast.fadeOut(100);
            }, 2000);
        });
    })
</script>
<template>
    <div class="constant">
        <examples>
             <h4>1px</h4>
            <div class="con">
                ex：
                <div class="main">
<pre><code>     <span style="color:red">from：constant.scss</span>

    .border{
        position: relative;}
    .border a{
        position: relative;}
    .border:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;}
    
</pre>
<pre>   .b-around:before{
        border:1px solid #000;}
    &lt;p class="border  b-around"&gt;四周边框&lt;/p&gt;
</pre>
                <p class="border b-around">四周边框</p> 
<pre>   .b-left:before{
        border-left:1px solid #000;}
    &lt;p class="border  b-left"&gt;左侧边框&lt;/p&gt;
</pre>
                <p class="border b-left">左侧边框</p> 
<pre>   .b-right:before{
        border-right:1px solid #000;}
    &lt;p class="border"&gt;右侧边框&lt;/p&gt;
</pre>
                <p class="border b-right">右侧边框</p> 
<pre>   .b-top:before{
        border-top:1px solid #000;}
    &lt;p class="border  b-top"&gt;上边框&lt;/p&gt;
</pre>
                <p class="border b-top">上边框</p>   
<pre>   .b-bottom:before{
        border-bottom:1px solid #000;}
    &lt;p class="border  b-bottom"&gt;下边框&lt;/p&gt;
    </code>
</pre>
                <p class="border b-bottom">下边框</p>                     
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    .border{
        padding:10px 0 10px 10px;
    }
    .b-around:before{
        border:1px solid #000;
    }
    .b-left:before{
        border-left:1px solid #000;
    }
    .b-right:before{
        border-right:1px solid #000;
    }
    .b-top:before{
        border-top:1px solid #000;
    }
    .b-bottom:before{
        border-bottom:1px solid #000;
    }
</style>
<script>
    import examples from '../../components/examples.vue'
    export default{
        data(){
            return {

            }
        },
        components:{
            examples,
        },
    }
</script>
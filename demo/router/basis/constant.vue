<template>
    <div class="constant">
        <examples>
             <h4>constant</h4>
             <div class="pre">
<pre>
    <code>
    /*   文字定位    start*/
    .tl{
        text-align: left;
    }
    .tc{
        text-align: center;
    }
    .tr{
        text-align: right;
    }
    .dl{
        direction:ltr;    //光标文字靠左
    }
    .dr{
        direction:rtl;    //光标文字靠右 
    } 
    /*   文字定位    end*/
    /*   浮动定位    start*/
    .fl{
        float:left;
    }
    .fr{
        float:right;
    }
    /*   浮动定位    end*/
    /*   文字颜色    start*/
    .c-6{
        color:#666;
    }
    .c-orange {
        color: #ffa74d;
    }
    .c-29 {
        color: #292929;
    }
    .c-666 {
        color: #666;
    }
    .c-da {
        color: #dadada
    }
    .c-92 {
        color: #929292;
    }
    .c-f1 {
        color: #F1F1F1;
    }
    .c-f2 {
        color: #F2F2F2;
    }
    .c-f3 {
        color: #F3F3F3;
    }
    .c-f60 {
        color: #ff6600;
    }
    .c-58bf8b {
        color: #58bf8b;
    }
    .c-green {
        color: #5edd9e;
    }
    .c-white {
        color: #fff;
    }
    .c-black {
        color: #000;
    }
    .c-19 {
        color: #191919;
    }
    .c-e3 {
        color: #e3e3e3;
    }
    /*   文字颜色    end*/
    /*   背景颜色    start*/
    .bg-orange {
        background-color: #ffa74d;
    }
    .bg-f60 {
        background: #ff6600;
    }
    .bg-58bf8b {
        background-color: #58bf8b;
    }
    .bg-green {
        background-color: #5edd9e;
    }
    .bg-white {
        background-color: #fff;
    }
    .bg-black {
        background-color: #000;
    }
    .bg-e3 {
        background-color: #e3e3e3;
    }
    .bg-f3 {
        background: #f3f3f3;
    }
    .bg-f2 {
        background: #f2f2f2;
    }
    .bg-f1 {
        background: #f1f1f1;
    }
    .bg-92 {
        background: #929292;
    }
    .bg-29 {
        background: #292929;
    }
    /*   背景颜色    end*/

    /*   边框1px    start*/
    .border{
        position: relative;
    }
    .border a{
        position: relative;
    }
    .border:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }
    /*   边框1px    end*/

    /*   清除浮动    start*/
    .clear:after{
        content:"";
        display: block;
        clear:both;
        visibility: hidden;
    }
    /*   清除浮动    end*/

    /*   列表点击背景    start*/
    .act-list>li:active{
        background-color: rgba(0, 0, 0, 0.1);
    }
    /*   列表点击背景    end*/
    </code>
</pre>
            </div>
            <div class="con">
                <h6>文字定位</h6>
                ex：
                <div class="main">
<pre>   .tr{
        text-align:right;}
    &lt;p class="tr"&gt;文字向右&lt;/p&gt;
</pre>
                    <p class="tr">
                        文字向右
                    </p>
                </div>
                <h6>1像素边框</h6>
                ex：
                <div class="main">
<pre>   .border{
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
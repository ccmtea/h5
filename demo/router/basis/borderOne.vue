<template>
    <div class="borderOne">
        <examples name="1px">
            <div class="con">
                <div class="main">
                    from：constant.scss
<pre class="css" v-highlight>   .border{
        position: relative;
    }
    .border > a,a.border{
        position: relative;
    }
    .border::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(1);
        transform-origin: left top;
        pointer-events: none;}
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5){
        .border::before{
            width: 200%;
            height: 200%;
            transform: scale(0.5);
        }
    }
    @media only screen and (-webkit-min-device-pixel-ratio:3){
        .border::before{
            width: 300%;
            height: 300%;
            transform: scale(0.333333);
        }
    }  
</pre>
                ex：
<pre>   .b-around::before{
        border:1px solid #333;}
    &lt;p class="border  b-around"&gt;四周边框&lt;/p&gt;
</pre>
                    <p class="border b-around">四周边框</p> 
<pre>   .b-left::before{
        border-left:1px solid #333;}
    &lt;p class="border  b-left"&gt;左侧边框&lt;/p&gt;
</pre>
                    <p class="border b-left">左侧边框</p> 
<pre>   .b-right::before{
        border-right:1px solid #333;}
    &lt;p class="border b-right"&gt;右侧边框&lt;/p&gt;
</pre>
                    <p class="border b-right">右侧边框</p> 
<pre>   .b-top::before{
        border-top:1px solid #333;}
    &lt;p class="border  b-top"&gt;上边框&lt;/p&gt;
</pre>
                    <p class="border b-top">上边框</p>   
<pre>   .b-bottom::before{
        border-bottom:1px solid #333;}
    &lt;p class="border  b-bottom"&gt;下边框&lt;/p&gt;
</pre>
                    <p class="border b-bottom">下边框</p> 

<pre>   ul::before{
        border-top:1px solid #333;
        border-bottom:1px solid #333;
    }
    ul li{
        float:left;
        width:20%;
        padding:10px 0;
        &::before{
            border-right:1px solid #333;
        }
        &:first-child::before{
            border-left:1px solid #333;
        }
    }
    &lt;ul class="border clear"&gt;
        &lt;li class="border"&gt;&lt;a href="#"&gt;fsaf&lt;/a&gt;&lt;/li&gt;
        &lt;li class="border"&gt;&lt;a href="#"&gt;fsaf&lt;/a&gt;&lt;/li&gt;
        &lt;li class="border"&gt;&lt;a href="#"&gt;fsaf&lt;/a&gt;&lt;/li&gt;
        &lt;li class="border"&gt;&lt;a href="#"&gt;fsaf&lt;/a&gt;&lt;/li&gt;
        &lt;li class="border"&gt;&lt;a href="#"&gt;fsaf&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;    
</pre>
                    <ul class="border clear">
                        <li class="border"><a href="#">fsaf</a></li>
                        <li class="border"><a href="#">fsaf</a></li>
                        <li class="border"><a href="#">fsaf</a></li>
                        <li class="border"><a href="#">fsaf</a></li>
                        <li class="border"><a href="#">fsaf</a></li>
                    </ul>
<pre>   table{
        width:100%;
        margin-top:20px;
    }
    td{
        padding:20px;
        &::before{
            border:1px solid #333;
            border-left:none;
            border-top:none;
        }
        &:first-child::before{
            border-left:1px solid #333;
        }
    }
    tr:first-child{
        td::before{
            border-top:1px solid #333;
        }
    }
    &lt;table&gt;
        &lt;tr&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
            &lt;td class="border"&gt;1111111&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;      
</pre>                        
                    <table>
                        <tr>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                        </tr>
                        <tr>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                            <td class="border">1111111</td>
                        </tr>
                    </table>                
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    p{
        padding:10px 0 10px 10px;
    }
    .b-around::before{
        border:1px solid #333;
    }
    .b-left::before{
        border-left:1px solid #333;
    }
    .b-right::before{
        border-right:1px solid #333;
    }
    .b-top::before{
        border-top:1px solid #333;
    }
    .b-bottom::before{
        border-bottom:1px solid #333;
    }
    ul::before{
        border-top:1px solid #333;
        border-bottom:1px solid #333;
    }
    ul li{
        float:left;
        width:20%;
        padding:10px 0;
        &::before{
            border-right:1px solid #333;
        }
        &:first-child::before{
            border-left:1px solid #333;
        }
    }
    table{
        width:100%;
        margin-top:20px;
    }
    td{
        padding:20px;
        &::before{
            border:1px solid #333;
            border-left:none;
            border-top:none;
        }
        &:first-child::before{
            border-left:1px solid #333;
        }
    }
    tr:first-child{
        td::before{
            border-top:1px solid #333;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
            }
        },
    }
</script>
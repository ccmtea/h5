<template>
    <div class="constant">
        <examples name="constant">
            <div class="pre">
                <pre class="css" v-highlight>
/*   页面最大最小宽高    start*/
.minh{
	min-height:100%;
}
.maxh{
	max-height:100%;
}
.minw{
	min-width:100%;
}
.maxw{
	max-width:100%;
}
/*   页面最大最小宽高    end*/
/*   display    start*/
.db{
	display: block;
}
.dib{
	display: inline-block;
}
.dn{
	display: none;
}
/*   display    end*/
/*   边距    start*/
.mt5{
	margin-top:5px;
}
.mt8{
	margin-top:8px;
}
.mt10{
	margin-top:5px;
}
.mt15{
	margin-top:15px;
}
.mt20{
	margin-top:20px;
}
.mt25{
	margin-top:25px;
}
.mt30{
	margin-top:30px;
}

.ml5{
	margin-left:5px;
}
.ml8{
	margin-left:8px;
}
.ml10{
	margin-left:10px;
}
.ml15{
	margin-left:15px;
}
.ml20{
	margin-left:20px;
}
.ml25{
	margin-left:25px;
}
.ml30{
	margin-left:30px;
}

.mr5{
	margin-right:5px;
}
.mr8{
	margin-right:8px;
}
.mr10{
	margin-right:10px;
}
.mr15{
	margin-right:15px;
}
.mr20{
	margin-right:20px;
}
.mr25{
	margin-right:25px;
}
.mr30{
	margin-right:30px;
}

.pt0{
	padding-top:0;
}
.pr0{
	padding-right:0;
}
.pb0{
	padding-bottom:0;
}
.pl0{
	padding-left:0;
}
.pl5{
	padding-left:5px;
}
.pl10{
	padding-left:10px;
}
.pl15{
	padding-left:15px;
}

.ptb5{
	padding-top:5px;
	padding-bottom:5px;
}
.ptb6{
	padding-top:6px;
	padding-bottom:6px;
}


.plr0{
	padding-right:0;
	padding-left:0;
}
.plr5{
	padding-right:5px;
	padding-left:5px;
}
.plr6{
	padding-right:6px;
	padding-left:6px;
}
.plr8{
	padding-right:8px;
	padding-left:8px;
}
.plr10{
	padding-right:10px;
	padding-left:10px;
}
.plr15{
	padding-right:15px;
	padding-left:15px;
}
.plr30{
	padding-right:30px;
	padding-left:30px;
}
.pd15{
	padding:15px;
}
/*   边距    end*/
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
/*   文字定位      end*/
/*   浮动定位    start*/
.fl{
    float:left;
}
.fr{
    float:right;
}
/*   浮动定位      end*/
/*   文字颜色    start*/
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
	color: #dadada;
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
/**
**  不同状态文本颜色
**  ui-txt-default  主要内容色
**  ui-txt-info 次要内容色
**  ui-txt-muted 不可点击状态文本色
**  ui-txt-warning  警示
**  ui-txt-highlight  关键词高亮颜色
**  链接文本候默认色
**/
.ui-txt-default{
	color:#3c3c3c;
}
.ui-txt-info{
	color:#a7a7a7;
}
.ui-txt-muted{
	color:#bbb;
}
.ui-txt-warning{
	color:#ff4222;
}
.ui-txt-highlight{
	color:#ff9a33;
}
.ui-txt-ok{
	color:#65d521;
}

/*   文字颜色      end*/
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
/*   背景颜色     end*/
/*   边框1px    start*/
.border{
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
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	transform: scale(1);
	-webkit-transform-origin: left top;
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
/*   边框1px       end*/
/*   三角符号    start*/
/**
**.caret-solid  默认 下
**.caret-solid-top   上
**.caret-solid-left  左
**.caret-solid-right 右
**/
.caret-solid{
    position:relative;
	&::after{
		content:"";
		position:absolute;
		width: 0;
		height: 0;
		top:50%;
		margin-top:-4px;
		right: 2px;
		vertical-align: middle;
		border-top: 6px solid;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		color:#a6a6a6;
	}
}
.caret-solid-top{
	&::after{
		transform: rotate(180deg);
	}
}
.caret-solid-left{
	&::after{
		transform: rotate(90deg);
	}
}
.caret-solid-right{
	&::after{
		transform: rotate(-90deg);
	}
}
/*   三角符号    end*/
/*   文字截断    start*/
/**
**.text-overflow-only 单行
**.text-overflow-odd  多行
** line-clamp: 2;  根据需要改变需要的行数覆盖即可
**/
.text-overflow-only{
    width:100%;
    overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.text-overflow-odd{
    display: -webkit-box;
	text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
/*   文字截断      end*/
/*   两端对齐    start*/
.ui-justify{
	text-align: justify;
	font-size:0;
	&:after{
		content:"";
		display: inline-block;
		width:100%;
		height:0;
		overflow: hidden;
	}
	>*{
		display: inline-block;
	}
}
/*   两端对齐    end*/

/*   flex       start*/
/*水平等宽分布*/
.ui-flex-row {
	display: flex;
}
/*垂直等高分布*/
.ui-flex-column {
	display: flex;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	-o-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
}
.ui-flex-col {
	flex: 1;
}
/*实现文本垂直居中*/
.ui-flex-vh {
	-webkit-align-items: center;
	-moz-align-items: center;
	-o-align-items: center;
	-ms-align-items: center;
	-webkit-align-items: center;
	justify-content: center;
	-moz-justify-content: center;
	-o-justify-content: center;
	-ms-justify-content: center;
}
.vh {
	display: flex;
	-webkit-box-align: center;
	box-align: center;
}
/*   flex       end*/
/*   清除浮动    start*/
.clear::after{
    content:"";
    display: block;
    clear:both;
    visibility: hidden;
}
/*   清除浮动          end*/
/*   列表点击背景    start*/
.act-list>li:active{
	background-color: rgba(0, 0, 0, 0.1);
}
/*   列表点击背景    end*/
/*   弹层背景        start*/
.ui-mask{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 10;
    background: rgba(0,0,0,.7);
}
/*   弹层背景        end*/

                </pre>
            </div>
            <div class="con">
                <h6>文字定位</h6>
                ex：
                <div class="main">
	                <pre class="html"  v-highlight>   .tr{ text-align:right;} 
    &lt;p class="tr"&gt;文字向右&lt;/p&gt;
                    </pre>
                    <p class="tr">
                        文字向右
                    </p>
                </div>
        </examples>
        </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
    }
    
</script>
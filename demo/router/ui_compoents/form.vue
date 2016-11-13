<template>
    <div class="forms">
        <examples name = "表单">
            <div class="con">
                <div class="main">
                    <pre class="css" v-highlight>
$ui-cell-ptb:6px;
$ui-cell-height:46px;

/**    表单单选项基本配置    start**/
$ui-rc-w:26px;
$ui-rc-h:26px;
$ui-rc-wb:24px;
$ui-rc-hb:24px;
$ui-radio-wa:14px;
$ui-radio-ha:14px;
$ui-radio-abr:7px;
$ui-radio-al:5px;
$ui-radio-at:5px;
/**    表单单选项基本配置    end**/

/**    表单多选项基本配置    start**/
$ui-cb-fs:22px;
$ui-cb-lh:20px;
/**    表单多选项基本配置    end**/

/**    多选，适用签订条款    start**/
$ui-agree-ct:2px;
$ui-agree-cbt:4px;
$ui-agree-cbl:6px;
/**    多选，适用签订条款    end**/

/**    图片验证码    start**/
$ui-vcode-imgH:34px;
/**    图片验证码    end**/

/**    短信验证码    start**/
$ui-re-sendH:34px;
/**    短信验证码    end**/

/**    表单开关    start**/
$ui-switch-w:52px;
$ui-switch-h:32px;
$ui-switch-r:16px;
$ui-switch-pric:#DFDFDF;

$ui-switch-wb:50px;
$ui-switch-hb:30px;
$ui-switch-bcb:#FDFDFD;

$ui-switch-wa:30px;
$ui-switch-ha:30px;
$ui-switch-bca:#fff;
/**    表单开关    end**/



.ui-form-wrap{
    font-size:16px;
    .ui-cell{
        height:$ui-cell-height;
        line-height:$ui-cell-height - $ui-cell-ptb*2;
    }
}

.ui-form-input,.ui-select .ui-form-select{
    width:100%;
    border:none;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: inherit;
    color: inherit;
}

/**   清空input   start**/
.ui-input-clear{
    position:absolute;
    top:0;
    right:0;
}
/**   清空input   end**/

/**   排列多个 行内块级select   start**/
.ui-select-dib{
    float:left;
    position:relative;
    .ui-form-select{
        padding-right: 14px;
    }
}
/**   排列多个select   end**/

/**   表单单选   start**/
.ui-radio{
    input[type = "radio"]{
        display: inline-block;
        width: $ui-rc-w;
        height: $ui-rc-h;
        position: relative;
        overflow: visible;
        border: 0;
        background: none;
        -webkit-appearance: none;
        outline: none;
        vertical-align: middle;
        &::before{
            content: '';
            display: block;
            width: $ui-rc-wb;
            height: $ui-rc-hb;
            border: 1px solid #dfe0e1;
            border-radius: 50%;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            position: absolute;
            left: 0px;
            top: 0;
        }
        &:checked::after{
            content: '';
            display: block;
            width: $ui-radio-wa;
            height:$ui-radio-ha;
            background: $ui-default-color;
            border-radius: $ui-radio-abr;
            position: absolute;
            left: $ui-radio-al;
            top: $ui-radio-at;
        }
    }
}
/**   表单单选   end**/

/**   表单多选   start**/
.ui-checkbox input{
    display: inline-block;
    width: $ui-rc-w;
    height: $ui-rc-h;
    position: relative;
    overflow: visible;
    border: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    vertical-align: middle;
    &::before{
        content: '';
        display: block;
        width: $ui-rc-wb;
        height: $ui-rc-hb;
        border: 1px solid #dfe0e1;
        border-radius: 50%;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        position: absolute;
        left: 0px;
        top: 0;
    }
    &:checked::before{
        content:"\e679";
        font: normal normal normal 23px/22px "iconfont";
        -webkit-font-smoothing: antialiased;
        color:$ui-default-color;
        position: absolute;
    }
}
/**   表单多选   end**/

/**   多选，作用于签订相关条款   start**/
.ui-agree{
    padding:0 15px;
    .ui-agree-checkbox{
        -webkit-appearance: none;
        appearance: none;
        font-size: 0;
        border: 1px solid #D1D1D1;
        background-color: #FFFFFF;
        border-radius: 3px;
        width: 13px;
        height: 13px;
        position: relative;
        vertical-align: 0;
        top: $ui-agree-ct;
        &:checked::before{
                font: normal normal normal 23px/44px "iconfont";
                text-transform: none;
                text-align: center;
                speak: none;
                display: inline-block;
                vertical-align: middle;
                text-decoration: inherit;
                content: "\e643";
                color: $ui-default-color;
                position: absolute;
                top: $ui-agree-cbt;
                left: $ui-agree-cbl;
                transform: translate(-50%, -48%) scale(0.73);
                -webkit-transform: translate(-50%, -48%) scale(0.73);
        }
    }
}
/**   多选，作用于签订相关条款   end**/

/**   图片验证码   start**/
.ui-vcode-img{
    height:$ui-vcode-imgH;
}
/**   图片验证码   end**/

/**   短信验证码   start**/
.ui-re-send{
    height:$ui-re-sendH;
    color:#fff;
    background:$ui-default-color;
}
/**   短信验证码   end**/

/**   表单开关   start**/
.ui-switch{
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    width: $ui-switch-w;
    height: $ui-switch-h;
    border: 1px solid $ui-switch-pric;
    outline: 0;
    border-radius: $ui-switch-r;
    box-sizing: border-box;
    background-color: $ui-switch-pric;
    -webkit-transition: background-color 0.1s, border 0.1s;
    transition: background-color 0.1s, border 0.1s;
    &::before,&::after{
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
    }
    &::before{
        width: $ui-switch-wb;
        height: $ui-switch-hb;
        background-color: $ui-switch-bcb;
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }
    &::after{
        width: $ui-switch-wa;
        height:$ui-switch-ha;
        background-color: $ui-switch-bca;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
    &:checked{
        border-color: $ui-default-color;
        background-color: $ui-default-color;
        &:before{
            transform: scale(0);
        }
        &:after{
            transform: translateX(20px);
        }
    }
}
/**   表单开关   end**/
                    </pre>
                    ex：<br/>
                    普通表单
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;用户名&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="ui-form-input"&gt;
                &lt;div class="ui-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;密码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="ui-form-input"&gt;
                &lt;div class="ui-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">用户名</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">密码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    验证码
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;验证码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="ui-form-input"&gt;
                &lt;div class="ui-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;
            &lt;img class="ui-vcode-img ml5" src="/img/vcode.jpg"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;短信验证码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="ui-form-input"&gt;
                &lt;div class="ui-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;
            &lt;button class="ui-re-send ml5 plr8"&gt;发送验证码&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">验证码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="ui-cell-fd">
                                <img class="ui-vcode-img ml5" src="/img/vcode.jpg">
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">短信验证码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="ui-cell-fd">
                                <button class="ui-re-send ml5 plr8">发送验证码</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    下拉框
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;表单下拉框&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            &lt;div class="ui-select caret-solid"&gt;
                &lt;select name="" id="" class="ui-form-select"&gt;
                    &lt;option value=""&gt;2015&lt;/option&gt;
                    &lt;option value=""&gt;2016&lt;/option&gt;
                    &lt;option value=""&gt;2017&lt;/option&gt;
                &lt;/select&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd mr10"&gt;
            &lt;label class="ui-label"&gt;表单下拉框&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
                &lt;div class="ui-select ui-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="ui-form-select"&gt;
                    &lt;option value=""&gt;2015&lt;/option&gt;
                    &lt;option value=""&gt;2016&lt;/option&gt;
                    &lt;option value=""&gt;2017&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
                &lt;div class="ui-select ui-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="ui-form-select"&gt;
                    &lt;option value=""&gt;08&lt;/option&gt;
                    &lt;option value=""&gt;09&lt;/option&gt;
                    &lt;option value=""&gt;10&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
                &lt;div class="ui-select ui-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="ui-form-select"&gt;
                    &lt;option value=""&gt;11&lt;/option&gt;
                    &lt;option value=""&gt;12&lt;/option&gt;
                    &lt;option value=""&gt;13&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">表单下拉框</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                <div class="ui-select caret-solid">
                                    <select name="" id="" class="ui-form-select">
                                        <option value="">2015</option>
                                        <option value="">2016</option>
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">表单下拉框</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <div class="ui-select ui-select-dib caret-solid mr8">
                                    <select name="" id="" class="ui-form-select">
                                        <option value="">2015</option>
                                        <option value="">2016</option>
                                        <option value="">2017</option>
                                    </select>
                                 </div>
                                 <div class="ui-select ui-select-dib caret-solid mr8">
                                    <select name="" id="" class="ui-form-select">
                                        <option value="">08</option>
                                        <option value="">09</option>
                                        <option value="">10</option>
                                    </select>
                                 </div>
                                 <div class="ui-select ui-select-dib caret-solid mr8">
                                    <select name="" id="" class="ui-form-select">
                                        <option value="">11</option>
                                        <option value="">12</option>
                                        <option value="">13</option>
                                    </select>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    单选框
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd"&gt;
            &lt;label class="ui-radio mr8" for="radio"&gt;
                &lt;input type="radio" name="radio"&gt;
            &lt;/label&gt;
        &lt;/div>
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            表单单选项
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd"&gt;
            &lt;label class="ui-radio mr8" for="radio"&gt;
                &lt;input type="radio" name="radio"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            表单单选项
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd">
                               <label class="ui-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd">
                               <label class="ui-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                    </div>
                    <br/>
                    多选框
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd"&gt;
            &lt;label class="ui-checkbox mr8" for="checkbox"&gt;
                &lt;input type="checkbox" name="checkbox"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            表单多选项
        &lt;/div&gt;
   &lt;/div&gt;
    &lt;div class="ui-cell jz-flex-row border ptb6"&gt;
        &lt;div class="ui-cell-hd"&gt;
            &lt;label class="ui-checkbox mr8" for="checkbox"&gt;
                &lt;input type="checkbox" name="checkbox"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="ui-cell-bd jz-flex-col"&gt;
            表单多选项
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd">
                               <label class="ui-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd">
                               <label class="ui-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                    </div>
                    <br/>
                    开关项
                    <pre class="html" v-highlight>
&lt;div class="ui-form-wrap"&gt;
    &lt;div class="ui-cell ui-cell-switch jz-flex-row border"&gt;
        &lt;div class="ui-cell-hd jz-flex-col mr10"&gt;
            表单开关项
        &lt;/div&gt;
        &lt;div class="ui-cell-fd"&gt;
            &lt;input type="checkbox"  class="ui-switch"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="ui-form-wrap">
                        <div class="ui-cell ui-cell-switch jz-flex-row border">
                            <div class="ui-cell-hd jz-flex-col mr10">
                                表单开关项
                            </div>
                            <div class="ui-cell-fd">
                                <input type="checkbox"  class="ui-switch">
                            </div>
                        </div>
                    </div>
                    <br/>
                    签订条款（多选框）
                    <pre class="html" v-highlight>
&lt;p class="ui-agree"&gt;
    &lt;input type="checkbox" class="ui-agree-checkbox"&gt;
    &lt;span class="ui-agree-text"&gt;
        阅读并同意<a href="javascript:void(0);"&gt;《相关条款》&lt;/a&gt;
    &lt;/span&gt;
&lt;/p&gt; 
                    </pre>
                    <p class="ui-agree">
                        <input type="checkbox" class="ui-agree-checkbox">
                        <span class="ui-agree-text">
                            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
                        </span>
                    </p>
                    <br/>
                    表单列表
                    <pre class="html" v-highlight>
&lt;div&gt; 
    &lt;a href="javascript:;" class="ui-cell jz-flex-row border ptb6"&gt; 
        &lt;div class="ui-cell-hd mr10 c-29"&gt; 
            &lt;label for="">账号&lt;/label&gt; 
        &lt;/div>
        &lt;div class="jz-flex-col c-666"&gt; 
            &lt;span&gt; 我是账号内容&lt;/span&gt; 
        &lt;/div&gt; 
        &lt;div class="icon-chevron-thin-right"&gt; &lt;/div&gt; 
    &lt;/a&gt; 
    &lt;div href="javascript:;" class="ui-cell jz-flex-row border ptb6"&gt; 
        &lt;div class="ui-cell-hd mr10 c-29"&gt; 
            &lt;label for=""&gt; 身份证 &lt;/label&gt; 
        &lt;/div&gt; 
        &lt;div class="jz-flex-col c-666"&gt; 
            &lt;span&gt; 2554545464531344&lt;/span&gt; 
        &lt;/div&gt; 
    &lt;/div&gt; 
&lt;/div&gt; 
                    </pre>
                    <div>
                        <a href="javascript:;" class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10 c-29">
                                <label for="">账号</label>
                            </div>
                            <div class="jz-flex-col c-666">
                                <span>我是账号内容</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <div href="javascript:;" class="ui-cell jz-flex-row border ptb6">
                            <div class="ui-cell-hd mr10 c-29">
                                <label for="">身份证</label>
                            </div>
                            <div class="jz-flex-col c-666">
                                <span>2554545464531344</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">

</style>
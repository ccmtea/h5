<template>
    <div class="forms">
        <examples name = "表单">
            <div class="con">
                <div class="main">
                    css from：form.scss<br/>
                    ex：<br/>
                    普通表单
                    <pre class="html" v-highlight>
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;用户名&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="jz-form-input"&gt;
                &lt;div class="jz-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;密码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="jz-form-input"&gt;
                &lt;div class="jz-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">用户名</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                 <input type="text" class="jz-form-input">
                                 <div class="jz-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">密码</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                 <input type="text" class="jz-form-input">
                                 <div class="jz-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    验证码
                    <pre class="html" v-highlight>
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;验证码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="jz-form-input"&gt;
                &lt;div class="jz-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-fd"&gt;
            &lt;img class="jz-vcode-img ml5" src="/img/vcode.jpg"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;短信验证码&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
                &lt;input type="text" class="jz-form-input"&gt;
                &lt;div class="jz-input-clear icon-cancel-thin"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-fd"&gt;
            &lt;button class="jz-re-send ml5 plr8"&gt;发送验证码&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">验证码</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                 <input type="text" class="jz-form-input">
                                 <div class="jz-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="jz-cell-fd">
                                <img class="jz-vcode-img ml5" src="/img/vcode.jpg">
                            </div>
                        </div>
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">短信验证码</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                 <input type="text" class="jz-form-input">
                                 <div class="jz-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="jz-cell-fd">
                                <button class="jz-re-send ml5 plr8">发送验证码</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    下拉框
                    <pre class="html" v-highlight>
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;表单下拉框&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
            &lt;div class="jz-select caret-solid"&gt;
                &lt;select name="" id="" class="jz-form-select"&gt;
                    &lt;option value=""&gt;2015&lt;/option&gt;
                    &lt;option value=""&gt;2016&lt;/option&gt;
                    &lt;option value=""&gt;2017&lt;/option&gt;
                &lt;/select&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd mr10"&gt;
            &lt;label class="jz-label"&gt;表单下拉框&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
                &lt;div class="jz-select jz-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="jz-form-select"&gt;
                    &lt;option value=""&gt;2015&lt;/option&gt;
                    &lt;option value=""&gt;2016&lt;/option&gt;
                    &lt;option value=""&gt;2017&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
                &lt;div class="jz-select jz-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="jz-form-select"&gt;
                    &lt;option value=""&gt;08&lt;/option&gt;
                    &lt;option value=""&gt;09&lt;/option&gt;
                    &lt;option value=""&gt;10&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
                &lt;div class="jz-select jz-select-dib caret-solid mr8"&gt;
                &lt;select name="" id="" class="jz-form-select"&gt;
                    &lt;option value=""&gt;11&lt;/option&gt;
                    &lt;option value=""&gt;12&lt;/option&gt;
                    &lt;option value=""&gt;13&lt;/option&gt;
                &lt;/select&gt;
                &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">表单下拉框</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                <div class="jz-select caret-solid">
                                    <select name="" id="" class="jz-form-select">
                                        <option value="">2015</option>
                                        <option value="">2016</option>
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10">
                                <label class="jz-label">表单下拉框</label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                                 <div class="jz-select jz-select-dib caret-solid mr8">
                                    <select name="" id="" class="jz-form-select">
                                        <option value="">2015</option>
                                        <option value="">2016</option>
                                        <option value="">2017</option>
                                    </select>
                                 </div>
                                 <div class="jz-select jz-select-dib caret-solid mr8">
                                    <select name="" id="" class="jz-form-select">
                                        <option value="">08</option>
                                        <option value="">09</option>
                                        <option value="">10</option>
                                    </select>
                                 </div>
                                 <div class="jz-select jz-select-dib caret-solid mr8">
                                    <select name="" id="" class="jz-form-select">
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
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd"&gt;
            &lt;label class="jz-radio mr8" for="radio"&gt;
                &lt;input type="radio" name="radio"&gt;
            &lt;/label&gt;
        &lt;/div>
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
            表单单选项
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd"&gt;
            &lt;label class="jz-radio mr8" for="radio"&gt;
                &lt;input type="radio" name="radio"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
            表单单选项
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd">
                               <label class="jz-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd">
                               <label class="jz-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                    </div>
                    <br/>
                    多选框
                    <pre class="html" v-highlight>
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd"&gt;
            &lt;label class="jz-checkbox mr8" for="checkbox"&gt;
                &lt;input type="checkbox" name="checkbox"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
            表单多选项
        &lt;/div&gt;
   &lt;/div&gt;
    &lt;div class="jz-cell jz-flex-row border ptb6"&gt;
        &lt;div class="jz-cell-hd"&gt;
            &lt;label class="jz-checkbox mr8" for="checkbox"&gt;
                &lt;input type="checkbox" name="checkbox"&gt;
            &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="jz-cell-bd jz-flex-col"&gt;
            表单多选项
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd">
                               <label class="jz-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                        <div class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd">
                               <label class="jz-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="jz-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                    </div>
                    <br/>
                    开关项
                    <pre class="html" v-highlight>
&lt;div class="jz-form-wrap"&gt;
    &lt;div class="jz-cell jz-cell-switch jz-flex-row border"&gt;
        &lt;div class="jz-cell-hd jz-flex-col mr10"&gt;
            表单开关项
        &lt;/div&gt;
        &lt;div class="jz-cell-fd"&gt;
            &lt;input type="checkbox"  class="jz-switch"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="jz-form-wrap">
                        <div class="jz-cell jz-cell-switch jz-flex-row border">
                            <div class="jz-cell-hd jz-flex-col mr10">
                                表单开关项
                            </div>
                            <div class="jz-cell-fd">
                                <input type="checkbox"  class="jz-switch">
                            </div>
                        </div>
                    </div>
                    <br/>
                    签订条款（多选框）
                    <pre class="html" v-highlight>
&lt;p class="jz-agree"&gt;
    &lt;input type="checkbox" class="jz-agree-checkbox"&gt;
    &lt;span class="jz-agree-text"&gt;
        阅读并同意<a href="javascript:void(0);"&gt;《相关条款》&lt;/a&gt;
    &lt;/span&gt;
&lt;/p&gt; 
                    </pre>
                    <p class="jz-agree">
                        <input type="checkbox" class="jz-agree-checkbox">
                        <span class="jz-agree-text">
                            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
                        </span>
                    </p>
                    <br/>
                    表单列表
                    <pre class="html" v-highlight>
&lt;div&gt; 
    &lt;a href="javascript:;" class="jz-cell jz-flex-row border ptb6"&gt; 
        &lt;div class="jz-cell-hd mr10 c-29"&gt; 
            &lt;label for="">账号&lt;/label&gt; 
        &lt;/div>
        &lt;div class="jz-flex-col c-666"&gt; 
            &lt;span&gt; 我是账号内容&lt;/span&gt; 
        &lt;/div&gt; 
        &lt;div class="icon-chevron-thin-right"&gt; &lt;/div&gt; 
    &lt;/a&gt; 
    &lt;div href="javascript:;" class="jz-cell jz-flex-row border ptb6"&gt; 
        &lt;div class="jz-cell-hd mr10 c-29"&gt; 
            &lt;label for=""&gt; 身份证 &lt;/label&gt; 
        &lt;/div&gt; 
        &lt;div class="jz-flex-col c-666"&gt; 
            &lt;span&gt; 2554545464531344&lt;/span&gt; 
        &lt;/div&gt; 
    &lt;/div&gt; 
&lt;/div&gt; 
                    </pre>
                    <div>
                        <a href="javascript:;" class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10 c-29">
                                <label for="">账号</label>
                            </div>
                            <div class="jz-flex-col c-666">
                                <span>我是账号内容</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <div href="javascript:;" class="jz-cell jz-flex-row border ptb6">
                            <div class="jz-cell-hd mr10 c-29">
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
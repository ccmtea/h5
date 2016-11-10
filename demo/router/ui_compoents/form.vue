<template>
    <div class="forms">
        <examples name = "表单">
            <div class="con">
                <div class="main">
                    <div class="ui-form-wrap">
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">用户名</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">密码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">验证码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="ui-cell-fd">
                                <img class="ui-vcode-img" src="/img/vcode.jpg">
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">重新发送验证码</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                 <input type="text" class="ui-form-input">
                                 <div class="ui-input-clear icon-cancel-thin"></div>
                            </div>
                            <div class="ui-cell-fd">
                                <button class="ui-re-send">重新发送</button>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10">
                                <label class="ui-label">表单下拉框</label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                                <div></div>
                                <div class="ui-select caret-solid">
                                    <select name="" id="" class="ui-form-select">
                                        <option value="">2015</option>
                                        <option value="">2016</option>
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
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
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd">
                               <label class="ui-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd">
                               <label class="ui-radio mr8" for="radio">
                                    <input type="radio" name="radio">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单单选项
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd">
                               <label class="ui-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                        <div class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd">
                               <label class="ui-checkbox mr8" for="checkbox">
                                    <input type="checkbox" name="checkbox">
                                </label>
                            </div>
                            <div class="ui-cell-bd jz-flex-col">
                               表单多选项
                            </div>
                        </div>
                        <div class="ui-cell ui-cell-switch jz-flex-row border">
                            <div class="ui-cell-hd jz-flex-col mr10">
                                表单开关项
                            </div>
                            <div class="ui-cell-fd">
                                <input type="checkbox"  class="ui-switch">
                            </div>
                        </div>
                    </div>
                    <p class="ui-agree">
                        <input type="checkbox" class="ui-agree-checkbox">
                        <span class="ui-agree-text">
                            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
                        </span>
                    </p>
                    <div>
                        <a href="javascript:;" class="ui-cell jz-flex-row border">
                            <div class="ui-cell-hd mr10 c-29">
                                <label for="">账号</label>
                            </div>
                            <div class="jz-flex-col c-666">
                                <span>我是账号内容</span>
                            </div>
                            <div class="icon-chevron-thin-right"></div>
                        </a>
                        <div href="javascript:;" class="ui-cell jz-flex-row border">
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
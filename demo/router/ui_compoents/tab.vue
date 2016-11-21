<template>
    <div class="tabs">
        <examples name="">
            <div class="con">
                <div class="main">
                    <div class="ui-tab jz-flex-row border">
                        <div class="jz-flex-col tc border ui-tab-cur">Tab1</div>
                        <div class="jz-flex-col tc border">Tab2</div>
                        <div class="jz-flex-col tc border">Tab3</div>
                    </div>
                    <pre class="css" v-highlight>
$tab-height:38px; //tab高度
$tab-bordercolor:#ccc;   //tab默认边框颜色
$tab-bordercolor-cur:red;  //tab当前边框颜色
.ui-tab{
    height:$tab-height;
    line-height: $tab-height;
    &::before{
        border:none;
        border-bottom:1px solid $tab-bordercolor;
    }
    &>.border{
        &::before{
            border:none;
        }
    }
    &>.ui-tab-cur{
        &::before{
            border:none;
            border-bottom:2px solid $tab-bordercolor-cur;
        }
    }
}
                    </pre>
                    <pre class="html" v-highlight>
&lt;div class="ui-tab jz-flex-row border"&gt;
    &lt;div class="jz-flex-col tc border ui-tab-cur"&gt;Tab1&lt;/div&gt;
    &lt;div class="jz-flex-col tc border"&gt;Tab2&lt;/div&gt;
    &lt;div class="jz-flex-col tc border"&gt;Tab3&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
</style>
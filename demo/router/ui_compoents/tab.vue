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
                    <ul>    
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
.ui-tab{
    height:38px;
    line-height: 38px;
    &::before{
        border:none;
        border-bottom:1px solid #ccc;
    }
    &>.border{
        &::before{
            border:none;
        }
    }
    &>.ui-tab-cur{
        &::before{
            border:none;
            border-bottom:2px solid red;
        }
    }
}
</style>
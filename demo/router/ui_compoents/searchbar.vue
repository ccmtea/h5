<template>
    <div class="searchbars">
        <examples name = "搜索框">
            <div class = "con">
                <div class="main">
                    <div class="searchbar-wrap">
                        <div class="searchbar">
                            <i class = "icon-search"></i>
                            <div class="searchbar-input">
                                <input type="text">
                            </div>
                            <i class="icon-cancel-thin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">
.searchbar-wrap{
    position: relative;
    height:45px;
    padding:0 15px;
    background: #eee;
    .icon-search{
        position: absolute;
        right:0;
        padding:0 15px;
        line-height:45px;
    }
    .searchbar-input{
        padding:7px 0;
        input{
            width:100%;
            padding:5px 0;
            border:none;
            border-radius:6px;
        }
    }
    .icon-cancel-thin{
        position: absolute;
    }

    &.focus{
        .icon-search{

        }
        .icon-cancel-thin{
            position: absolute;
        }
    }
}
</style>
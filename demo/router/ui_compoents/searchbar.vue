<template>
    <div class="searchbars">
        <examples name = "搜索框">
            <div class = "con">
                <div class="main">
                    <div class="searchbar-wrap" :class = "{focus: addFocus}">
                        <div class="searchbar">
                            <i class = "icon-search"  v-on:click = "aFocus"></i>
                            <div class="searchbar-input">
                                <input type="text" placeholder="搜索产品" v-model = "message">
                            </div>
                            <i class="icon-cancel-thin" v-on:click = "iNull"></i>
                        </div>
                        <div class="searchbar-cancel" v-on:click = "rFocus">取消</div>
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
    padding:7px 15px;
    background: #eee;
    .icon-cancel-thin,.searchbar-cancel,.searchbar-input{
        display: none;
    }
    .searchbar{
        width:calc(100% - 40px);
        height:100%;
        position: relative;
    }
    .icon-search{
        position: absolute;
        right:-40px;
        line-height:31px;
    }
    .searchbar-input{
        height:100%;
        padding-right:40px;
        border-radius: 4px;
        background: #fff;
        input{
            width:100%;
            padding:5px 0 5px 40px;
            border:none;
            border-radius:6px;
        }
    }
    &.focus{
        .searchbar-input,.icon-cancel-thin,.searchbar-cancel{
            display: block;
        }
        .icon-search{
            position: absolute;
            left: 0;
            right: inherit;
            padding:0 0 0 15px;
        }
        .icon-cancel-thin{
            position: absolute;
            top:0;
            right:0;
            padding:5px 12px;
        }
        .searchbar-cancel{
            position:absolute;
            top:0;
            right:0;
            padding:13px;
            cursor: pointer;
        }
    }
}
</style>
<script>
    export default{
        data(){
            return {
                addFocus:false,
                message:""
            }
        },
        methods: {
            aFocus: function(){
                this.addFocus = true;
            },
            rFocus: function(){
                this.addFocus = false; 
            },
            iNull: function(){
                this.message = "";
            }
        }
        
    }
</script>
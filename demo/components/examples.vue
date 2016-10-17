<template>
    <div class="examples">
        <slot>
            如果没有分发内容则显示我。
        </slot>
    </div>
</template>
<style scoped lang="scss">
    .examples{
        box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
        h4{
            height:56px;
            line-height:56px;
            color:#919197;
            font-size:20px;
            padding:0 30px;
            background:#e8e8e8;
        }
        .pre{
            max-height:450px;
            overflow:auto;
            border:1px solid #eee;
            background: #f7f7f7;
        }
        .con{
            padding: 14px 24px 24px;
            background:#fff;
            pre{
                background:#f7f7f7;
                padding:10px;
                margin:10px 0 15px;
            }
            h6{
                font-size:16px;
            }
            .main{
                width:80%;
                margin:0 auto;
            }
        }
    }
</style>
<script>
    import store from '../store'
    export default{
        data(){
            return{
                msg:'',
            }
        }
    };
</script>
<template>
    <div class="searchbars">
        <examples name = "搜索框">
            <div class = "con">
                <div class="main">
                    css from：searchbar.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="ui-searchbar-wrap ui-flex-row"&gt;
    &lt;div class="ui-searchbar ui-flex-col"&gt;
        &lt;i class = "icon-search pdl15"&gt;&lt;/i&gt;
        &lt;div class="ui-searchbar-text dib"&gt;搜索&lt;/div&gt;
        &lt;div class="ui-searchbar-input"&gt;
            &lt;input type="text" placeholder="搜索产品"&gt;
        &lt;/div&gt;
        &lt;i class="icon-cancel-thin tc"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="ui-searchbar-cancel plr15"&gt;取消&lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="ui-searchbar-wrap ui-flex-row">
                        <div class="ui-searchbar ui-flex-col">
                            <i class = "icon-search pdl15"></i>
                            <div class="ui-searchbar-text dib">搜索</div>
                            <div class="ui-searchbar-input">
                                <input type="text" placeholder="搜索产品">
                            </div>
                            <i class="icon-cancel-thin tc"></i>
                        </div>
                        <div class="ui-searchbar-cancel plr15">取消</div>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang = "scss">

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
    $(function(){
        $('.ui-searchbar').click(function(){
            $('.ui-searchbar-wrap').addClass('focus');
            $('.ui-searchbar-input input').focus();
        });
        $('.ui-searchbar-cancel').click(function(){
            $('.ui-searchbar-wrap').removeClass('focus');
        });
    })
</script>
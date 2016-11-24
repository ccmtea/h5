<template>
    <div class="searchbars">
        <examples name = "搜索框">
            <div class = "con">
                <div class="main">
                    css from：searchbar.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;div class="jz-searchbar-wrap jz-flex-row"&gt;
    &lt;div class="jz-searchbar jz-flex-col"&gt;
        &lt;i class = "icon-search pdl15"&gt;&lt;/i&gt;
        &lt;div class="jz-searchbar-text dib"&gt;搜索&lt;/div&gt;
        &lt;div class="jz-searchbar-input"&gt;
            &lt;input type="text" placeholder="搜索产品"&gt;
        &lt;/div&gt;
        &lt;i class="icon-cancel-thin tc"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="jz-searchbar-cancel plr15"&gt;取消&lt;/div&gt;
&lt;/div&gt; 
                    </pre>
                    <div class="jz-searchbar-wrap jz-flex-row">
                        <div class="jz-searchbar jz-flex-col">
                            <i class = "icon-search pdl15"></i>
                            <div class="jz-searchbar-text dib">搜索</div>
                            <div class="jz-searchbar-input">
                                <input type="text" placeholder="搜索产品">
                            </div>
                            <i class="icon-cancel-thin tc"></i>
                        </div>
                        <div class="jz-searchbar-cancel plr15">取消</div>
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
        $('.jz-searchbar').click(function(){
            $('.jz-searchbar-wrap').addClass('focus');
            $('.jz-searchbar-input input').focus();
        });
        $('.jz-searchbar-cancel').click(function(){
            $('.jz-searchbar-wrap').removeClass('focus');
        });
    })
</script>
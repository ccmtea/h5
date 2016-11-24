<template>
    <div class="buttons">
        <examples name ="按钮">
            <div class="con">
                <div class="main">
                    css from：mixin.scss && btn.scss<br/>
                    ex：
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-default border"&gt;default&lt;/button&gt;
                    </pre>
                    <button class="jz-btn jz-btn-default border">default</button>
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-primary"&gt;primary&lt;/button&gt;
                    </pre>
                    <button class="jz-btn jz-btn-primary">primary</button>
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-secondary"&gt;secondary&lt;/button&gt;
                    </pre>
                    <button class="jz-btn jz-btn-secondary">secondary</button>
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-warning"&gt;warning&lt;/button&gt;
                    </pre>
                    <button class="jz-btn jz-btn-warning">warning</button>
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-primary jz-btn-block" disabled &gt;disabled(我是禁用状态，标签在中添加“disabled”)&lt;/button&gt;
                    </pre>                   
                    <button class="jz-btn jz-btn-primary jz-btn-block" disabled>disabled(我是禁用状态，标签在中添加“disabled”)</button>
                    <pre class="html" v-highlight>
&lt;button class="jz-btn jz-btn-primary jz-btn-block"&gt;primary(我是块级按钮，只需添加“btn-block”)&lt;/button&gt;
                    </pre>
                    <button class="jz-btn jz-btn-primary jz-btn-block">primary(我是块级按钮，只需添加“btn-block”)</button>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
    
</style>
<script>
    export default{
        data(){
            return {

            }
        },
    }
</script>
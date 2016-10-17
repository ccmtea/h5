<template>
    <div class="reset">
        <examples name="reset">
             <div class="pre">
                <pre class="css" v-highlight>
    html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, dl,dd, button, hr, pre, fieldset, menu, figure, blockquote {
        margin:0;
        padding:0;
    }
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
    }
    *, :after, :before, legend {
        box-sizing:border-box;
    }
    html {
        -ms-text-size-adjust: 100%; 
        -webkit-text-size-adjust: 100%; 
    }
    body {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
        font-size: 14px;
        line-height: 1.4;
        font-family: "\9ED\4F53", "Hiragino Sans GB", "Hiragino Sans GB W3", "Droid Sans", "Kalinga", sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    caption, th {
        text-align: left;
    }
    ul, li {
        list-style: none;
    }
    sup, sub {
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        vertical-align: text-top;
    }
    sub {
        vertical-align: text-bottom;
    }
    ins {
        text-decoration: none;
    }
    del {
        text-decoration: line-through;
    }
    audio, canvas, video {
        display: inline-block;
    }
    q:before, q:after {
        content: '';
    }
    abbr, acronym {
        border: 0;
        font-variant: normal;
    }
    a, input, button, textarea, select, optgroup, option {
        font-family: inherit;
        font-style: inherit;
        font-weight: inherit;
        outline: 0;
    }
    dfn {
        font-style: italic;
    }
    fieldset, img, a img {
        border: none;
    }
    form legend {
        display: none;
    }
    button {
        -webkit-appearance: none;
        border: 0;
        background: none;
    }
    a {
        -webkit-text-decoration-skip: objects; 
        -webkit-touch-callout: none;
        text-decoration: none;
        color: #5edd9e;
    }
    a:active,
    a:hover {
        outline-width: 0;
    }
    :focus {
        outline: 0;
        -webkit-tap-highlight-color: transparent;
    }
    em, i {
        font-style: normal;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    abbr[title] {
        border-bottom: none; 
        text-decoration: underline; 
        text-decoration: underline dotted; 
    }
    /*input number 右边上下按钮*/
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
                </pre>
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
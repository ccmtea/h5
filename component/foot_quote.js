var foot_quote  = Vue.extend({
    template:`
         <script>
            document.body.addEventListener('touchstart', function () {});  
        </script>
        <script src="../../js/vue.js"></script>
        <script src="../../highlight/highlight.js"></script>
        <script src="../../js/zeroClipboard.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
    `
})
Vue.component('v-foot-quote',foot_quote)
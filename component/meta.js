var meta = Vue.extend({
	template:`
	    <meta charset="UTF-8">
         <meta content="yes" name="apple-mobile-web-app-capable"> 
         <meta content="yes" name="apple-touch-fullscreen"> 
         <meta content="telephone=no,email=no" name="format-detection"> 
         <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes"> 
	`
})

Vue.component('v-meta',meta)
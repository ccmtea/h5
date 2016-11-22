<template>
    <div class="toasts">
        <examples name="弹出式提示">
            <div class="con">
                <div class="main">
                    <a href="#" class="ui-btn ui-btn-default">提示</a>
                    <a href="#" class="ui-btn ui-btn-default">加载中提示</a>
                    <!--<div class="ui-msg-mode">
                        <div class="ui-msg-text tc">我是提示</div>
                    </div>-->
                    <div class="ui-loading-mode tc">
                        <i class="icon-loading ui-loading-icon db"></i>
                    </div>
                </div>
            </div>
        </examples>
    </div>
</template>
<style scoped lang="scss">
.ui-msg-mode{
    position: fixed;
    width:82%;
    left:50%;
    top:50%;
    transform: translate(-50%);
    z-index:100;
    .ui-msg-text{
        padding:15px;
        color:#fff;
        background-color: rgba(51, 51, 51, 0.9);
    }
}
.loadingAm{position:fixed;
    left:50%;
    top:30%;
    margin-left:-.533333rem;
    padding:.213333rem;
    background:rgba(0,0,0,.38);
    border-radius:.133333rem;
    z-index:100
}
.spinner{
    width:.4rem;
height:.4rem;
position:relative}
.spinner .spinner-container,.wxtips-mark{
    position:absolute;
    width:100%;
    height:100%}
    .container1>div,.container2>div,.container3>div{
        width:.12rem;
        height:.12rem;
        background-color:#fff;
        border-radius:100%;
        position:absolute;
        -webkit-animation:bouncedelay 1.2s infinite ease-in-out;
        animation:bouncedelay 1.2s infinite ease-in-out;
        -webkit-animation-fill-mode:both;animation-fill-mode:both}
        .container2{
            -webkit-transform:rotate(45deg);
            transform:rotate(45deg)}
            .container3{
                -webkit-transform:rotate(90deg);
                transform:rotate(90deg)}
                .circle1{
                    top:0;
                    left:0}
                    .circle2{
                        top:0;
                        right:0}
                        .circle3{
                            right:0;
                            bottom:0}
                            .circle4{
                                left:0;
                                bottom:0}
                                .container2 .circle1{
                                    -webkit-animation-delay:-1.1s;
                                    animation-delay:-1.1s}
                                    .container3 .circle1{
                                        -webkit-animation-delay:-1s;
                                        animation-delay:-1s}
                                        .container1 .circle2{
                                            -webkit-animation-delay:-.9s;
                                            animation-delay:-.9s}
                                            .container2 .circle2{
                                                -webkit-animation-delay:-.8s;
                                                animation-delay:-.8s}
                                                .container3 .circle2{
                                                    -webkit-animation-delay:-.7s;
                                                    animation-delay:-.7s}
                                                    .container1 .circle3{
                                                        -webkit-animation-delay:-.6s;
                                                        animation-delay:-.6s}
                                                        .container2 .circle3{
                                                            -webkit-animation-delay:-.5s;
                                                            animation-delay:-.5s}
                                                            .container3 .circle3{
                                                                -webkit-animation-delay:-.4s;
                                                                animation-delay:-.4s}
                                                                .container1 .circle4{-webkit-animation-delay:-.3s;animation-delay:-.3s}
                                                                .container2 .circle4{-webkit-animation-delay:-.2s;animation-delay:-.2s}
                                                                .container3 .circle4{-webkit-animation-delay:-.1s;animation-delay:-.1s}
                                                                @-webkit-keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}
                                                                @keyframes bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}

</style>
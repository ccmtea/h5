<template>
    <div class="textOverflow">
        <examples name="文字截断">
            <div class="con">
                <div class="main">
                    from：constant.scss
                    <pre class="css" v-highlight>
/*   文字截断    start*/
/**
**.text-overflow-only 单行
**.text-overflow-odd  多行
**/
.text-overflow-only{
    width:100%;
    overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.text-overflow-odd{
    width:100%;
	display: box;
    line-clamp: 2;
    box-orient: vertical;
    overflow: hidden;
}
.
/*   文字截断      end*/
                    </pre>
                    ex:
                    <pre style="white-space: normal;">
&lt;div class="text-cut-off"&gt;视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。&lt;/div&gt;
                    </pre>
                    <div class="text-overflow-only">视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。</div>
                    <pre style="white-space: normal;">
&lt;div class="text-cut-odd"&gt;视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。&lt;/div&gt;
                    </pre>
                    <div class="text-overflow-odd">视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。视网膜屏幕（Retina Display）是一种具备超高像素密度的液晶屏，最初可以符合以上条件的屏幕可以使肉眼看不见单个物理像素点。S要达到真正的“视网膜显示”，它的每个像素点就要比现在小65%，也就是说苹果需要再将其分辨率提高3倍。</div>   
                </div>
            </div>
        </examples>
    </div>
</template>
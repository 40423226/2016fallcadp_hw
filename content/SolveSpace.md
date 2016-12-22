Title: SolveSpace
Date: 1111-02-22 22:22
Category: Misc
Tags: SolveSpace
Author: 40423226

<h2><a href="http://solvespace.com/">SolveSpace</a></h2>
<h2>SolveSpace 2D</h2>
<iframe src="https://player.vimeo.com/video/192920828" width="640" height="428" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p>2D成品</p>
<img src="../data/image/solvespace 2D.png" width="800" />

<h2>SolveSpace 3D</h2>
<iframe src="https://player.vimeo.com/video/192920873" width="640" height="428" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p>3D成品</p>
<img src="../data/image/solvespace 3D.png" width="800" />

<h2>Linkages</h2>
<iframe src="https://player.vimeo.com/video/195902223" width="640" height="428" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p>尺寸</p>
<img src="../data/image/linkages.png" width="800" />
<p>路徑</p>
<img src="../data/image/trace2.png" width="800" />
<p>Python3 平面四連桿機構模擬</p>
<canvas id="fourbar" width="600" height="400"></canvas>

<!-- 導入 Brython 標準程式庫 -->

<script type="text/javascript" 
    src="https://cdn.rawgit.com/brython-dev/brython/master/www/src/brython_dist.js">
</script>

<!-- 啟動 Brython -->

<script>
window.onload=function(){
brython(1);
}
</script>

<!-- 以下實際利用  Brython 畫兩條直線 -->

<canvas id="fourbar" width="600" height="400"></canvas>
<div id="container1"></div>
<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["fourbar"]
container1 = doc['container1']
ctx = canvas.getContext("2d")

fourbar_data = open("../data/solvespace/linkages.csv").read()
fourbar_list = fourbar_data.splitlines()
#container1 <= fourbar_list[0]
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 8 倍
ratio = 8
'''
ctx.moveTo(0, 0)
ctx.lineTo(0, 100)
ctx.moveTo(0, 0)
ctx.lineTo(100, 0)
'''
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

<h2>用SolveSpace把檔案存成html檔,並且更改成http設定,利用嵌入網頁的指令,把html檔案放進網誌裡面</h2>
<pre>&lt;iframe src="<u>檔案的相對位置</u>" width="800" height="600">&lt;/iframe></pre>
<iframe src="https://player.vimeo.com/video/194948275" width="640" height="347" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
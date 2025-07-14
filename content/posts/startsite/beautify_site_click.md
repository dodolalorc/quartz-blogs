---
title : '【网站美化】点击特效'
date : 2023-12-18T14:12:39+08:00
lastmod : 2023-12-18T14:12:39+08:00
draft : false
tags : 
    - 'JavaScript'
    - '美化'
    - 'Hugo'
    - 'Canva'
categories : 
    - '关于本站点的一些设置'
---

今天摸鱼把网站的点击特效做了QwQ，选用的效果是烟花（/逆飞的流星🎆🎆，主要摸索了如何在Hugo里添加JavaScript代码

# 添加js文件

这次用到的两个js文件在这里：

[anime.min.js](/js/anime.min.js)

[fireworks.js](/js/fireworks.js)

在`./static/`下新建一个`js`文件夹，文件夹下新建两个`js`文件，命名为`anime.min.js`和`fireworks.js`，然后将上面两个文件的内容粘贴进去。

# 引入js文件

在`./layouts/partials/extend_head.html`中添加如下代码：

```html
<style type="text/css">
.fireworks {
    position: fixed;
    top: 0;
    left: 0;
    widows: 100%;
    height: 100%;
    z-index:99999999;
    pointer-events:none;  /*这个样式可以解决正常点击事件不响应的问题*/
}
</style>
<canvas class="fireworks"> </canvas>
<script src="/js/anime.min.js" ></script>
<script src="/js/fireworks.js" ></script>

```














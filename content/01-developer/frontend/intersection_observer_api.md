---
title: Intersection Observer API 监听是否进入了可视区域
subtitle: 高效地监听一个元素是否进入了可视区域
date: 2025-09-17T17:53:56+08:00
lastmod: 2025-09-17T17:53:56+08:00
draft: false
authors: []
description: ""
tags: []
categories: []
series: []
hiddenFromHomePage: false
hiddenFromSearch: false
featuredImage: ""
featuredImagePreview: ""
toc:
  enable: true
math:
  enable: true
lightgallery: false
license: ""
---

# Intersection Observer API 介绍

Intersection Observer API 提供了一种**异步**观察目标元素与祖先元素或顶级文档视口（viewport）**交叉状态**（即“相交”）的方法。简单来说，它可以非常高效地**监听一个元素是否进入了可视区域**。

在它出现之前，我们通常通过监听  `scroll`  事件，然后频繁调用  `Element.getBoundingClientRect()`  来计算目标元素的位置来实现这个功能。这种方式是**同步**的，并且运行在主线程上，性能开销非常大，很容易造成页面卡顿。

Intersection Observer API 将这些工作交给浏览器原生处理，性能高效且使用简便。

## 使用场景

主要为了解决以下场景的性能和实现复杂度问题：

1. **图片或内容的懒加载**：当页面滚动到相应区域，才加载真实的图片或内容。
2. **无限滚动**：在用户滚动接近底部时，自动加载更多内容，无需翻页。
3. **曝光统计**：统计广告或某个内容是否被用户看到。
4. **启动动画**：当用户滚动到某个区域时，再播放动画，避免一开始就全部播放。

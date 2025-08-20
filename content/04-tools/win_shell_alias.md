---
title: 【todo】window shell 别名设置
subtitle: ""
date: 2025-08-21T02:05:47+08:00
lastmod: 2025-08-21T02:05:47+08:00
draft: true
authors:
description: ""
tags:
  - oh-my-posh
categories:
series:
hiddenFromHomePage: false
hiddenFromSearch: false
featuredImage: https://img.dodolalorc.cn/i/2025/08/02/688d1fcb646d1.png
featuredImagePreview: https://img.dodolalorc.cn/i/2025/08/02/688d1fcb646d1.png
toc:
  enable: true
math:
  enable: true
lightgallery: false
license: ""
---

# What

在 Windows 上使用的是 WSL2(fish)+power shell 组合，使用的是 [oh-my-posh](https://ohmyposh.dev/)。

可以通过这个命令得知当前的 shell 是什么：

```powershell
oh-my-posh get shell
```

PowerShell 有一个或多个配置文件（Profile），查看当前使用的配置文件：

```powershell
$PROFILE.CurrentUserCurrentHost
```

# 安装 posh-git

```powershell
PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force
```

导入模块：

```powershell
Import-Module posh-git
```

由于我们不希望每次打开新的 PowerShell 提示符时都必须手动执行上述导入模块，我们可以通过执行命令  `Add-PoshGitToProfile`  或编辑 PowerShell 配置文件脚本并添加命令  `Import-Module posh-git`  来做到自动加载导入

---
title: 🍎【doing】我的 mac 开荒手册
subtitle: 为 mac 电脑快速配置一套舒服的开发环境
date: 2025-08-01T23:54:00+08:00
lastmod: 2025-08-01T23:54:00+08:00
draft: false
authors: 
description: ""
tags:
  - "#Mac"
  - "#Git"
  - Item2
  - zsh
categories: 
series: 
hiddenFromHomePage: false
hiddenFromSearch: false
featuredImage: https://img.dodolalorc.cn/i/2025/04/26/680c5fafe06e9.png
featuredImagePreview: https://img.dodolalorc.cn/i/2025/04/26/680c5fafe06e9.png
toc:
  enable: true
math:
  enable: true
lightgallery: false
license: ""
---

# HomeBrew

`HomeBrew`是一款包管理工具，支持 Mac OS 和 Linux 系统，首先安装好 HomeBrew 可以方便我们获取其他所需要的软件。

官网访问：[Homebrew](https://brew.sh/)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 换源

如果官网的安装脚本总是失败，可以尝试换源（以清华源为例）：

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/bottles"

/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

更多选择可以在这里查询：[镜像助手](https://brew.idayer.com/guide/change-source/)

## 更新

```bash
brew update
```

# Xcode-select 安装命令行工具

在安装 Homebrew 时，也会附带下载 Xcode 命令行工具，如果没有安装 Xcode 命令行工具，可以运行：

```bash
xcode-select --install
```

这是一个轻量级的工具包，包含开发所需的基础命令行工具，但不需要安装完整的 Xcode（节省空间，约 1-2GB）

> [!abstract]- 部分列举
>
> - 核心编译工具
>   - `clangd`：xcode 默认编译器
>   - `swift`和`swiftc`：swift 语言编译器
>   - `ld`（链接器）和`ar`（静态库打包工具）
>   - `make`和`cmake`：项目构建工具
> - 调试与分析工具
>   - `lldb`：xcode 调试器的命令行版本
> - 版本控制工具
>   - **`git`**：代码版本管理工具（macOS 自带  `git`  但版本较旧，CLT 会更新到最新版）。
>   - **`svn`**：Subversion 版本控制工具。
> - 文档工具
>   - `header` 文件：C/C++ 标准库、系统框架的头文件（如  `stdio.h`、`Foundation.framework`）
>   - `man`文档：命令行工具的手册页（如  `man clang`）。
> - 其他实用工具
>   - `xcrun`：Xcode 工具链的调度命令（用于调用其他工具）。
>   - `sdkmanager`：管理 SDK 路径（如  `xcrun --show-sdk-path`）。
>   - `pkgutil`：软件包管理工具。

或许你也对[💻 常用 xcode 使用命令](/tools/xcode_commands)感兴趣。

# Git 环境设置

Mac 系统自带了 Git，或者在安装 XCode 时，也已经安装了 Git。

可以参考此文章获得更详细的配置：[🔑Git 环境配置和 SSH 公钥设置](/tools/git_settings)

---
title: 八股文常识篇
subtitle: ""
date: 2025-10-02T22:32:50+08:00
lastmod: 2025-10-02T22:32:50+08:00
draft: false
authors: []
description: ""
tags:
  - 前端八股文
  - Web前端
  - JavaScript
categories:
  - 在前端搬砖的日子里
series: []
hiddenFromHomePage: false
hiddenFromSearch: false
featuredImage: https://img.dodolalorc.cn/i/2025/10/03/68dec7ee1a1c1.png
featuredImagePreview: https://img.dodolalorc.cn/i/2025/10/03/68dec7ee1a1c1.png
toc:
  enable: true
math:
  enable: true
lightgallery: false
license: ""
---

## JavaScript 和 TypeScript

TypeScript 和 JavaScript 是两种常用的编程语言，它们的主要区别和优点如下：

| 对比项       | JavaScript                                                                       | TypeScript                                                                                                                 |
| :----------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **类型系统** | 动态类型语言，变量在**运行**时确定                                               | 静态类型语言，支持类型注解，类型检查在**编译**时进行。                                                                     |
| **编译**     | 直接由浏览器或 Node.js 执行，无需编译。                                          | 需要编译为 JavaScript 后才能运行。                                                                                         |
| **工具支持** | 工具支持较少，尤其在大型项目中。                                                 | 提供更好的开发工具支持，如代码补全、类型检查、重构等。                                                                     |
| 兼容性       | 所有 JavaScript 代码都可在 TypeScript 中运行。                                   | 编译后的代码与 JavaScript 完全兼容。                                                                                       |
| **学习曲线** | 学习曲线较平缓，适合初学者。                                                     | 需要掌握类型系统等额外概念，学习曲线稍陡。                                                                                 |
| **社区生态** | 社区庞大，资源丰富。                                                             | 社区增长迅速，尤其在大型项目中应用广泛。                                                                                   |
| **适用场景** | 适合小型项目或快速原型开发。                                                     | 适合大型项目，尤其是需要长期维护的复杂应用。                                                                               |
| **优点**     | 无需编译，开发流程简单。<br>学习门槛低，适合初学者。<br>社区资源丰富，生态成熟。 | 静态类型检查减少运行时错误。<br>更好的工具支持提升开发效率。<br>增强代码可读性和可维护性。<br>支持最新的 JavaScript 特性。 |
| **总结**     | 适合大型项目，提供更强的类型检查和工具支持。                                     | 适合小型项目或快速开发，学习成本低。                                                                                       |

## Vue2 和 Vue3 区别

**性能优化**

- **Vue 3**：通过重写虚拟 DOM 和优化编译器，性能显著提升，渲染速度更快，内存占用更少。
- **Vue 2**：性能较好，但不如 Vue 3。

**Composition API**

- **Vue 3**：引入了 Composition API，允许开发者按逻辑组织代码，提升复杂组件的可维护性。
- **Vue 2**：主要使用 Options API，代码组织方式相对固定。

**响应式系统**

- **Vue 3**：使用 `Proxy` 实现响应式系统，支持更多数据类型，性能更好。
- **Vue 2**：使用 `Object.defineProperty`，存在一些局限性，如无法检测数组和对象的变化。

**TypeScript 支持**

- **Vue 3**：内置 TypeScript 支持，类型推断更完善。
- **Vue 2**：对 TypeScript 的支持较弱，类型推断不够完善。

**Fragment 和 Teleport**

- **Vue 3**：支持 Fragment（多根节点组件）和 Teleport（将组件渲染到 DOM 其他位置）。
- **Vue 2**：不支持这些特性。

**全局 API 更改**

- **Vue 3**：全局 API 改为按需导入，减少打包体积。
- **Vue 2**：全局 API 通过 `Vue` 对象访问。

**生命周期钩子**

- **Vue 3**：部分生命周期钩子更名（如 `beforeDestroy` 改为 `beforeUnmount`），并新增了 `setup` 函数。
- **Vue 2**：使用传统的生命周期钩子。

**自定义渲染器**

- **Vue 3**：支持自定义渲染器，适用于非 DOM 环境（如小程序、Canvas）。
- **Vue 2**：不支持自定义渲染器。

**Suspense**

- **Vue 3**：支持 Suspense，用于处理异步组件加载。
- **Vue 2**：不支持 Suspense。

**打包体积**

- **Vue 3**：通过 Tree-shaking 优化，打包体积更小。
- **Vue 2**：打包体积相对较大。

Vue 3 在性能、开发体验和灵活性上都有显著提升，尤其是 Composition API 和响应式系统的改进。对于新项目，推荐使用 Vue 3；对于现有 Vue 2 项目，可以根据需求逐步迁移。

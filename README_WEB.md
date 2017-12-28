<!-- TOC -->

- [Angular.JS及CLI 前端项目搭建](#angularjs及cli-前端项目搭建)
    - [安装环境](#安装环境)
    - [快速上手](#快速上手)
        - [设置开发环境](#设置开发环境)
        - [创建新项目](#创建新项目)
        - [运行项目](#运行项目)

<!-- /TOC -->
# Angular.JS及CLI 前端项目搭建

- 项目环境: [node.js](https://nodejs.org) （最好安装LTS版本）
- 开发工具：Visual Studio Code
- 必备技能：HTML, JavaScript, CSS 
- 涉及知识: ES6, TypeScript, Angular.JS 5x
- 软技能：npm， webpack, cmd命令

## 安装环境
安装`node.js`和`Visual Studio Code`去官方下载；安装好node.js，这里我们主要用它带的npm。
`node.js`安装成功可以在命令行用`node -v`或者`npm -v`查看。

`Visual Studio Code`安装成功后需要安装几个必须的插件, `Ctrl+Shift+x`打开插件列表，搜索以下插件进行安装：
- Debugger for Chrome 用于调试anguar.js项目
- Angular VS Code TypeScript and HTML Snippets
- TSLint
`vs code`集成了终端，`Ctrl+~`打开终端，如果打开说明快捷键冲突，在 菜单`查看`中打开。

## 快速上手
通过Angular.js官方提供的脚手架Angular CLI可以创建项目、添加文件以及执行一大堆开发任务，比如测试、打包和发布。

### 设置开发环境
通过`npm`全局安装Angular CLI
``` git
npm install -g @angular/cli
```
安装成功可以通过`ng -v`查看版本号

### 创建新项目
``` git
ng new <项目名称> //这里名称有一定约数必须字母开头
```
### 运行项目
进入项目根目录, 用以下命令启动项目
``` git 
ng serve 
```

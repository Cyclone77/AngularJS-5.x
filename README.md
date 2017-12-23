<!-- TOC -->

- [Angular.js](#angularjs)
    - [架构概览](#架构概览)
        - [模块](#模块)
        - [Angular 模块库](#angular-模块库)
        - [组件](#组件)
        - [模板](#模板)
        - [元数据](#元数据)

<!-- /TOC -->

# Angular.js

## 架构概览

### 模块
- Angular 应用是模块化的，并且 Angular 有自己的模块系统，它被称为 Angular 模块或 NgModules。
- 每个 Angular 应用至少有一个模块（根模块），习惯上命名为AppModule（用`ng new <项目名称>`创建生成后只有一个根模块）。
- Angular 模块（无论是根模块还是特性模块）都是一个带有@NgModule装饰器的类。

@NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：

- declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
- exports - declarations 的子集，可用于其它模块的组件模板。
- imports - 本模块声明的组件模板需要的类所在的其它模块。
- providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
- bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。

### Angular 模块库
- Angular 提供了一组 JavaScript 模块。可以把它们看做库模块。
- 每个 Angular 库的名字都带有@angular前缀，用npm管理。

例如，象下面这样，从@angular/core库中导入Component装饰器：
``` js
import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
```
在上面那个简单的根模块的例子中，应用模块需要BrowserModule的某些素材。要访问这些素材，就得把它加入@NgModule元数据的imports中，就像这样：
``` js
imports:      [ BrowserModule ],
```

### 组件

> 组件负责控制屏幕上的一小块区域，我们称之为视图。

### 模板

模板以 HTML 形式存在，告诉 Angular 如何渲染组件。

### 元数据 

元数据告诉 Angular 如何处理一个类。

## 模版与数据绑定

### 内联 (inline) 模板还是模板文件？
通过给`@Component`添加`template`或者是直接在组件对应的HTML添加模版文件，无论用哪种风格，模板数据绑定在访问组件属性方面都是完全一样的。

`template`的方式
``` js
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
```
Angular CLI 提供命令建立组件
``` git
ng generate component components/hero
或
ng generate component components/hero -it //直接建立不带html的内联模版
```

### 使用构造函数还是变量初始化？
``` js
export class AppComponent {
  title: string;
  myHero: string;
  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}
```

### 使用ngFor显示数组属性

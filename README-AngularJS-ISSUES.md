## from中不能使用ngModel
> 如果使用ngModel要用ngForm来组合使用，具体看：[文档](https://angular.cn/api/forms/NgForm)

## ng build --prod报错
`ng build`打包没有问题，但是`ng build --prod`打包报错（非语法错误）；
是因为cnpm安装的依赖包版本不是最新的；要用npm安装。

## Angularjs cli命令建立组件
Angular CLI 提供命令建立组件
``` git
ng generate component components/hero
或
ng generate component components/hero -it //直接建立不带html的内联模版
```
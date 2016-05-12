title: angular细节
date: 
tags: angular 细节注意
categories: angular
description: 
---
ng-init  用于初始化变量
ng-model  将输入的值绑定到变量上，绑定应用程序数据到HTML控制器（input，select，textarea）的值，
ng-app  定义应用程序
ng-bind和表达式   将经过处理的数据绑定到HTML
ng-repeat 循环数组，会重复一个HTML元素
<ul>
	<li ng-reapeat = "x in names">
		{{ x }}
	</li>
</ul>
*names*是一个数组


angularJS 模块（Module）
angularJS 控制器（Controller）

var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
	$scope.firstName = "Jone";
	$scope.lastName = "Doe";
})

1. AngularJS完美支持数据库中的CRUD应用程序
2. 创建自定义指令 （使用.derective函数来添加自定义的指令）
3. 使用驼峰法myWord来命名一个指令，但在使用时需要使用中划线来分割my-word




###$scope
视图引用了controller中写在$scope 对象上的属性值

### 持续显示loadDep:... ###
这种状况是因为网速过慢，而不能下载依赖。
### service ###
angular的service在应用的整个生命周期中存在，可以用来共享数据；不只是`$scope` 可以共享数据。
### provider ###
在angular中，service、provider、factory本质上都是provider。
provider是一种模式，是“策略模式”+“抽象工厂模式”组合
### 单例是什么？？？ ###
### $filter ###
$filter 是用来进行数据格式化的。
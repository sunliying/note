title: angular简介
date: 
tags: angular 特点简介
categories: angular
description:
---
angular是一个流行的前端框架，其宗旨在于弥补HTML在构建动态应用上的不足，传统的HTML实现的是静态的模板，想要构建动态的应用需要使用DOM操作使其具有动态效果，而angular的目的就是使HTML不需要DOM操作就具有动态效果，从根本上改变HTML。   
angular在实现方式上有几大特点：  
   
**1. 使用MVC模式**   
**2. 双向数据绑定**    
**3. 指令系统**
**4. 表达式**
### angular中的MVC是怎样体现的 ###

### angular实现双向数据绑定 ###
双向数据绑定指的是当视图更新时模型自动改变，当模型改变时视图自动更新，那angular又是怎样实现双向数据绑定的呢
数据到表现的绑定，是使用`{ {} }`绑定的
模板到数据的绑定，是通过`ng-model`来实现的

### angular 中的几个重要方面 ###

- 双向数据绑定
- 指令
- 路由
- 过滤器

### angularjs的启动方式 ###

- 使用ng-app建立一个模块启动

	    <body ng-app="app" ng-controller="myCtrl">
			<div class="contain_box">
				myname:{{name}}
			</div>
		</body>
- 手动启动

		var myapp = angular.module("myapp",[]);
		myapp.controller("myCtrl",["$scope",function($scope){
			$scope.name = "sunly";
		}]);
		angular.element(document).ready(function(){
			angular.bootstrap(document,['myapp']);
		});

指定在文档加载完毕之后，从document的myapp模块开始启动。   

- ng-app可以有多个，只要不嵌套就可以，是并行执行的，但是只有第一个可以使用ng-app自动启动，其余的都要使用手动启动，一般不这样做。 

### 绑定jQuery ###
angular.element是等于外部的jQuery的，若没有导入外部的jQuery，则被赋值为angular内部定义的jqlite
### 发布内部的API到angular全局对象上###
 通过这个函数publishExternalAPI(angular) 发布API到angular全局对象上，然后加载` setupModuleLoader`我们定义的模块的基本方法和属性，然后再把angularjs的内置模块全部加载。
   
angular.isArray...    
angularbootstrap...    
等等，是定义在angular这个全局对象上的

### 模块 ###
定义完了模块之后，在模块中的一些属性和方法实例   
app.controller    
app.service    
app.filter   
等等  

### angular.bootstrap ###
模块启动时，首先创建一个模块数组，推入provider，推入ng开头的模块，并可手动启动，然后创建并返回一个注射器

    angular.bootstrap(element,module,config)
开始启动，使用compile开始编译





## angular Dependency Injection ##

- 创建可复用代码
- 解决依赖关系
- 将他们提供给别的模块使用
























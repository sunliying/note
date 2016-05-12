title: 实现一套完整的angular应用程序
date: 
tags: angular应用程序构建框架
categories: angular
description: 本文描述了如何构建一个简单地angular应用
---

- 使用客户端数据绑定去构建动态视图，数据修改之后将立刻响应给客户。   
- 使用$scope全局对象、ng-model、双花括号、ng-bind以及实现双向数据绑定    
- 使用$http service 对服务器端数据进行读取     
- 使用ng-route，实现路由配置    
- 使用ng-animate，实现动画效果   
- 通过Karma进行单元测试   
- 使用Protractor实现终端测试   

### 依赖注入的几种方式 ###
 为了使压缩js代码时注入的依赖不发生错误，最好单独列出所注入的依赖   
1 create a `$inject` property 声明式注入


    function personsCtrl( $scope,$http){...}
	personCtrl.$inject = ['$scope','$http'];
	personApp.controller('personCtrl',personCtrl);
2 provide the construction function inline as an anonymous function  内联式注入   
	
	personApp.controller('personCtrl'，['$scope','$http',function($scope,$http){}]);

### 5. 插入地址 ###
使用ng-src指令，能够避免在angular尚未被解析完成之前浏览器错误的解析地址。
### 6. create a layout template, and write routings  ###

**ng-route，ng-animate，ng-resource**都不在angular core中，都是单独的，需要单独的引入；

### 路由设置 ###

1. **路由引入并没有设置ng-controllor???**；
2. 使用index.html 作为layout template
3. 在partail里面写入不同的view
4. 在app.js中配置所需依赖和路由
5. 在controllers.js中配置控制器
6. **使用routeParams使得相应的链接对应相应的远程数据**
7.  the future object and data-binding
8.  当多个controller里面有相同的代码时，我们需要把它凑成一个服务service。     

angular angular-route angular-resourse angularfire firebase

ng-view 来引入页面






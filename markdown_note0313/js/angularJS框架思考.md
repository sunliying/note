title: angularJS框架思考
date: 2017-04-22 18:33:28
tags: 框架
categories: angularJS
description:
---

## angularJS框架思想 ##

学习框架，要看他能解决什么问题，首先要知道你的网站都没面临什么问题，相应的去寻找解决方案；

学习框架，他每提供的一个方法，都要思考，若是没有框架，我们该怎么解决，有了这些方法，他又是怎么解决的，有什么优势。

1. angularjs 输入值，显示值 的方法
2. angularjs 触发事件，导致dom元素数据改变
	1. 第一种可以采用事件分发和广播，(数据传递，数据显示）事件发布和事件订阅
		1. 事件是解耦良器，angularjs提供了很方便的事件机构。
		1. 自身不需要接收事件，但是兄弟无法接收；
	2. 第二种可以触发事件就直接用$scope来改变需要改变的DOM元素或属性；
	3. 事件种类

			ng-change
			ng-click
			ng-dblclick
			ng-mousedown
			ng-mouseenter
			ng-mouseleave
			ng-mousemove
			ng-mouseover
			ng-mouseup
			ng-submit



## angularJS中的MVC ##

自称是MV* （whatever）；

## angularJS的优势 ##

1. 双向数据绑定
2. 替代DOM操作，更加简洁，并节省代码量
3. 使用HTML模语法

**参考资料：**     
     
1. angularJS事件[http://www.angularjs.cn/A08c](http://www.angularjs.cn/A08c "angularJS事件")    
2. ANGULAR中作用域的生命周期[http://hao.jser.com/archive/14543/](http://hao.jser.com/archive/14543/)  




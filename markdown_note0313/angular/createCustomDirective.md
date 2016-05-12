title: angularjs实现自定义指令
date: 
tags: angular directive
categories: angular
description: 
---

angularjs中的指令系统与web组件有些许类似，自定义指令，使HTML更加的语义化。想象一下，在HTML中引入一个特定标签就能够完成一个你的项目中需要的一个功能，像是一个日期选择器标签，一个计算器标签，是不是很酷！
指令系统是angular中的一个重要的特点，可以构建自定义的HTML标签，使元素拥有特定的行为。本文简单地总结一下如何使用angular实现自定义标签；

### 指令的引入 ###
指令的引入是有多种方式的：

- 作为标签
- 作为标签属性
- 作为类
- 作为注释  （不常用）

指令返回的方式是根据返回对象中的 `restrict`来控制的；
### 指令的工作过程 ###

- 浏览器解析DOM结构
- ng引入，浏览器将ng交给$compile 处理
	- 找出DOM中的所有变量占位符
	- 匹配DOM中包含的所有指令引用
	- 将指令关联到DOM
	- 将关联到DOM的指令按照权重排序
	- 执行指令中的compile函数（改变DOM结构，返回link函数）
- 得到的所有的link函数组成列表作为$compile函数返回。
- 传入具体的$scope调用link函数。
- DOM结构中的指令被处理，正常显示
### 指令的返回结果 ###
定义一个完整的指令应该返回一个对象，这个对象清楚地定义了这个指令所指的这个标签的特点。   
其中应该包含一个link方法，是一个function，也可以单独返回这个function。
这个对象应该包含如下属性和方法：

- name
- priority
- terminal
- scope
- require
- controller
- restrict
- template
- templateUrl
- replace
- transclude
- link
- compile


### **自定义指令的基本形式：** ###

    <body>
	<div ng-app = "myApp">
        <input ng-model = "name"></input> 
        <smile color='red'>the name is : {{ name }}</smile>  
    </div>
	<script type="text/javascript">
	    var myapp = angular.module('myApp',[]);
	    myapp.directive("smile",function(){
	        var func = function($scope,$element,$attrs){
	            $scope.name +="*_*";
	            $element.css('color',$attrs.color);
	        };
	        return {
	            restrict: "EA",
	            link: func
	        };
	    });
	    // angular.bootstrap(document,['myApp']);
	</script>
	</body>

注意：在没有定义controller控制器时，是不能在HTML中写`ng-controller`的，这样是会出错的。

上面例子中，color是在属性中固定好，不能改变的，我们可以使用`{ { } }`表达式变量根据输入的变量改变标签属性值，使用angular中的$watch 来监听属性值**    
如下，使上例中的color属性值随输入改变：

    <body>
	<div ng-app = "myApp" ng-controller="myCtrl">
        <div><label>请选择文本颜色：</label><input type="color" ng-model="colorist"></input></div>
        <div><label>请输入你的名称：</label><input ng-model = "name"></input> </div>
        <div><label>内容如下：</label><smile color='colorist'>the name is {{name}},and the color is {{colorist}}</smile></div> 
    </div>
	<script type="text/javascript">
	    var myapp = angular.module('myApp',[]);
	    myapp.directive("smile",function(){
	        var func = function($scope,$element,$attrs){
	            $scope.name +="*_*";
	            $scope.$watch($attrs.color,function(newColor){
	                $element.css('color',newColor);
	            });
	            
	        };
	        return {
	            restrict: "EA",
	            link: func
	        };
	    });
	    // 在这里，color的属性值colorist就相当于一个变量了，,改变将时刻被监听
	    myapp.controller('myCtrl',function($scope){
	        $scope.colorist="black";
	        $scope.name="sunly";
	    });
	    angular.bootstrap(document,['myApp']);
	</script>
	</body>

上例中使用$scope的colorist变量将输入值和smile指令的属性值相连，并使用$scope.$watch 监听属性值的变化，更改text的颜色。

### compile，link，controller三个函数执行的顺序 ###
由上面指令的执行过程我们大概了解到了angular中指令是怎么工作的，浏览器获取HTML模板资源，解析DOM结构，然后将所有的angular指令的模板交给compile函数处理，浏览器执行compile函数，然后返回link函数组成的列表，然后执行的是controller中的内容，最后执行link函数。从下面的例子执行过程我们可以看出来：

        var app = angular.module('Demo', [], angular.noop);

	    app.directive('bbb', function() {
	        var func = function(scope,element, attrs) {
	        	//首先执行
	        	console.log(scope);
	            return function(scope) {
	            	// 第三执行
	                console.log(scope);
	            };
	        };
	        return {
	            compile: func,
	            restrict: 'A'
	        };
	    });
	    app.controller('TestCtrl', function($scope) {
	    	// 第二执行
	        console.log($scope);
	    });

### scope ###
指令返回的对象里面有一个scope属性指的是这个指令的作用域，有三种取值：    

- true
- false
- { } object

scope的默认值为false，指link函数接受的scope为节点所在的scope。     scope设置为true指的是link函数的第一个参数，还有controller参数中的$scope,是节点所在的scope的`child scope`，，继承原来的scope。并且，若是一个节点中有很多指令，只要其中一个指令是true的设置，其他的指令都会受到影响。   
当scope为`{}`时，link函数接受个与外界隔离的scope，这个scope可以有很灵活的定义方式。   
下面看一个例子：  

        app.directive('bbb', function() {
        var func = function(element, attrs) {
            return function(scope) {
            	// undefined
                console.log(scope.name);
            };
        };
	        return {
	            compile: func,
	            restrict: 'A',
	            scope:{}
	        };
	    });
	    app.controller('TestCtrl', function($scope) {
	    	$scope.name="jack";
	    	// jack
	        console.log($scope.name);
	    });

scope为{ }时定义可以很灵活的，可以自定义属性，还可以与指令的属性相联系，下面我们来看一下 `isolate scope`。
### isolate scope ###
scope被重新定义后，即在compile中返回`isolate scope`之后，返回的template中是不允许使用原来定义的scope和其定义的变量的，这就是所谓的‘隔离’。如下：

    <head>
    <script src="./node_modules/angular/angular.min.js"></script>
    <script type="text/javascript">
        (function () {
            var app = angular.module('ngCustomDirectiveTest', []);
            app.controller('myController', ['$scope', function ($scope) {
                $scope.name="jack";
                $scope.jack={
                    name: "jack"
                };
            }]);

            app.directive("studentInfo", function () {
                return {
                    restrict: 'E',
                    scope: {newname:"=info" },
					//name不能显示
                    template: '<p>name: {{newname.name}}</p><p>name: {{name}}</p></div>'
                };
            });
        })();
    </script>
	</head>
	<body ng-app="ngCustomDirectiveTest">
	    <div ng-controller="myController as myCtrl">
	        <student-info info="jack"></student-info>
	        <p>name:{{name}}</p>
			//newname.name不能显示
	        <p>newname.name:{{newname.name}}</p>
	        <p>jack.name:{{jack.name}}</p>
	    </div>
	</body>

自定义指令返回的template中使用的scope都是返回的scope中定义的属性变量。如其所示，返回的template中是不能引用$scope 对象中的变量的，但是在HTML代码中是可以使用的，同样，在HTML源代码中也只能使用原scope中的$scope 对象变量，而不能使用compile函数返回的scope中的变量。   
隔离使自定义的directive标签与外界隔离，防止定义一个公共模块时，在不同的Controller中使用    
但是，自定义指令中的scope对象中的变量也是可以与外界相联系的，使外界的变量与标签内的属性相联系，angular引入如下机制:     
###'=attr' , '&attr'

我们来说一下`&attr`，先看一个例子：

    
### attributes ###
节点属性被包装之后会传给compile和link函数，在这里，我们可以得到节点的引用，可以操作节点属性或者为节点属性注册侦听事件。
attributes对象包括以下属性和方法：

- $element  属性所在节点
- $attr (object)所有的属性值
- $normalize 名字标准化的函数
- $observer 属性监听函数
- $set   设置节点属性的函数

**为什么会产生标准化属性名呢**     
在HTML中 属性值是不区分大小写的，但是在angular中标准是区分大小写的，所以在HTML中采用`ng-model`这种写法，在属性转换时，在进行标准化。

    
参考资料：    
【1】[https://checkcheckzz.gitbooks.io/angularjs-learning-notes/content/chapter18/18-2.html](https://checkcheckzz.gitbooks.io/angularjs-learning-notes/content/chapter18/18-2.html)     
【2】[http://www.cnblogs.com/wushangjue/p/4508764.html](http://www.cnblogs.com/wushangjue/p/4508764.html "angular自定义指令")
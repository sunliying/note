# angular-ui-router #

in this section, I will talk about angular-ui-router

### 1. 注入依赖 ui-router ###

	 	var myApp = angular.module('myApp', ['ui.router']);

###2. 定义状态        
定义状态的对象是 `$stateProvider`,所有的状态定义放在模块的config属性中；

		myapp.config(function($stateProvider){
			$stateProvider
			.state('root',{})
			.state('course',{});
		})
### 3. 转换状态`state.go`
             
		$state.go(to [, toParams] [, options])
the `to` argument will be transitioned to a absolute or relative path;    
if the path is with a start of ** "." or "^" ** , then it is relative ,or it is absolute.         
the`toParams` is an object map,which will be send to state,will popular `$stateParams`      
参数会被发送给指定的state，并生成相应的 `$stateParams`      

	1. parameter Inheritance;
	2. works between commen ansestor states;

使用这种转换方法会默认的生成以下option

		{ location: true, inherit: true, relative: $state.$current, notify: true }
### 4. `$state.transitionTo` ###

		$state.transitionTo(to,[,toParams][,options])



change the state to the child or parent or sibiling.  

### 5. `$state.includes`    ###

		$state.includes(statename,[,params])
a method to determine if the current state is equal to or is a child of the statename;        
this is an object which can test the arguments that the current state has;


#### 6. state使用和嵌套 ####

nest state     
**dot notation**

		$stateProvider
		  .state('contacts', {})
		  .state('contacts.list', {});

**stateHelper module**     
需要单独安装和注入依赖[https://github.com/marklagendijk/ui-router.stateHelper](https://github.com/marklagendijk/ui-router.stateHelper)

**使用parent属性构建嵌套**          
parent属性的取值有两种类型： `string`和`object`      

定义的时候写上parent属性就行了
### 状态顺序和定义 ###

先找到父级state然后在定义子集，如果没有父级，则会忽视子状态，所以一定要定义父级state，另外，不能有两个同名的状态，除了利用点记法定义的方式。

### state中的属性 ###

- name: 
- url（若不加这个属性，因为已定义相应的路由，会正常显示，但是显示的选项不是以链接的形式给出的）
- template
- templateUrl
- controller
- parent
- children (an array)
- views （views和resolve不能共存，resolve不能用于有多个视图的状态）
- resolve（定义在resolve中的属性和方法就像原型链中的原型继承一样，可以被重写）
- data

### 子状态的继承方式 ###

1. 通过`resolve`
2. 自定义`data`属性



## 注意 ##

1. 不论用何种方式定义路由，属性`ui-sref`都要从顶级state写到当前state
2. 不能在html中定义没有定义的controller；




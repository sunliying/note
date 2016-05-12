title: js精粹总结
date: 2016-03-06 09:51:46
tags: js语法
categories: JavaScript
description:
---
1. js本身的设计上也有一些不合理的地方，在使用时也要注意定义自己使用的子集。
2. 对于js中alert传入的参数是一个字符串，若传入的是一个对象方法并返回相应的结果，则返回
3. js中对于DOM操作一般都用等号，像是innerHTML 或者设置样式，而在jQuery中一般使用的是一个方法并传入参数。


### 正则表达式 ###

### 闭包的形成 ###
闭包形成的根本原因是由于JavaScript中的function是一个对象，而**函数名实际上指的是指向函数对象的指针，而并不是函数本身**，所以，函数返回函数体内部定义的方法共外界使用，内部关联的变量和函数并不会被回收，返回的是一个指向返回的函数的引用，而并不是函数本身，函还存在于其定义时的词法作用域之内，因此导致闭包的形成。



1. 使用style获取高度和使用clientHeight获取高度的区别。如果元素的高度不是在css中定义的。

	document.getElementById('shut').style.height
	document.getElementById('shut').clientHeight

了解获取元素宽高属性的方式，还有css定义的属性的方式。

	window.innerHeight
	window.innerWidth

## Array-like and Array in JavaScript ##
（1）类数组对象可以使用call()或apply()进行对象冒充，从而达到使用原生数组方法的目的。
（2）类数组对象可以通过一定操作转换成为数组，不过会丢失本身作为对象自带的其他属性和方法。
	
		Array.prototype.slice.call(arguments,0);
		Array.apply(null,arguments);  

[http://bfy0412.com/238.html](http://bfy0412.com/238.html)                                      
[http://web.jobbole.com/85129/](http://web.jobbole.com/85129/)                 
[http://www.jeffjade.com/2015/11/02/2015-11-02-likeArray-borrow-ArrayFun/](http://www.jeffjade.com/2015/11/02/2015-11-02-likeArray-borrow-ArrayFun/)                
[http://blog.csdn.net/maijunjin/article/details/8923643](http://blog.csdn.net/maijunjin/article/details/8923643)

# Object #
----
object内部的属性有两种类型，只在js内部才使用的特性，描述了属性的各种特征： 
   
- 使用者是JavaScript引擎，在javaScript中是不能直接访问的。
- 两种属性： 数据属性和访问器属性
- 数据属性的特性：
	- Configurable（一旦设置，所有特性都不可更改包括自己）
	- Emumerable（可枚举）
	- Writable
	- Value

- 访问器属性的特性：
	- Configurable
	- Emumerable
	- Set
	- Get

- 修改属性默认的特性，可以使用 Object.defineProperty()和Object.defineProperties()方法
- 在正常设置对象属性的时候，数据属性前三个特性的设置都为true，当使用上述函数定义的时候，会使得出定义之外的特性的默认值设置会false。
- 访问器属性的前两个属性的默认值是true。
- **访问器属性设置的常见方式是设置一个属性的值会导致其他属性发生变化。**

**读取属性的特性**    
使用Object.getOwnPropertyDescriptor()的方法，可以取得给定属性的描述符。



## javascript 中的对象引用和赋值 ##

[http://www.cnblogs.com/wshiqtb/p/3479963.html](http://www.cnblogs.com/wshiqtb/p/3479963.html)     


## 函数调用模式对this值的影响 ##

**方法调用模式**  
         
- 当一个函数被保存为对象的一个属性时，称为一个方法，当方法被调用时，this被绑定到该对象。
- 使用这种方法调用是可以使用this访问自己所属的对象，从对象中取值并且对对象进行修改。 
- this到对象的绑定发生在调用的时候；
- 通过this取得对象上下文的方法称为公用方法。
                    
**函数调用模式** 
    
 - 本身是一个函数的形式进行调用则this会被绑定到全局对象上；
 - 有一个简单的解决方法在外层函数（应该是对象的一个方法）中，将this赋值给一个变量that，在内层函数中调用that，这个that就指向外层函数的this值，即创建它的函数的this变量；

		var myObject = {
			value: 3,
			add: function(inc){
				this.value += (typeof inc ==='number')?inc:1;
				
			}
		};
		myObject.double = function(){
			var that = this;
			var helper = function(){
				that.add(9);
			};
			helper();
		};
		myObject.double();
		console.log(myObject.value);

**构造器调用模式**       
      
- 如果在一个函数前面带了new来调用，那么就会创建一个新对象；
- 构造函数的__proto__属性以及经此构造函数创建的对象的原型对象（__proto__所指）都指向这个新对象
- 另外，这个新对象和所有经此构造函数构造出来的对象都有一个constructor属性指向这个构造函数

		var People = function(string){
			this.name = string;
			console.log(this);   // People
			console.log(this.__proto__); 
			console.log(this.__proto__.constructor);
		};
		People.prototype.get_name = function(){
			return this.name;
		};
		var person = new People('sunliying');
		console.log(person.name); // sunliying
		console.log(person.constructor);
		console.log(person.__proto__);
- 还有，注意防止重写原型对象；重写之后指针的指向需要搞清楚      
- 虽然定义的是prototype，但是获取原型对象用的却是`__proto__  `     
**apply调用模式**         

- 由于js中函数是对象，所以函数也可以有方法；
- apply方法接受两个参数，第一个是要绑定给this的值，第二个是一个参数数组；
- 使用apply的对象应该是一个函数或方法；


### 函数传参 ###

函数传递参数有两种类型，一种是值传递，一种是引用类型，js中的引用类型Array，Object和使用new构造的的引用类型（String等）都是引用传递，内部操作会影响外部的值；
### 函数作用域 ###
var function scope
let block scope
### 函数中的数 ###
Math内置对象的使用
js中的数都是


























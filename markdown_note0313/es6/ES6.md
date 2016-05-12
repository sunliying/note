# es6入门 #

### Generator函数 ###
是一个内部状态的遍历器，每调用一次，内部状态就会发生一次改变。generator的目的就是能够完全控制内部状态的变化，一次遍历这些状态。  

### 特点 ###

- 每一个function关键字后面都有一个*号
- 函数体内使用yield 语句定义遍历器的每个成员。

generator的本质，就是提供一种可以暂停执行的函数。   
相当于断点设置。

### promise ###

ES6提供了原生的Promise对象，Promise对象代表了未来某个将要发生的事件（通常指一个异步操作），使用Promise对象，可以将异步操作以同步操作的流程表达出来。  
Promise对象提供了一套完整的接口，可以更加容易的控制异步操作，避免了层层嵌套的回调函数。              
ES6的promise对象是一个构造函数，用来生成Promise实例。
## 变量和作用域 ##

- let
- const
- {}
- 解构赋值
	- 嵌套
	- 默认值
	- 对象的顺序无关
	- 不能解构赋值已声明的变量
	- 用途
		- 函数返回多个值
		- 交换变量的值
		- 多个参数使用对象传递不易出错，无关顺序


## 数组 ##

### 数组的扩展 ###

### **Array.from()** ###

Array.from() 的作用：将两类对象转换成真正的数组

- Array-like object    
- 可遍历的对象，**包括ES6 新增的Set和Map结构**

		Array.from(p).forEach (function(p){
			console.log(p);
		})   

Array.from() 接收第二个参数，类似于数组的
Map 方法，用来对每个元素进行处理。

		Array.from(array-like, x=>x*x)

**Array.of()**将一组数值转换成数组。


**entris(),keys(),values()**用于遍历数组。返回一个遍历器，可以用for…of…循环进行遍历。
分别对应键值对，键值名，键值


### 数组推导 ###

通过现有数组生成新的数组。

- 通过for…of…循环+条件判断返回值可以代替数组原生的map和filter方法。
- 在数组推导中，还可以有多个for循环，这样会生成相应的笛卡尔积。
- 字符串也可以视为数组，所以字符串也可以直接用于数组推导；
- 数组推导的方括号构成一个单独的作用域，在其中声明的变量类似于使用let语句声明的变量；
- 新数组会在内存中直接生成，若数组很大，则非常的消耗内存。

### Array.observe(),Array.unobserve() ###
用于监听数组的变化，并返回指定的回调函数

## 对象 ##

### Object.is() ###
接收两个参数，比较两个值是否严格相等，与严格比较运算符行为基本一致，但是对于+0，-0，NaN的处理不同。
### Object.assign() ###
用于将源对象上所有可枚举的属性复制到目标对象

- 第一个参数是目标对象
- 之后的参数都是源对象
- 目标对象和源对象上有同名的属性，则后面的属性会覆盖前面的属性。

### 关于原型属性和方法###
**`__proto__`**          
用于读取或者设置当前对象的prototype对象，替代了Object.create()生成新对象的方法；   
**`Object.getPrototypeOf()`**           
两个参数，对象本身和其原型，用来设置对象的原型对象        
**`Object.setPrototypeOf()`**             
用来读取对象的原型对象       


### 增强的对象写法 ###
ES6允许直接写入变量和函数，作为对象的属性和方法；键值名就是变量名，键值就是变量的值，可用于函数返回多个变量放在一个对象中。

ES6允许定义对象时用表达式作为对象的属性名，要将表达式放在方括号内；

### Symbol ###
ES6引入了一种新的**原始数据类型Symbol**，通过Symbol函数生成

	var symbol = Symbol("test");
	symbol.name
	// test
	typeOf symbol
	// "symbol"


使用Symbol函数生成Symbol数据类型不能使用new命令，因为生成的Symbol是一个原始类型的值，而不是对象。   

特点： 

- 传入名称作为相应symbol变量的name属性值；
- 每一个生成的symbol都是不相等的；基于这个特性，Symbol类型适合作为标识符，用于对象的属性名。保证属性名之间不会的发生冲突；若一个对象有对个模块构成，就可以保证不会出现同名的属性。
- Symbol类型作为属性名，是可以被遍历的；
- 定义对象的Symbol属性如下： 

		var a = {};
		var mySymbol = Symbol();
		a[mySymbol] = "sun";
		//or in this way. 这样配置的属性是不可删除，不可更改，不可枚举的
		Object.defineProperty(a , mySymbol, {value: "sun"});

### Proxy ###
即在访问目标对象之前架设了一层拦截函数，外界对于该对象的访问都必须要经过这一层的拦截，可以被过滤和改写；

- 参数： 代理的目标对象， 拦截函数；
- 拦截函数有一个get方法；用来拦截对目标对象的访问请求，get方法的两个参数分别是目标对象和要访问的属性
		
		var person = {
			name: "sun"
		};
		var proxy = new Proxy(person,{
			get: function(target,property){
				if (property in target){
					return target[property];
				}else{
					throw new ReferenceError("something wrong!!!");
				}
			}
		})

### 对象监听  Object.observe()  Object.unobserve() ###
**并不属于ES6 的内容，而是属于ES7**
一旦监听对象发生变化，就会触发回调函数。


## 函数 ##

### 参数设置 ###
- ES6允许为函数的参数设置默认值；
- 形参传递的时候设置其默认值；
- 带有默认值的参数被视为可选参数
- 不带默认值的参数被视为必须参数

**rest参数**  
形式：` ...变量名`

- rest参数搭配的变量是一个数组，可以替代arguments类数组对象了
- 这个变量会将多余的参数放在数组中；即将逗号分隔的参数序列转换成数组
- 另外，这个变量必须在参数的最后一个；

		function push ( ...items){
			let sum =0;
			for (var val of items){
				sum += val;
			}
			return sum;
		}
		push(1,2,4,7);

**扩展运算符**

- spread  
- 形式：` ...`
- 相当于rest参数的逆运算，将一个数组转换成逗号分隔的参数序列；
- 该运算符主要用于函数调用

		function add(a,b){
			return a+b;
		}
		var number = [2,8];
		add(...number);

**总之**

- 扩展运算符加上后面的参数总体表示一个参数序列；     
- 扩展运算符后面的参数表示一个数组；
- 所以，数组与参数之间的转换就变得容易多了
- 另外，扩展运算符的形式还可以用于对数组的赋值；

### 箭头函数 ###

形式如下：
	 
	var sum = (num1,num2) => {return num1+num2;}

- 等号后面是参数，箭头后面是返回值；
- 参数太多需要用括号括起来，
- 对于返回值，由于花括号被解释为代码块，所以当返回是一个对象的时候，必须在对象外面加上括号；
- 箭头函数可以简化回调函数
- 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象
- 不可以当构造函数
- 没有arguments对象
- this在箭头函数中被绑定，不能使用call(),apply(),bind()这些方法改变this的指向；

内部函数this指向window：

		var person1 = {
			name: "sunly",
			say_name : function(){
				console.log(this); //person1
				var change_name = function(__name){
					console.log(this); //window
					this.name = __name;
				};
				change_name("sunliying");
				return this.name;
			}
		};
		person1.say_name();



内部函数this指向此对象

		var person1 = {
			name: "sunly",
			say_name : function(){
				console.log(this); //person1
				var change_name = () =>{
					return this;   // person1
				};
				change_name("sunliying");
				return this.name;
			}
		};
		person1.say_name();

## ES6新增的两种数据结构Set && Map 数据结构 ##

**Set数据结构**          

- 类似与数组，但是成员是唯一的，没有重复
- 不会进行强制类型转换
- Set是一个构造函数，用来生成Set数据结构，可以接受一个数组作为参数，用来初始化

		var items = new Set([1,2,3,5,6]);
- Set的属性和方法：
	- Set.prototype.construtor;
	- Set.prototype.size
	- add(value)
	- delete(value)
	- has(value)   返回一个布尔值
	- clear()  清除所有成员
- Array.from() 方法可以将Set结构转换成数组

		function clearSameValue(array){
			return Array.from(new Set(array));
		}


**Map数据结构**       

- 在原js对象中，键值只能用字符串，其他类型会进行强制类型转换转为字符串，Map结构类似于对象，但是其键值可以是字符串，也可以是对象，数值，undefined，函数，数组
- Map函数接受一个数组对其进行初始化   

	var map = new Map([["name","sunly"],["age": 21]]);
- Map的属性和方法
	- size  返回成员个数
	- set(key,value)  设置一对键值
	- get(key)
	- has(key)
	- delete(key)
	- clear()

- 注意只有对一个对象的引用，Map结构才会将其视为一个值，内存地址必须是相同的（类似于接触事件绑定中传入的参数）
- Map提供了三种遍历器，是Map结构实例的方法
	- keys() 键名
	- values() 键值
	- entries() 返回所有成员

			var map = new Map([["name","sunly"],["age": 21]])
			// keys(),values(),entries()
			for (let key of map.keys()){
				console.log(key)
			}

- Map 有一个forEach方法，与数组的forEach方法类似，另外，这个方法可以接受第二个参数，用来绑定this；

### WeakMap ###

- WeakMap结构也是一种新的数据类型，与Map结构基本相似，不过只接受对象作为键名，不接受原始类型的值作为键名；
- 键名是对象的弱引用，对应的对象可能会被自动回收，对象被回收之后，WeakMap自动清除对应的键值对
- 有助于防止内存泄漏



## Class ##
ES6中引入了Class，作为对象的模板，通过class关键字，可以定义类；

- 通过extends来继承类；
- 调用super()来调用父类；

### export and import ###

- export用于用户自定义模块，规定对外接口；
- import用于输入其他模块提供的功能，同时创造命名空间，防止名称冲突；

		//导出 class.js		
		export {Point, ColorPoint};
		//导入 index.js
		import {Point,ColorPoint} from './js/class.js';
- 一个文件为一个模块
- 导出模块也可以直接在需要导出的方法或者类前面加上export关键字

### 模块的整体加载 ###
- 导出的时候写法正常，导入的时候使用module关键字，整体导入；module后面会跟上一个变量，表示导入的变量在该变量上；
- export default 输出默认的属性和方法； 在引入文件中可以自行命名；


### 模块的继承 ###
继承模块的所有属性和方法

		export * from 'circle'
继承模块的默认的属性和方法

















title: jQuery学习：选取和过滤元素
date: 
tags: 选取元素  过滤元素
categories: jQuery学习
description: 这时一篇关于jQuery的选取和过滤元素的文章
---
##  1. jQuery 的 ready 和  window 的 load  ##
要了解ready和load的区别，我们首先应该了解一般浏览器渲染HTML DOM文档时的一般步骤：   
- 首先，解析HTML结构；    
- 第二，加载外部脚本和样式文件   
- 第三，解析并执行脚本代码    
- 第四，构造 HTML DOM模型     
- 第五，加载外部图片等资源     
- 第六，页面加载完毕

1. 在js中，load事件只能被编写一次，而ready事件是可以在文档中被定义多次的。
2. 他们生成的时间不同，ready事件是在HTML DOM模型构建完成之后就开始执行的，而load事件是在页面完全加载完毕之后才开始执行的。

## 2.几种过滤方式，这些是对当前的jQuery对象进行操作，以实现二次过滤。 ##
   
- 类过滤                  
  if($(this).hasClass('re'))

- 下标过滤   
   eq(0)  
- 表达式过滤  
      filter('.re')    
	  has("")   
**使用filter 函数过滤的时候传进去的函数不用加括号被执行。**

	       function use() {
    	 		return $("span",this).length==1;
     	 	}
    	 	$("li").filter(use).css('font-size','30px');
    

- 判断  
        `  if( $('div').has(".re") ){        }`
- map映射  
**map（）方法通过映射关系，将一组元素转换成其他数组**  
如下得到的只是第一个input的value
    `$('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").val());`
如下所得相同：
    `$('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").eq(2).val());`
这样可以得到所选的input的value

         $('.subject-main-each-content>p')
			.append($(".subject-main-each-content>p>input").map(function(){
     	       return $(this).val();
          }).get().join('、')); 

这样可以得到所有的value值并链接起来。

上述通过map方法把所有匹配的input元素的value属性值映射为一个新集合，然后调用get（）方法将集合内的数据转换成数组，在调用join方法及进行连接，最后将其放入p元素之后。

- 清洗    
not（）
- 截取  
slice（start，end）

### 3.查找  这是以当前的jQuery对象为基础，查找父级、同级或者下级的元素 ###


### **当用循环执行一系列的元素绑定事件时，不能使用当前的变量直接进行绑定，而需要使用闭包返回** ###

若是使用当前变量如下：

      var div = document.getElementsByTagName('div');
		for (var i = 0; i < div.length; i++){
			div[i].onmouseout = function(){
				div[i].style.borderColor = "white";
			}
		}
   

要用闭包形式进行变量传递

		for(var i = 0; i < div.length; i++){
			div[i].onmouseout = (function (i){
				return function(){
					div[i].style.borderColor="white";
				};
				
			})(i);
		}

### 取消元素特定事件的默认行为   
如下取消元素特定事件的默认行为的三种方式，并且防止事件冒泡  
1. return false;    
2. event.preventDefault();   
3. event.stopPropagation();    

      $(function(){
		$('input').bind("click",{a:"sunly",b:" is a girl"},function(event){
			$('p').text(event.data.a+event.data.b);
			//return false;
			//event.preventDefault();
			event.stopPropagation();
		});
	});
### 函数绑定 ###  
使用bind 可绑定函数，使用one()可进行一次绑定使用，之后失效；
使用unbind()来接触绑定；

## 注意细节 ##
  - 1. 在使用中css属性时，需要用分隔符分开也可以使用原生js的驼峰写法。
-   2. 注意返回值   用`$(this).html();`  ` $(this).val();`     当没有参数时，是返回当前值，但有参数时，是改变其当前值为参数设定的值。
-   3. 除了hasClass（）中写class的名称，map（）中写入函数返回相应的一个集合，还有  filter（）中写入一个函数返回真假值，其余的都是写表达式，即css选择器的写法。

    

























# jQuery 的 ready 和  window 的 load #

  load事件只能被编写一次，而ready事件是可以在文档中被定义多次的。
2. 不能直接 require(' jquery ')

3. 选择元素的方式
    3.0  直接用选择器进行选择
    3.1   几种过滤方式，这些是对当前的jQuery对象进行操作，以实现二次过滤，
    1》类过滤
    if($(this).hasClass('re'))
                    animate({length: 300});
    2》下标过滤
               eq(0)
    3》表达式过滤
             filter('.re')            has("")
    4》判断
         if( $('div').has(".re") ){        }
    5》map映射
    6》清洗  not（）
    7》截取  slice（start，end）
3.2  查找  这是以当前的jQuery对象为基础，查找父级、同级或者下级的元素
    


  3.2   使用filter 函数过滤的时候传进去的函数不用加括号被执行。
function use() {
 		return $("span",this).length==1;
 	}
 	$("li").filter(use).css('font-size','30px');

4. 映射 map
 $('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").val());
这样得到的只是第一个input的value，

 $('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").eq(2).val());
这样可以得到所选的input的value

 $('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").map(function(){
 	return $(this).val();
 }).get().join('、')); 
这样可以得到所有的value值并链接起来。
map（）方法通过映射关系，将一组元素转换成其他数组，  
上述通过map方法把所有匹配的input元素的value属性值映射为一个新集合，然后调用get（）方法将集合内的数据转换成数组，在调用join方法及进行连接，最后将其放入p元素之后。

 $('.subject-main-each-content>p').append($(".subject-main-each-content>p>input").val().get().join('、')); 
这样的写法是不正确的，之前获得的只有一个元素，不是所有的，

10. 注意细节：
  1.》在使用中css属性时，语义需要用分隔符分开，与原生js不同。
  2.》注意返回值   用$(this).html();   $(this).val();     是调用一个函数，而不是直接返回html或者value
  3.》map选出的是一组集合，既选出的元素可以是一个利表中的值，属性或者css的样式等，比其他的选择范围要宽广，不是选择器。
  4.》除了hasClass（）中写class的名称，还有map（）中写入函数返回相应的一个集合，还有  filter（）中写入一个函数返回真假值，其余的都是些表达式，即选择器的写法。
    5》函数调用时加括号和不加括号的区别？？？？？







11. 代码复习
window.onload = function(){
		var node = document.getElementsByTagName('input')[0];
		var p = document.getElementsByTagName('p')[0];
		var i = 1;
		do {
			if( addEventListener ){
				node.addEventListener("click",function(){
					p.innerHTML += '<br/>(' + i++ + ')' + this.nodeName;
					 // 在这个事件中就移除事件，事件只会执行一次
					this.removeEventListener("click",arguments.callee,false); 
				},false);
			}else{
				node.attachEvent("onclick",(function(node){
					return	function(){
								 p.innerHTML += '<br/>(' + i++ + ')' + node.nodeName;
								 node.detachEvent("onclick",arguments.callee);
							};
					

				}(node)));    //这样写已经不支持了，即使在IE中也无法显示；
			}
			node = node.parentNode;
		}while(node);

		//  使用event，返回event类型
		node.onclick = function(){
			var event = window.event || event ;
			node.value = event.type;
		};
		node.ondblclick = function(){
			var event = window.event || event;
			node.value = event.type;
		};
		
	};


11.   当用循环执行一系列的元素绑定事件时，不能使用当前的变量直接进行绑定，而需要使用闭包返回

若是使用当前变量如下：
      var div = document.getElementsByTagName('div');
		for (var i = 0; i < div.length; i++){
			div[i].onmouseover = function(){
				div[i].style.borderColor = "red";
			}
		}
		for (var i = 0; i < div.length; i++){
			div[i].onmouseout = function(){
				div[i].style.borderColor = "white";
			}
		}
   

要用不报形式进行变量传递
		for(var i = 0; i < div.length; i++){
			div[i].onmouseout = (function (i){
				return function(){
					console.log(this); 
					div[i].style.borderColor="white";
				};
				
			})(i);
		}

12.  标准jQuery事件绑定      事件类型，数据对象， 函数
                 取消元素特定事件的默认行为，并且防止事件冒泡
      $(function(){
		$('input').bind("click",{a:"sunliying",b:" is a girl"},function(event){
			$('p').text(event.data.a+event.data.b);
			//return false;
			//event.preventDefault();
			event.stopPropagation();
		});
	});
13.  使用bind 可绑定函数，使用one()可进行一次绑定使用，之后失效；
使用unbind()来接触绑定；
##函数调用不写括号##
##若是函数调用，则不宜写数据对象##
        $(function(){
		$('input').bind("click",sun);
		function sun(){
			$('p').text("event.data.a+event.data.b");
			$(this).unbind("click",sun);
		}
	});


























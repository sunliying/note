title: java入门
date: 2016-02-29 12:07:58
tags: 入门简介
categories: java
description:
---

学校开设了java这门课程，我就写个博客来记录一下我的学习收获和总结。     
学东西要有输入，也要有输出，这样更好的消化和理解。
在命令行中编译java的两个命令：

- 	`javac`将java原文件编译为class字节码文件     
-	`java`命令可以执行class字节码文件

### java的重要特点 ###

- java语言丢弃了c语言中的一些特性，不使用指针，并且可以进行自动的废料收集；
- 是面向对象的，提供了**继承，类，接口**等原语，支持类之间的单继承，接口之间的多继承，并支持类与接口之间的实现机制。
- 全面支持动态绑定
- java语言是分布式的
- java语言的体系结构是中立的，java程序在java平台上被编译为体系结构中立的字节码文件，可以在实现这个java平台的任何系统中运行。适合于异构的网络环境和软件的分发。
- java语言是可移植的，这种可移植性是基于上个特点体系结构的中立
- java语言是解释型的。java字节码格式在运行时，java解释器对其进行解释执行，执行过程中需要的类在链接阶段被载入到运行环境
- java语言是动态的，java程序中需要的类能够动态的载入到运行环境中，也可以通过网络来载入需要的类
- java语言是多线程的

### java的对象、类、方法 ###

- java的对象是类的实例，有状态和行为；
- java的类是模板，描述一类对象的状态和行为；


### 构造器 ###
是一个生产车间，形式如下：    
public 类名 （参数类型 参数名）
### 方法调用的语法 ###
形式如下： 
	实例.方法名（参数）     
实例是生产车间的产品

- 创建类   
- 使用类创建实例对象
- 实例会继承类中的属性和方法
- 调用类中的方法和属性

如下：   

     class FreshJuice {
	   enum FreshJuiceSize{ SMALL, MEDUIM, LARGE }
	   FreshJuiceSize size;
	}
	
	public class FreshJuiceTest {
	   public static void main(String args[]){
	      FreshJuice juice = new FreshJuice();
	      juice.size = FreshJuice. FreshJuiceSize.MEDUIM ;
	   }
	}

包： 解决同名同姓的问题，


### io操作 ###
java的控制台输入由 system.in完成；为了获得一个绑定到控制台的字符流，需要将System.in 包装在一个BufferReader对象中来创建一个字符流；

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

BufferReader 字符串创建以后，我们可以使用 read()方法来从控制台读取一个字符或者使用readLine()的方法从控制台读取一个字符串

### java中的对象 ###

- 并不是所有的类都有面向对象的特性，像是Math类，只是封装了功能，并没有隐藏数据；
- 106页，所有的java对象都存储在堆中。当一个对象包含另一个对象变量时，这个变量依然包含着指向另一个堆对象的指针；
































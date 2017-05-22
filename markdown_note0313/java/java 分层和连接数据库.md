# java分层 service/action/DAO #


### model层 ###
对应的数据库表的实体类，


### DAO（Data Access Object）数据访问 ###
使用 Hibernate 连接数据库，操作数据库

### service 业务层 （BIZ）###
引用对应的Dao数据库操作，再此编写自己需要的代码；
### action 控制层 ###
引用对应的 service层，结合 structs配置文件，套转到指定的页面；也可以接受页面传递的请求数据；


### Spring配置文件 ###
以上的 Hibernate 以及structs 文件都需要注入到Spring的配置文件中，Spring将这些联系起来，形成一个整体；


## SSH框架 ##

structs + hibernate + Spring 的一个WEB 应用程序开源框架；

分为四层： 

- 表示层
- 业务逻辑层
- 数据持久层
- 域模块层

目的： 在短期内搭建结构清晰，可复用性强，维护方便的web应用程序；

- structs做系统的整体基础架构，负责MVC分离，在structs的模型部分，控制业务跳转；
- hibernate框架对持久层提供支持，
- Spring 做管理，管理structs 和 hibernate；

### java servlet ###
动态web资源开发技术，可以将servlet加入到 servlet 容器中运行：

- servlet容器： 能够运行servlet程序的环境叫做servlet容器；
- web容器： 能够运行web应用的环境叫做web容器；

servlet的特点：

- servlet没有main方法，受控于另一端java程序，即servlet容器；
- 默认是多线程执行的；
- JSP是为了方便写HTML和java代码；实质还是servlet，最终会编译成java代码；
- 





















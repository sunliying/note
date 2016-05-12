# nodejs #

静态文件下后端的作用：
浏览器发送URL,服务器解析URL，并对应到硬盘上的文件，如果文件存在，就返回200状态码，并发送文件到浏览器端，如果文件不存在，返回404状态码，并发送一个404页面到浏览器端；

### fs读取静态文件 ###
### 判断后缀名，在Content-Type中加入 ###
### 对特定文件的缓存设置 ###
### 文件压缩（gzip是node中原生支持的） ###
gzip  zlib  fs.createReadStream

### 如何将前端表单数据传递给后端 ###


### 注意 ###
1. 正确写端口但是浏览器端不能正确显示，可能是因为端口被占了，换一个端口就行了


# nodejs #

### nodejs的API格式 ###
一般来讲，在js中使用try…catch…结构来捕捉错误，但是在异步调用中，这样的结构会出现很大的问题，因为异步调用并不会立即执行，所以捕捉不到系统执行函数时产生的错误，一般nodejs里面捕捉错误都是直接写在回调函数中的，所以回调函数会接受两个参数，一个是error，一个是返回的结果，在函数内，对error进行判断，没有错误就继续执行，有错误就退出；
### EventEmitter ###
Nodejs中的所有异步I/O操作在完成的时候，都会发送一个事件到事件队列；nodejs里面的很多对象都会分发事件；打开文件，读取文件，有新连接等等的时候都会发出一个事件，产生这些事件的对象都是EventEmitter的实例；这些实例都会订阅和发布事件。
### buffer ###
buffer类是专门用来存放二进制数据的缓存区。buffer库为nodejs 提供了一种存储原始数据的方法，可以让nodejs处理二进制数据，每当nodejs处理io操作时，就可能会使用到buffer库。
原始数据存储在buffer类的实例中，**一个buffer类似于一个整数数组，但是它对应于V8堆内存之外的一块原始内存。**
### Stream ###
Stream是一个抽象接口，node中有很多对象实现了这个接口，request对象就是一个Stream。
nodejs中，Stream有四种流类型：

- Readable，可读          
- Writable，可写       
- Duplex，可读可写      
- Transform操作被写入数据，然后读出结果   

- 可读取文件
- 可写入文件
- 管道流 pipe
- 链式流

所有的stream都是EventEmitter的实例，常用的事件有：

- data
- end
- error
- finish

### nodejs 路由 ###
路由需要请求的URL和其他的get和post参数，随后路由根据相应的数据执行相应的代码；

### 模块系统 ###
一个nodejs文件就是一个模块，这个文件可能是JavaScript代码，或是json文件，或者是编译过的C/C++扩展；

### 全局对象 ###
global是作为nodejs中的全局对象，更确切地说，global最根本的作用是作为全局对象的宿主；

js中对全局变量的定义是：

- 在最外层定义的变量
- 全局对象上的变量
- 隐式定义的变量

在nodejs中，不可能在最外层定义全局变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。
### prosess ###
process是一个全局变量，是global的属性，是用来描述当前nodejs进程状态的对象，提供了一个与操作系统的简单接口。多用于本地命令行程序；

### util nodejs常用工具 ###
**util.inherits()**(要继承的构造函数，被继承的构造函数)
这属于平级继承，`要继承的构造函数`并不是继承了`被继承的构造函数`，而是继承了`被继承的构造函数的原型`。           
**util.inspect()**           
**util.isArray()**          
**util.isError()**          
**util.isDate()**          

### 字符串、对象、json之间的相互转换 ###
base是使用构造函数创建的对象，s是使用对象字面量创建的对象，

	console.log(base.toString());
	// 这个方法是返回对象的类型[object Object]
	console.log(util.inspect(base))
	// （nodejs）这是将任意对象转换为字符串的方法，并且有参数可选
	console.log(JSON.stringify(s));
	// 将json对象或者是对象转化成字符串，会忽略函数。。。
	console.log(JSON.stringify(base));
	//将字符串转换成相应的json对象；
	console.log(JSON.parse())

### nodejs 文件系统 ###
提供了一组标准的文件操作API；        

- 打开文件： `fs.open(path,flag[,mode],callback)`
- 读取文件： `fs.readFile(path,callback)`
- 获取文件信息： `fs.stat(path,callback)`
- 写入文件: `fs.writeFile(filename, data[, options], callback)`
- 读取文件： `fs.read(fd, buffer, offset, length, position, callback)`
- 关闭文件： `fs.close(fd, callback)`
- 截取文件： `fs.ftrancate(fd, len, callback)`
- 删除文件： `fs.unlink(path,callback)`
- 创建目录： `fs.mkdir(path[,mock],callback)`
- 读取目录： `fs.readdir(path,callback)` ,返回files文件数组列表；
- 删除目录： `fs.rmdir(path,callback)`

### nodejs GET/POST请求 ###

**get请求**      
URL是完整的请求路径，GET请求被直接嵌入到路径中，可以手动解析URL后面的内容作为Get请求的参数；          
**post请求**
post请求的所有请求内容都在请求体中；http.ServerRequest 中并没有请求体，等待请求体是一件很费时的工作；
### nodejs工具模块 ###

- OS模块：提供基本的操作系统函数：
	- 操作系统的内存
	- 系统名称
	- 主机名称
	- CPU架构
	- 网络接口
	- CPU的信息
	- 默认临时文件夹
- Path模块： 提供了处理和转换文件路径的工具；
	- 规范化路径
	- 连接路径
	- 将相对路径转换成绝对路径
	- 判断路径是否为绝对路径
	- 返回路径中的文件夹，文件名，后缀名，
	- 将路径字符串转换成对象，将对象转换成路径字符串
	- path.win32
- Net模块，用于底层的网络通信，提供了创建服务端和客户端的操作；
	- 创建服务器
	- 创建客户端
	- 建立连接
- DNS模块： 用于域名解析
	- 将域名转化成IP地址
	- 将IP地址转化成域名的数组
	- 并且根据条件来限定转换对象
- Domain模块： 简化了异步代码的异常处理，可以处理try…catch…无法捕捉的
	- domain模块将处理多个不同的IO的操作作为一个组。注册事件和回调到domain，当发生一个错误事件或者是抛出一个错误时，domain对象会被通知，不会丢失上下文环境，也不会导致程序错误立即退出
	- 与prosess.on('uncaughtException')不同
	- 隐式绑定
	- 显示绑定

### web服务器 ###

- Web服务器指的是网站服务器，驻留于因特网上某种类型计算机的程序，基本功能是提供Web信息浏览服务。需要支持http协议、HTML文档格式以及URL，与客户端的网络浏览器配合。
- 支持服务器脚本语言，通过脚本语言从数据库获取数据，将结果返回给客户端浏览器；



### Express框架 ###

- 快速搭建功能完整的网站
- 可以设置中间件来响应http请求
- 定义路由表用于执行不同的http请求动作
- 通过向模板传递参数来动态渲染HTML页面


 **前后端数据传递**     

- 使用Ajax
- 使用get方式若没有使用Ajax，在HTML的form表单中写上action属性，属性值为后端对应的路由，并写上method，对应为传送方式；对应的，表单中要上传的参数需要有name属性，这样就可以通过后台的req.query[name]来访问传入的参数；前端请求之后显示的URL是加参数之后的URL。
- 页面间的跳转使用的不是路由，而是超链接；
- 使用post方式，后端需要使用bodyParser进行URL的编码；app.post()的第二个参数要写上，对应的内容在req.body[name]中；前端显示的URL为相应路由；
- 上传文件，也是用post请求，另外，需要加上enctype="multipart/form-data"; 上传文件需要读取传入的文件，获得数据，并且将数据写在服务器端的文件中，并返回相应的在相应的服务器端访问的地址；
- cookie管理： 使用中间件向nodejs服务器发送cookie信息；  cookieParser；

### nodejs RESTful API ###
Representational State Transfer 表述性状态传递，一种软件架构风格。

- 表述性状态转移是一种架构约束条件和原则。满则这些约束条件和原则的应用程序或设计就是RESTful。
- 是一种风格，而不是标准
- http，URL，XML，HTML
- 使用json数据格式
- RESTful架构的四种基本方法：
	- GET
	- PUT
	- DELETE
	- POST
- 具体细节：
	- 资源与URI
	- 统一资源接口
	- 资源的表述
	- 资源的链接
	- 资源的转移
- URI设计上的技巧
	- 使用下划线和中划线使得URI更易读
	- 使用/来表示资源的层级关系
	- 使用？来过滤资源
	- 使用，或者； 来表示统计资源关系
- 统一资源接口
	- 使用标准的http方法，并遵循这些方法的语义
	- 安全性和幂等性
	- POST和PUT 在创建资源时区别在于所创建的资源的名称（URI）是否由客户端决定
	- 统一资源接口对URI的指导意义：统一资源接口要求使用标准的HTTP方法对资源进行操作，所以URI只应该来表示资源的名称，而不应该表示资源的操作
- 资源的表述
	- 客户端通过HTTP方法获取资源的说法不确切，更准确的是，客户端获取的只是资源的表述，而不是资源本身。
	- 资源的表述包括数据和描述数据的元数据
	- 客户端如何知道服务器端提供的表述形式？通过HTTP内容协商，客户端通过Accept头请求一种特定格式的表述，服务器端通过Content-Type告诉客户端资源的表述形式，
	- 使用URL后缀来区分表述格式
- 资源的链接
	- 在表述格式里加入链接来引导客户端
	- 超媒体
	- **？？？注意给资源的表述提供链接，而不是专注于资源的CRUD**
- 状态的转移
	- 应用状态和资源状态
	- 客户端负责维护应用状态，服务端维护资源状态
	- 客户端与服务端的交互是无状态的，在每一次请求中都包含处理该请求所需的一切信息
	- 服务端不需要在请求间保留应用状态，只有在接收到实际请求的时候，服务端才会关注应用状态
	- "会话"状态不是作为资源状态保存在服务端的，而是被客户端作为应用状态进行跟踪的。客户端应用状态在服务端提供的超媒体的指引下发生变迁。服务端通过超媒体告诉客户端当前状态有哪些后续状态可以进入。
### nodejs多进程 ###

- child_prcess.exec()方法，使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回；
	- 子进程会等待进程结束，一次性返回缓冲区的内容
- child_process.spawn(command[, args] [, options])使用指定的命令行参数创建新线程
	- spawn方法返回流，在进程返回大量数据时使用
	- 进程一旦开始执行spawn就开始接收响应数据；
	- 注意，没有回调函数
- child_process.fork()是spawn()的特殊形式，用于创建进程 `child_process.fork(modulePath[, args][, options])`
	- modulePath： 在子进程中运行的模块
	- 返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信通道。

## nodejs核心概念 ##

网络数据性能瓶颈在于I/O处理上，在不同的介质上进行I/O操作所花费的CPU时间有很大的不同；
现在的网络应用，需要大量的访问磁盘及网络；比如数据查询，访问互联网等；
提高CPU的利用效率，成了提升网络性能的关键；


















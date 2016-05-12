# WebSocket #
WebSocket 本质上是一个基于TCP的协议，他由通信协议和编程API组成，能够在浏览器和服务器之间建立双向链接，以基于事件的方式，赋予浏览器实时通信的能力。
意味着服务器端和客户端可以同时发送并响应请求，而不是像http的请求和响应。

使用socket.io和nodejs来搭建在线聊天室。

1. 在浏览器端引入socket.io直接使用

		<script src="/socket.io/socket.io.js">

	就行，不用在node_module里面专门引入。     

2. 
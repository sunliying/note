# MongoDB #

启动MongoDB，首先指定存储目录，并且要操作MongoDB数据库，服务器需要一直开着

	mongod --dbpath h:/mongoDB/data

指定数据存储目录和日志目录

	mongod --dbpath /usr/mongo/data --logfile /var/mongo.log

如果采用安全认证模式，需要加上--auth选项，如：

	mongod --auth --dbpath /usr/mongo/data --logfile /var/mongo.log 

/**
** crud module
**/
var insertDoc,deleteDoc,findDoc,updateDoc;
// user_map is an object contains user's info
insertDoc = function(db,user_map,callback){
	var collection = db.collection('user');
	if ( collection.find({name:user_map.name}) ) {
		console.log('name cant not be the same!!');
		return ;
	}
	collection.insertMany([user_map],function(err,result){
		if (err) {
			console.error(err);
			return;
		}
		console.log("insert successfully!!!");
		callback(result);
	});
};
// arg_map contains user_id and change_map
updateDoc = function(db,arg_map,callback){
	var 
		user_id = arg_map.user_id,
		change_map = arg_map.change_map,
		collection = db.collection('user');

	if(!user_id){
		console.log("user must be defined!!!");
		return;
	}
	collection.updateOne({_id:user_id},{$set:change_map},function(err,result){
		if (err) {
			console.error(err);
			return;
		}
		console.log("update successfully");
		callback(result);
	});
};
//just need a user_id, and delete it
deleteDoc = function(db,user_id,callback){
	var collection = db.collection('user');
	if (!user_id) {
		console.log(" user can't be null");
		return;
	}
	collection.deleteOne({_id: user_id},function(err,result){
		if (err) {
			console.error(err);
			return;
		}
		callback(result);
	});
};
// if the spacified select condition is null,then find all
// select_map object include two properties: name,value
findDoc = function(db,select_map,callback){
	var collection = db.collection('user');
	if (select_map) {
		var name = select_map.name,
			value = select_map.value;
		collection.find({name: value}).toArray(function(err,docs){
			if (err) {
				console.error(err);
				return;
			}
			console.log("find all successfully!!!");
			callback(docs);
		});
	}else{
		collection.find({}).toArray(function(err,docs){
			if (err) {
				console.error(err);
				return;
			}
			console.log("find all successfully!!!");
			callback(docs);
		});
	}
	console.error('the format of the select map is not right');
	
};
module.exports = {
	findDoc: findDoc,
	updateDoc: updateDoc,
	deleteDoc: deleteDoc,
	insertDoc: insertDoc
};

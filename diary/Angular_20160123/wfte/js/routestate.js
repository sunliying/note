 var myApp = angular.module('myApp', ['ui.router','ui.router.stateHelper']);
        myApp.config(function($stateProvider,stateHelperProvider ) {
        	$stateProvider.state('contacts',{
        		name: 'contacts',
        		url: '/contacts',
        		templateUrl: './partials/contacts.html',
        		controller: function($scope){
        			$scope.users = [{
        				name: 'sunly',
        				id: 'id_0213'
        			},
        			{
        				name: 'Josh',
        				id:'id_0923'
        			},
        			{
        				name: 'Danish',
        				id: 'id_0615'
        			}];
        		}
        	})
        	.state('contacts.list',{
        		name:'list',
        		url: '/list',
        		templateUrl: './partials/contacts.list.html'
        	})
        	.state('contacts.detail',{
        		name: 'detail',
        		url:'/:id',
        		templateUrl: './partials/contacts.detail.html',
        		controller: function($scope,$stateParams){
        			angular.forEach($scope.users,function(user){
        				if (user.id === $stateParams.id) {
        					$scope.person = user;
        				}
        			});
        		}
        	});
        });
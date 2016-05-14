var app = angular.module('myApp', []);
app.controller('dataController', function($scope){
	$scope.refreshState = function(){
		$.ajax({
			url: 'https://api.wink.com/groups/5088581',
			type: 'GET',
			dataType: 'json',
			headers: {"Authorization": "Bearer 09a29d0ba7f54fbdd24b40e2dcc9f008"},
			async:false,
			success: function(data){
				console.log(data["data"]["reading_aggregation"]["powered"]["and"]);
				return data["data"]["reading_aggregation"]["powered"]["and"];
			}
		});
	}
})
angular.module('noBind').directive('noBind', ['$timeout', function($timeout) {
    return{
    	restrict: 'AC',
    	scope: true,
    	link: function(scope, element){
    		$timeout(function(){
    			element.removeClass('ng-binding ng-scope');
    			scope.$destroy();
    		}, 0);
    	}
    };
}]);

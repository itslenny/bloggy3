BloggyApp.directive('alerts', function(){
  // Runs during compile
  return {
    scope: {}, // {} = isolate, true = child, false/undefined = no change
    controller: ['$scope','AlertService', function($scope, AlertService){

      // var alerts = [
      //     {type:'danger',text:'example danger'},
      //     {type:'success',text:'example success'}
      //   ];

      $scope.getAlerts = function(){
        // return alerts;
        return AlertService.get();
      }

      $scope.closeAlert = function(idx){
        AlertService.remove(idx);
      }

    }],

    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: '<alert ng-repeat="alert in getAlerts()" type="{{alert.type}}" close="$parent.closeAlert($index)">{{alert.text}}</alert>',
    replace: true,
  };
});
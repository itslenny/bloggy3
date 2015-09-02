
var BloggyApp = angular.module('BloggyApp',['ui.bootstrap','ngRoute']);

BloggyApp.run(function(){
  console.log('Bloggy reporting for duty.');
});

BloggyApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about', {
    templateUrl:'/views/about.html',
    controller:'AboutCtrl'
  })


}]);








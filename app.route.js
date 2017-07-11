angular.module('mainApp')
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'./home/_home.html',
        controller:'homeCtrl as home'})
    
    .when('/details/:id',{
          templateUrl:'./details/_details.html',
          controller:'detailsCtrl as details'
          })
});



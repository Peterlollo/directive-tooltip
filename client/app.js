angular.module('tip', ['tip.home', 'ngRoute', 'tip.tooltip'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      });
  }]);
'use strict';

angular.module('websiteApp', [
'ngResource',
'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
});

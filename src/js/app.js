'use strict';

var app = angular.module('Haip', ['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
   .when('/', {
    templateUrl: '/view/home.html',
    controller: 'HomeCtrl',
  })

  .otherwise({
     redirectTo: '/'
   });

})

app.config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

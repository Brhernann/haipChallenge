'use strict';

var app = angular.module('Haip');

app.service('HaipServices', function($resource, $httpParamSerializerJQLike) {
    var service = $resource('http://haip.cl/api/challenge/:action', null,
      {
    'LevelOne': { method:'OPTIONS',
                      params: { action : '' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},
    'LevelTwo': { method:'POST',
                      params: { action : '' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }}, 
    'LevelThree': { method:'GET',
                      params: { action : 'generate-test' },
                      headers : {"haip-test": "haip-OK"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},                 
      });

    return service;
  })

  app.service('LocalServices', function($resource, $httpParamSerializerJQLike) {
    var service = $resource('http://localhost:8081/api/:action', null,
      {    
    'EndpointOne': { method:'POST',
                      params: { action : 'EndpointOne' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},  
    'EndpointTwo': { method:'POST',
                      params: { action : 'EndpointTwo' },
                      headers : {"Content-Type": "application/x-www-form-urlencoded"},
                      transformRequest: function(data) {
                      return $httpParamSerializerJQLike(data);
                  }},             
                  
      });

    return service;
  })

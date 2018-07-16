'use strict';

var app = angular.module('Haip');

app.controller('HomeCtrl', function ($scope, HaipServices, LocalServices, $log) {

  $scope.inactive= true;
  $scope.MyLenght = 5
  var answer = ''

  //CHALLENGER

  $scope.Level_1 = () => {

    HaipServices.LevelOne({},(res) => {
      $scope.myhtml = res.POST.description;
      $scope.thisResponse = true; //show
      $scope.thisExample = false; //hide
    });
  }

  $scope.Level_2 = () => {

    HaipServices.LevelTwo({
      firstName: 'Hernan',
      lastName: 'Humaña',
      email: 'herhuglz@gmail.com'
    },(res) => {
      $scope.myhtml = res.nextStepExplanation;
      $scope.thisResponse = true; //show
      $scope.thisExample = false; //hide
    });
  }

  $scope.Level_3 = () => {
    
    HaipServices.LevelThree({},(res) => {
      $scope.myhtml = res.nextStepExplanation;
      $scope.example = res.example;
      $scope.thisResponse = true; //show
      $scope.thisExample = true; //show
    });
  }

  // ENDPOINTS

  $scope.Endpoint_1 = (number) => {
    LocalServices.EndpointOne({
      data: number
    },(res) => {
      $scope.myhtml = res.data;
      answer = res.data
      $scope.thisResponse = true; //show
      $scope.thisExample = false; //hide
      $scope.inactive= false; // unlock buttom
    }, (err) => {
      console.log(err.data.error[0].message)
    })
  }

  $scope.Endpoint_2 = () => {
    LocalServices.EndpointTwo({
      data: answer
    },(res) => {
      $scope.myhtml = res;
      $scope.thisResponse = true; //show
      $scope.thisExample = false; //hide
      $scope.inactive= true; // lock the buttom
    }, (err) => {
      console.log(err.data.error[0].message)
    })
  }

});

/**
 * Created by oys633 on 10/7/14.
 */
var app = angular.module('interviewApp',['app.directives']);

app.controller('appCtr',function($scope){
  $scope.text="some Text";
  $scope.clickFunc = function(){
    $scope.text="Button Clicked";
  }

});
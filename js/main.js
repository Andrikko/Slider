var app = angular.module("myApp", []);
//console.log('Hello');

app.controller("myCtrl", function($scope) {
  $scope.records = [{
      name: 'Nike',
      price: '149$',
  },{
      name: 'Adidas',
      price: '149$'
  },{
      name: 'Puma',
      price: '99$'
  },{
      name: 'Reebok',
      price: '129$'
  },{
      name: 'Nike Air',
      price: '149$'
  },{
      name: 'Adidas NEW',
      price: '199$'
  }];
});
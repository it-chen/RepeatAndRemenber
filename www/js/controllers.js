angular.module('starter.controllers', [])

.controller('N2', function($scope, $ionicSideMenuDelegate,Units,$stateParams) {

  $scope.units = Units.all();
  $scope.totlePage = Units.totlePage();
  $scope.unitNo = $stateParams.unitNo||0;
  $scope.itemNo = 1;
  $scope.item = Units.get($scope.unitNo,$scope.itemNo);

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.onDragUp = function(){
    if(parseInt($scope.itemNo)<9){
      $scope.itemNo = parseInt($scope.itemNo)+1;
      $scope.item = Units.get($scope.unitNo,$scope.itemNo);
    }
  }

  $scope.onDragDown = function(){
    if(parseInt($scope.itemNo)>0){
      $scope.itemNo = parseInt($scope.itemNo)-1;
      $scope.item = Units.get($scope.unitNo,$scope.itemNo);
    }
  }
})

.controller('N1', function($scope) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

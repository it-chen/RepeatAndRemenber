angular.module('starter.controllers', [])

.controller('N2', function($scope, $ionicSideMenuDelegate,Units,$stateParams,$ionicPopup) {

  $scope.units = Units.all();
  $scope.totlePage = Units.totlePage();
  $scope.abc = new Array();
  for (i = 0; i < $scope.totlePage; i++) {
    $scope.abc.push(i);
  }
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

  $scope.showPopup = function() {
  $scope.data = {}

  // 自定义弹窗
  var myPopup = $ionicPopup.show({
   template:'<div class="card"><div class="item item-divider">卡片头</div>'+
            '<div class="item item-text-wrap">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>'+
            '<div class="item item-divider">卡片底</div></div>',
   title: 'Enter Wi-Fi Password',
   scope: $scope,
   buttons: [
     {
       text: '<b>Save</b>',
       type: 'button-positive',
     },
   ]
  });
  myPopup.then(function(res) {
   console.log('Tapped!', res);
  });
  };
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

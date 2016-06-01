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
    if(parseInt($scope.itemNo)<10){
      $scope.itemNo = parseInt($scope.itemNo)+1;
      $scope.item = Units.get($scope.unitNo,$scope.itemNo);
    }
  }

  $scope.onDragDown = function(){
    if(parseInt($scope.itemNo)>1){
      $scope.itemNo = parseInt($scope.itemNo)-1;
      $scope.item = Units.get($scope.unitNo,$scope.itemNo);
    }
  }

  $scope.showPopup = function() {
  $scope.data = {}

  // 自定义弹窗
  var myPopup = $ionicPopup.show({
   template:'<div class="card"><div class="item item-divider">{{item.name}}</div>'+
            '<div class="item item-text-wrap">中文：{{item.zhongwen}}<br/><br/>接续：{{item.jiefa}}<br/><br/>例句：{{item.liju}}<br/><br/>例句翻译：{{item.lijufanyi}}<br/><br/>'+
            '<div ng-if="item.beizhu!=\'\'">备注：{{item.beizhu}}<br/></div></div>',
   title: '详细解释',
   scope: $scope,
   buttons: [
     {
       text: '<b>懂了！</b>',
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

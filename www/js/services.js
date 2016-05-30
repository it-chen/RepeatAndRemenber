angular.module('starter.services', [])

.factory('Units', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var _units = [{
    id: '001',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '002',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '003',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  },{
    id: '004',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '005',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  },{
    id: '006',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '007',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  },{
    id: '008',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '009',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  },{
    id: '010',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  },{
    id: '011',
    name: 'Ben Sparrow',
    full: 'You on your way?',
  },{
    id: '012',
    name: 'Max Lynx',
    full: 'Hey, it\'s me',
  }];

  return {
    all: function() {
      return _units;
    },
    totlePage: function() {
      return Math.ceil(_units.length/10);
    },
    remove: function(unit,chat) {
      _units.splice(_units.indexOf(unit*10+chat), 1);
    },
    get: function(unit,chatId) {
      for (var i = 0; i < _units.length; i++) {
        if (parseInt(_units[i].id) == parseInt(unit*10+chatId)) {
          return _units[i];
        }
      }
      return null;
    }
  };
});

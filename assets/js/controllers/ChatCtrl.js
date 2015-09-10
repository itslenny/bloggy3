BloggyApp.controller('ChatCtrl',['$scope', 'UserService',function($scope, UserService){

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    joinChat();
  });

  $scope.messages = [];
  //  //sendMsg msgText

  var scrollChat = function() {
    var chatView = document.querySelector('.chat-window .chat-list');
    chatView.scrollTop = chatView.scrollHeight+100;
  }

  io.socket.on('userjoin', function(data, jwRes){
    $scope.$evalAsync(function(){
      $scope.messages.push({from:'SYSTEM',msg: data.user + ' joined the chat.'});
      scrollChat();
    });
  });

  io.socket.on('userleave', function(data, jwRes){
    $scope.$evalAsync(function(){
      $scope.messages.push({from:'SYSTEM',msg: data.user + ' left the chat.'});
      scrollChat();
    });
  });

  io.socket.on('addchat', function(msg){
    $scope.$evalAsync(function(){
      $scope.messages.push(msg);
      scrollChat();
    });
  });

  $scope.sendMsg = function(){
    var data = {msg: $scope.msgText};
    io.socket.post('/api/chat/post', data, function(data, jwRes){
      $scope.$evalAsync(function(){
        $scope.msgText = '';
      });
    });
  }

  function joinChat(){
    if(!$scope.currentUser) return;

    io.socket.post('/api/chat/join',{data:'my data'},function(data, jwRes){
      //$scope.$apply
      $scope.$evalAsync(function(){
        $scope.messages = data;
      });
      console.log('data', data);
    });
  }

}]);






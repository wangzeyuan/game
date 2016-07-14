var server = require('http').createServer();
var io = require('socket.io')(server);

var users ={};
io.on('connection', function(socket){
    console.log('一个用户连接')
  
  socket.on('user.online', function(user){
      users[user.id] = user;
      io.sockets.emit('user.online',getUsers());
  });
  
  socket.on('disconnect', function(){
      delete users[socket.id.replace("/#",'')];
      io.sockets.emit('user.online',getUsers());
  });
});

function getUsers(){
    var arr = [];
    for(var key in users){
        arr.push(users[key]);
    }
    
    return arr;
}
server.listen(3000);
console.log('服务器开启')
const exp = require('express')
const app = exp()
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.render('index.ejs');
});


io.sockets.on('connection', function (socket){
	socket.on('username', function(username){
		socket.username = username;
		io.emit('is_online', '<b> ' + socket.username + ' joined the chat... </b>');
	});

	socket.on('disconnect', function(username){	
		io.emit('is_online', '<i> ' + socket.username + ' left the chat... </i>');
	})

	socket.on('chat_message', function(message){
		io.emit('chat_message',  '<b>' + socket.username + '</b>: ' + message);
	});
});


const server = http.listen(8080, function(){
	console.log('Listening on port 8080')
});

const exp = require('express')
const app = exp()
app.set('view engine', 'ejs')
app.use(exp.static('public'))
app.get('/', (req, res) => {
	res.render('index')
})

//Listens on port 8080
server = app.listen(8080)

const io = require('socket.io')(server)
io.on('connection', (socket) => {
	console.log('Connection Established')

socket.username = 'Default-User'
socket.on('set_username', (data) => {
	socket.username = data.username
})

socket.on('new_message',(data) => {
	io.sockets.emit('new_message', {message: data.message, username:socket.username});
})

socket.on('typing', (data) => {
	socket.broadcast.emit('typing', {username: socket.username})
})
})

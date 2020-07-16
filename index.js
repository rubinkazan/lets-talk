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
	consoler.log('Connection Established')
})


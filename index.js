const exp = require('express')
const app = exp()

app.set('view engine', 'ejs')
app.use(exp.static('public'))
app.get('/', (req, res) => {
	res.send('Greetings')
})

//Listens on port 8080
server = app.listen(8080)

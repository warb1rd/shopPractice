const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react-express-jwt',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')
	barsRoutes = require('./routes/bars.js')				//Second model called bars

mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

//It tells express where all static assets are stored (everything pertaining to front end)
//npm run build creates a folder called build in react app. 
//If that folder exists and we want to serve it on localhost 3001. It works only when deploying to heroku

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use("/api/bars", barsRoutes)

//If you make a get request to anything else but /api/users and api/bars, send the index.html file.
//"heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
//Rebuilds react app for us once we do git push origin master every time.
app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
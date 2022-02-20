const express = require('express');
var request = require('request');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/footBall', (req, res) => {
	request(
		'https://fantasy.premierleague.com/api/bootstrap-static/',
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				const parseBody = JSON.parse(body);
				//var myteam = parseBody['elements'];
				//console.log(body);
				//res.send({ parseBody });
				res.send(parseBody);
			}
		}
	);
});

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('/newEndpoint', (req, res) => {
// 	res.send('this is my new endpoint');
// });

// app.get('/getWeatherlondon', (req, res) => {
// 	request(
// 		'http://api.weatherstack.com/current?access_key=3ba65504ac26bd162782cd33e9428c82&query=london',
// 		function (error, response, body) {
// 			if (!error && response.statusCode == 200) {
// 				var parseBody = JSON.parse(body);
// 				var temp = parseBody['current']['temperature'];
// 				console.log(body);
// 				res.send({ temp });
// 			}
// 		}
// 	);
// });

// app.get('/footBall', (req, res) => {
// 	request(
// 		'https://fantasy.premierleague.com/api/bootstrap-static/',
// 		function (error, response, body) {
// 			if (!error && response.statusCode == 200) {
// 				const parseBody = JSON.parse(body);
// 				//var myteam = parseBody['elements'];
// 				//console.log(body);
// 				//res.send({ parseBody });
// 				res.send(parseBody);
// 			}
// 		}
// 	);
// });

// app.get('/teams', (req, res) => {
// 	request(
// 		'https://fantasy.premierleague.com/api/bootstrap-static/',
// 		function (error, response, body) {
// 			if (!error && response.statusCode == 200) {
// 				const parseBody = JSON.parse(body);
// 				//var myteam = parseBody['elements'];
// 				//console.log(body);
// 				//res.send({ parseBody });
// 				res.send(parseBody);
// 			}
// 		}
// 	);
// });

// app.get('/cast', (req, res) => {
// 	request(
// 		'https://www.breakingbadapi.com/api/characters',
// 		function (error, response, body) {
// 			if (!error && response.statusCode == 200) {
// 				const parseBody = JSON.parse(body);
// 				//var myteam = parseBody['elements'];
// 				//const name = parseBody;
// 				//console.log(body);
// 				//res.send({ parseBody });
// 				//res.send({ parseBody });
// 				res.send(parseBody);
// 			}
// 		}
// 	);
// });

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});

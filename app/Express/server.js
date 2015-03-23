var express = require("express"),
    http = require("http"),
    app = express();

var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

var outcome;
var wins = 0;
var ties = 0;
var losses = 0;

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(7777);

app.get("/", function (req, res) {
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();
});

app.get("/play/rock", function (req, res) {
	var choice = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'Scissors' || choice === 'Lizard'){
		wins++;
		outcome = 'Win';
	}
	else if (choice ==='Paper' || choice === 'Spock'){
			losses++;
			outcome = 'Lose';
	}
	else {
		ties++;
		outcome = 'Tie';		
	}
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();

});

app.get("/play/paper", function (req, res) {
	var choice = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'Rock' || choice === 'Spock'){
		wins++;
		outcome = 'Win';
	}
	else if (choice ==='Scissors' || choice === 'Lizard'){
			losses++;
			outcome = 'Lose';
	}
	else {
		ties++;
		outcome = 'Tie';		
	}
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();

});

app.get("/play/scissors", function (req, res) {
	var choice = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'Paper' || choice === 'Lizard'){
		wins++;
		outcome = 'Win';
	}
	else if (choice ==='Rock' || choice === 'Spock'){
			losses++;
			outcome = 'Lose';
	}
	else {
		ties++;
		outcome = 'Tie';		
	}
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();

});

app.get("/play/lizard", function (req, res) {
	var choice = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'Paper' || choice === 'Spock'){
		wins++;
		outcome = 'Win';
	}
	else if (choice ==='Scissors' || choice === 'Rock'){
			losses++;
			outcome = 'Lose';
	}
	else {
		ties++;
		outcome = 'Tie';		
	}
	//res.write(JSON.stringify(results));
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();

});

app.get("/play/spock", function (req, res) {
	var choice = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'Scissors' || choice === 'Rock'){
		wins++;
		outcome = 'Win';
	}
	else if (choice ==='Paper' || choice === 'Lizard'){
			losses++;
			outcome = 'Lose';
	}
	else {
		ties++;
		outcome = 'Tie';		
	}
	var results = {	outcome: outcome, wins: wins, losses: losses, ties: ties };
	res.json(results);
	res.end();

});



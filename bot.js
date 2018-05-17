const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

client.login(process.env.NDQ2NDU4NTQ1Nzk4MzgxNTY4.Dd5Ubw.pFOLBrDWcG07AbYJRqfS6VQP7BY);

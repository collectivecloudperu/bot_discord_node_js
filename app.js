const Discord = require('discord.js');
const client = new Discord.Client();

client.login('TOKEN-DEL-BOT');

client.once('ready', () => {
	console.log('Listo !');
});

client.on('message', message => {

	if (message.content === '!ping') {
		// Respuesta
		message.channel.send('Pong !');
	}

	if (message.content === 'hola') {
		// Respuesta
		message.channel.send('Hola como estas, en que podemos ayudarte ?');
	}

});



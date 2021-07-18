'use strict';
// Import the discord.js module and others
const Discord = require('discord.js');
const fs = require('fs');
// Create an instance of a Discord client
const client = new Discord.Client();
// import token and database
const credentials = require('./auth.json');
let prevMessage = '0';
//sets ready presense
client.on('ready', () => {
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'for WHITE!',
        type: "WATCHING"
    }
  });
  //list server
  client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} | ${guild.id}`);
	 guild.members.fetch();
  });
  console.log('I am ready!');
});
// Create an event listener for messages
client.on('message', message => {
	//set presence
   client.user.setPresence({
      status: 'online',
		activity: {
         name: 'for WHITE!',
         type: "WATCHING"
      }
   });
	if(message.content === 'WHITE!'){
		if(prevMessage == '0'){
			console.log('No message to WHITE!');
		}
		else{
			let whiteMessage = message.channel.messages.fetch(prevMessage).then(m => {
				m.react('⬜');
				m.react('🇼');
				m.react('🇭');
				m.react('🇮');
				m.react('🇹');
				m.react('🇪');
				m.react('840847797284372490');
			});
			prevMessage = '0';
		}
	}
	else{
		prevMessage = message.id;
	}
});
// Log our bot in using the token from https://discord.com/developers/applications
client.login(`${credentials.token}`);

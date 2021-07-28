'use strict';
// Import the discord.js module and others
const Discord = require('discord.js');
const fs = require('fs');
// Create an instance of a Discord client
const client = new Discord.Client();
// import token and database
const credentials = require('./auth.json');

const messageMap = new Map();
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
		if(!messageMap.has(message.channel.id)){
			console.log('No message to WHITE!');
		}
		else{
			let whiteMessage = message.channel.messages.fetch(messageMap.get(message.channel.id)).then(m => {
				m.react('⬜');
				m.react('🇼');
				m.react('🇭');
				m.react('🇮');
				m.react('🇹');
				m.react('🇪');
				m.react('840847797284372490');
			}).catch(e => {
				console.log(e);
			});
			messageMap.delete(message.channel.id);
		}
	}
	else if(message.content === 'MEXICAN!'){
		if(!messageMap.has(message.channel.id)){
			console.log('No message to MEXICAN!');
		}
		else{
			let whiteMessage = message.channel.messages.fetch(messageMap.get(message.channel.id)).then(m => {
				m.react('🟫');
				m.react('🇲');
				m.react('🇪');
				m.react('🇽');
				m.react('🇮');
				m.react('🇨');
				m.react('🇦');
				m.react('🇳'); 
				m.react('691116720181739552');
			}).catch(e => {
				console.log(e);
			});
			messageMap.delete(message.channel.id);
		}
	}
	else{
		messageMap.set(message.channel.id,message.id);
	}
});
// Log our bot in using the token from https://discord.com/developers/applications
client.login(`${credentials.token}`);

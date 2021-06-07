
const tmi = require('tmi.js');

const client = new tmi.client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'usuário com permissão de mod',
        password: 'tag de autenticação da twitch'
    },
    channels: ['canais que deseja usar']
});

client.connect();

client.on('message', onMessageHandler);

function onMessageHandler(channel, userstate, message, self){
    if (self) return; 

    if(message.toLowerCase()==='!hello'){
        client.say(channel,`@${userstate.username}, heya!`);
    } 
}

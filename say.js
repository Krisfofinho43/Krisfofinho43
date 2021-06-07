//esse comando é do servidor ice cream kingdom do discord
//o dono é o hyouka yt passem no canal dele



const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};



//link do servidor do discord dele


https://discord.gg/atpg4DPCbv

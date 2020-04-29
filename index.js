require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const fs = require('fs')
const files = fs.readdirSync('./momoas')

console.log(TOKEN)

bot.login('NzAwOTQ4MTYzNzQxMjIwODc0.XpqZdg.34i-VbZx-ebO_hhj3e39Ln87N_Q'); // fix this lmao

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.toLowerCase().includes('momoa') && msg.author.id !== '700948163741220874') {
    msg.channel.send("", randomMomoa());
  }
});

const randomMomoa = () => {
  const momoaCount = files.length
  const momoaNumber = Math.floor(Math.random() * momoaCount)

  console.log(`sending momoa #${momoaNumber + 1}`)

  return {
    files:
     [ `./momoas/${files[momoaNumber]}`]
  }
}

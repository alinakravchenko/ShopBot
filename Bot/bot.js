const {Telegraf} = require("telegraf");
const TOKEN = "6587063304:AAF0vq9a-e1AGvf4dExe8yNEU9OTzdilJiQ"
const bot = new Telegraf(TOKEN);

const web_link = "https://melodic-speculoos-fe238d.netlify.app"
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
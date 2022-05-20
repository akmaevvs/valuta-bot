String.prototype.replaceAll = function replaceAll(search, replace) {
  return this.split(search).join(replace);
};

const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU);

bot.start((ctx) => {
  let mes = ctx.startPayload.replaceAll("-", ".") || "No message";
  if (mes === "No message") {
    ctx.reply(
      `Вы отдаёте ${message[0]}: ${message[2]}\nВы получаете ${message[1]}: ${message[3]}`
    );
  } else {
    let message = mes.split("_");

    console.log(mes, message);
    ctx.reply(
      `Вы отдаёте ${message[0]}: ${message[2]}\nВы получаете ${message[1]}: ${message[3]}`
    );
  }
});

// Запуск бота
bot.launch();

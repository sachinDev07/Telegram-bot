const { Telegraf } = require("telegraf");
require("dotenv").config();
const axios = require("axios");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome to bhai bot"));

bot.on("sticker", (ctx) => ctx.reply("♥"));

bot.hears("bye", (ctx) => ctx.reply("bye bye 😎"));

bot.command("harsh", (ctx) => ctx.reply("Harsh play free fire game daily..."));

bot.command("how_are_you", (ctx) =>
  ctx.reply(
    "World is full of love and happiness, that's fine I can say I am fine. How about you ?"
  )
);

bot.hears("hi", (ctx) => ctx.reply("Hey there"));

bot.hears("sachin", (ctx) =>
  ctx.reply(
    "Sachin is good boy. He is noob because he doesn't know anything. Agar simple bolu to use kuch nahi aataa 😉"
  )
);

bot.hears("tarun", (ctx) =>
  ctx.reply(
    "Tarun is good boy. He daily practice web development. He has his own shop."
  )
);

bot.hears("ashish", (ctx) =>
  ctx.reply(
    "Ashish is a friend of Akhil. He is a shy person. His DSA skill is good. He knows many things about web development and programming. His friends calls him sometime by the name Pidu 😂"
  )
);

bot.hears("akhil", (ctx) =>
  ctx.reply(
    "Akhil is a nice guy. He knows many things about Market. His knowledge is very huge. He knows about the Stock market also. His knowledge is very huge in biology. Simple bolu to biology ke baarein main kuch bhi puch lo, sab bta dega 😎"
  )
);

bot.hears("dinesh", (ctx) =>
  ctx.reply(
    "Dinesh is a brilliant guy. His roll no is 008 ( double zero eight ). He has also a great knowledge. His friends call him by the name of Commando. "
  )
);

bot.hears("bapi", (ctx) =>
  ctx.reply(
    "Bapi is good person. He plays game daily. He has a big PC for game. He has two bike. He always remains happy."
  )
);

bot.hears("gourav", (ctx) =>
  ctx.reply(
    "Gourav is a good man. He has two shops(cosmetics and communication). He helps always his friends and this is the great quality. He runs bike very fast and this is not good for him. So i will suggest him that pls run bike slow."
  )
);

bot.command("fibonaccijs", async (ctx) => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/Sachin-RJ7/DSA-JS/master/6.%20Recursion/fibonacci.js"
  );
  ctx.reply(response.data);
});

bot.command("binarysearchjs", async (ctx) => {
    const response = await axios.get("https://raw.githubusercontent.com/akshitagit/JavaScript/master/Search/binarySearch.js");
    ctx.reply(response.data);
})

bot.command("store", async (ctx) => {
    const response = await axios.get('https://fakestoreapi.com/products/1');
    ctx.reply(response.data.title);
    ctx.reply(response.data.image);
    ctx.reply(response.data.description);
  });
  

bot.hears("i love you", (ctx) => ctx.reply("love you too bro 😘"));

bot.on("text", (ctx) => ctx.reply("I don't understand humans"));
bot.launch();

const { Telegraf } = require('telegraf');

// توكن البوت
const BOT_TOKEN = '7601704450:AAE-GgaiiaAviJGcw7ucy8pV_5ZvFk1KbZA';

const bot = new Telegraf(BOT_TOKEN);

// أمر start
bot.start((ctx) => {
  ctx.reply(
    'هلا بيك 👋\n' +
    'هذا بوت ابو جاسم 🤍\n\n' +
    '📌 طريقة الاستخدام:\n' +
    '/choose وبعدها الاسماء او الارقام\n\n' +
    'مثال:\n' +
    '/choose علي احمد محمد'
  );
});

// أمر الاختيار العشوائي
bot.command('choose', (ctx) => {
  const items = ctx.message.text.split(' ').slice(1);

  if (items.length < 2) {
    ctx.reply('❗ لازم تنطي شيئين على الأقل\nمثال:\n/choose 1 2 3');
    return;
  }

  const result = items[Math.floor(Math.random() * items.length)];
  ctx.reply(`🎯 الاختيار العشوائي هو:\n➡️ ${result}`);
});

// تشغيل البوت
bot.launch();
console.log('🤖 بوت ابو جاسم شغال...');

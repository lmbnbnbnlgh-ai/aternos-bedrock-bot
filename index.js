const bedrock = require('bedrock-protocol');

function createBot() {
  console.log("جاري محاولة اتصال البوت بالسيرفر...");
  
  const client = bedrock.createClient({
    host: 'data8957.aternos.me', 
    port: 19132,                  
    username: 'Aternos_Bot_247', 
    offline: true                 
  });

  client.on('join', () => {
    console.log('تم دخول البوت إلى السيرفر بنجاح وهو الآن يعمل لابقائه متصلاً!');
  });

  // إعادة الاتصال التلقائي في حال تم طرد البوت أو أغلق السيرفر
  client.on('close', (reason) => {
    console.log(`انفصل البوت بسبب: ${reason}. جاري إعادة المحاولة بعد 30 ثانية...`);
    setTimeout(createBot, 30000);
  });

  client.on('error', (err) => {
    console.log(`حدث خطأ في البوت: ${err.message}`);
  });
}

createBot();

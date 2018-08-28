client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var euro = JSON.parse(body);
      message.channel.send(`Dolar satış: ${info.selling} \nDolar alış: ${info.buying} \n\nEuro satış: ${euro.selling}TL \nEuro alış: ${euro.buying}TL`)    }
})
    }
})
    }
});

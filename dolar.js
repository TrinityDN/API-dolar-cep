fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{
    return resposta.json();
}).then(economia => {
    console.log(economia);
    document.getElementById("dolar").innerHTML = '$ ' + economia.USDBRL.bid;
    document.getElementById("codigo").innerHTML = economia.USDBRL.code;
    document.getElementById("nome").innerHTML = economia.USDBRL.name;
})
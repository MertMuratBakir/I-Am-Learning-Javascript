let sonuc

sonuc = 10;
sonuc = "10";

sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");

sonuc = isNaN("10a"); 

let sayi = 15.12345667;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.min(2,5,6,8,7);
sonuc = Math.max(2,5,6,8,7);
sonuc = Math.floor(Math.random() * 10 + 1);






console.log(typeof sonuc);
console.log(sonuc);

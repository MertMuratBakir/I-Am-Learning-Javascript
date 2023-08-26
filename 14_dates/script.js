let simdi = new Date();     // şimdiki tarih - saat bilgisini getirir.

// Get Methods

sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();     // 0: pazar 6: cumartesi.
sonuc = simdi.getFullYear();// yıl
sonuc = simdi.getHours();   // saat
sonuc = simdi.getTime();    // 

// Set Methods
simdi.setFullYear(2025);
simdi.setMonth(6);          // 0: ocak 
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(2001, 9, 29);


let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; //saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;
console.log(sonuc);
console.log(typeof sonuc);


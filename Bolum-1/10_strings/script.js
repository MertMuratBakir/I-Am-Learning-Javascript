let ad = "Mert Murat";
let soyad = "Bakır";
let yas = "22";
let sehir = "Ankara";

// let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + "'da yaşıyorum." + ' Mezuniyete ' + (25 - yas) + " yılım kaldı.";

// backtick

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${mezuniyet}`;


// turnery operators

let mezuniyet = (25 - yas > 0) ? "Mezun olmanıza " + (25 - 22) + " yıl kaldı." : "Zaten mezun oldunuz.";

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${mezuniyet}`;


console.log(mesaj);

// tanımlamış olduğumuz fonksiyonu çağırmazsak konsola yazdırdığımız şeyler terminale yazdırılmaz.
// selamlama("buraya yazılanlar parametredir.")

// function selamlama() {
//     console.log("merhaba");  
// }
// selamlama();

// function selamlama(msg) {
//     console.log(msg);  
// }
// selamlama("selam");
// selamlama("merhaba");
// selamlama("iyi günler");
// selamlama();



function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasMert = yasHesapla(2001);

console.log(yasMert);


function mezuniyeteKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 24 - yas;


    if (kalan_sene > 0) {
        console.log(`${isim}, mezun olmanıza ${kalan_sene} yıl kaldı.`)
    } else {
        console.log("Tebrikler.")
    }
}

mezuniyeteKacYilKaldi(2001, "Mert")
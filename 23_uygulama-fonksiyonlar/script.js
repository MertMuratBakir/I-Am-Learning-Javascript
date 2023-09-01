// 1- kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeYazdir(kelime, adet) {
    for(let i=0; i < adet; i++) {
        console.log(kelime);
    }
}

kelimeYazdir("merhaba", 5);

// 2- dikdörtgen alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`
}



let sonuc = alanCevreHesapla(20,40);
// console.log(sonuc);

// 3- yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTuraAt() {
    let random = Math.random(); // 0-1

    if(random < 0.5){
        console.log("Yazı");
    } else {
        console.log("Tura");
    }
    console.log(random);
}

yaziTuraAt();

// 4- kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi) {
    let sayilar = [];

    for(let i = 2; i < sayi; i++) {
        if(sayi % i == 0) {
            sayilar.push(i);
        }
    }

    return sayilar;


}

console.log(tamBolenler(10));

// 5- değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(a, b) {
    return a + b;
}

console.log(toplam(2,5));
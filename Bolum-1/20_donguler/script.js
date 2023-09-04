
    // let toplam = 0;

    // for (let i = 0; i <= 10; i++) {
    //     toplam += i;
    // }

    // console.log(toplam);

let sayilar = [1,4,5,8,4,3,5,8,9];

for(let i = 0; i < 6; i++) { // altıncı index'e kadar yazdırılır.
    console.log(sayilar[i]);
}

for(let i = 0; i < sayilar.length; i++) { // karakter sayısı kadar yazdırılır.
    console.log(sayilar[i]);
}


let toplam = 0;

// for(let i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
// }


// for(let index in sayilar) { // sayilar dizisinin index numaralarına ulaşılır.
//     console.log(index);
// }


// index numaralarına ulaşmadan sayılara ulaşarak toplam alınabilir.

for (let sayi of sayilar) { 
    toplam += sayi;
}

console.log(toplam);

// ----------------------------------------------------------------

let user = {
    "name": "Mert Murat Bakır",
    "username": "mmb",
    "password": "dgsak",
    "email": "info@mmb.com",
}                           // user içerisindeki bilgilere ulaşılabilir.

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

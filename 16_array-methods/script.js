let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// eleman silme
// sonuc = ogrenciler.pop();   // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift(); // ilk eleman silinir.


// eleman ekleme
// sonuc = ogrenciler.push("sena"); // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman eklenir.

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3); // bu yöntem ile dizi elemanları birleştirilebilir.

// sonuc = markalar1.splice(0, 0, markalar2); // 0'ıncı indexten başla, 0 eleman sil, markalar2'yi üzerine ekle.
// sonuc = markalar1.splice(0, 1, "bmw", "audi");
sonuc = markalar1.splice(0, 1)

console.log(sonuc);
console.log(markalar1); 
var isim = "ahmet"; // global scope
const adres = "İstanbul";


adres = "Ankara";

function yazdir() {
    var isim = "ayşe";
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

if(true) {
    var isim = "Zeynep";
    console.log(isim); 
}

console.log(isim);

yazdir();

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (let, const)
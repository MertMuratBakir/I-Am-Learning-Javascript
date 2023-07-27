let ogrenci1_Ad = "melih Cihan"
let ogrenci1_Soyad = "Koç"
let ogrenci1_dogumTarihi = "2001"
let ogrenci1_mat1 = 70;
let ogrenci1_mat2 = 70;
let ogrenci1_mat3 = 80;
let ogrenci1_ortalama = (ogrenci1_mat1 + ogrenci1_mat2 + ogrenci1_mat3) / 3
console.log (parseInt(ogrenci1_ortalama));
console.log (typeof ogrenci1_ortalama);
console.log(ogrenci1_ortalama >= 50);


let ogrenci2_Ad = "Eren"
let ogrenci2_Soyad = "Alagöz"
let ogrenci2_dogumTarihi = "2003"
let ogrenci2_mat1 = 40;
let ogrenci2_mat2 = 40;
let ogrenci2_mat3 = 50;
let ogrenci2_ortalama = (ogrenci2_mat1 + ogrenci2_mat2 + ogrenci2_mat3) / 3
console.log (parseInt(ogrenci2_ortalama));
console.log (typeof ogrenci2_ortalama);
console.log(ogrenci2_ortalama >= 50);



let suankiYil = new Date().getFullYear();

// parseint tamsayı sonucu üretir.

let ogrenci1_yas = suankiYil - parseInt(ogrenci1_dogumTarihi);
let ogrenci2_yas = suankiYil - parseInt(ogrenci2_dogumTarihi);

console.log(ogrenci1_yas);
console.log(ogrenci2_yas);
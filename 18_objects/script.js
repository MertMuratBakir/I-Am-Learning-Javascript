  let kullaniciA = {
    "ad": "Sadık",
    "soyad": "Turan",
    "yas": 38,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "sport"]
  };

  let kullaniciB = {
    "ad": "Çağdaş",
    "soyad": "Turan",
    "yas": 10,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "sport"]
  };

  let sonuc;

  sonuc = kullaniciA.ad;
  sonuc = kullaniciA.soyad;
  sonuc = kullaniciA.yas;
  sonuc = kullaniciA.adres;
  sonuc = kullaniciA.adres.sehir;
  sonuc = kullaniciA.adres.ilce;
  sonuc = kullaniciA.hobiler[0];
  sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi": "samsung_s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung_s23",
        "urun_fiyat": 15000
    }
];

sonuc = urunler[0].urun_adi
sonuc = urunler[0].urun_fiyat

sonuc = urunler[1].urun_adi
sonuc = urunler[1].urun_fiyat

console.log(sonuc);
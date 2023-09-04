let username = "mertbakir";
let password = "1234";

// let isLoggedin = (username == "mrtbkr");
// username "mertbakir" olduğu için kullanıcı yanlış girerse eğer else koşulu çalışacaktır.


// let isLoggedin = true; true değeri atadık

if ((username == "mrtbkr")) {  // değerimiz true ise if çalışır ve ekranda "uygulamaya giriş yapıldı" yazar.
    if (password == "1234")
    {
        console.log("uygulamaya giriş yapıldı.")
    }
} 

// if (!isLoggedin) {  -- başına "!" geldiği için değerin tersini verecek. --
//     console.log("merhaba")
// }

else { // değerimiz false ise ekranda else koşul ifadesinde yer alan "merhaba" yazısını görürüz.
    console.log("uygulamaya giriş başarısız.")
}
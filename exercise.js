
//path bilgisi;
console.log(document.URL)
console.log(document.head)
console.log(document.body)

//Arkaplan renklendirmek için;
document.body.style.backgroundColor = "aqua"

//Kullanıcıdan Veri girişi isteyeceğimiz zaman;
let fullName = promt("Lutfen Adinizi Giriniz: ")
let greeting = document.querySelector ("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`

//Birden fazla class eklemek;
greeting.classList.add("text-primary")
greeting.classList.add("new-info","second-class","third-class") //birden fazla class eklemek.
////////////////////////////////////////////////////
///////////////////////////////////////////////////

//==Eşitse
console.log("==:", price==1 )

//=== Hem değeri, hemde türü eşitse
console.log("=== :" , price===1)

//!=Eşit değilse
console.log(user !="guest")

//<Küçükse
console.log("price <= 100" , price < 100)

//IF-ELSE KOŞU YAPISI
let username = prompt ("Kullanıcı Adını Giriniz:")

if (username.lenght) {
    console.log(`Kullanici Bilginiz ${username}`)
}else{
console.log("bilgi yok")
}

//////////////////////////////////////////

let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}
//////////////////////////////////////////////////
///////////////////////////////////////////////////

// ILK FONKSİYONUMUZU TANIMAK :

function helloWorld() {   //helloWorld adında bir parametre aldı
    console.log ("Hello World")
}

//
function printHello(name){                		 //name adında bir parametre aldı
    console.log(“Merhaba” + name);  	
}
printHello("Şafak");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

//
function toplama (a , b) // a ve b toplanacak iki sayıyı temsil eden fonksiyon parametreleri(girdileri)
 {  
    var sonuc = a+b; // Fonksiyonda aldığımız parametrelerle yaptığımız işlem
	return sonuc;  	// Herhangi iki sayının toplamından elde edeceğimiz işlem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
 }        

 //
 //FAT ARROW FUNCTION
 //Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların hervbirini 1'den başlayarak alt alta yazalım.

 const seriesList = list => {
  
    list.forEach((series, index) => {
      console.log(`${index+1}. ${series}`) 
    });
  };
  
  seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);
  /* output:
  1. Firefly
  2. The Mandalorian
  3. Breaking Bad
  */
 //

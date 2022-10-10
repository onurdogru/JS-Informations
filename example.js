//Koşullarla Çalışmak Bölüm Sonu Egzersizi :

/*
1- prompt ile aldığın bilgiye göre aşağıdaki yapiyi kullanarak notun bilgisini #info'ya yazdir.

AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2-kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3-ff bilgisinde üzgün sürat ikonu çıkart, diğerlerinde ise gülücük olsun :)
4-ff class bilgisi text-danger, diğerlerinin ise text-primary olsun.

*/
///////////////////////////////////////////////
//////////////////////////////////////////////

//ANA KURALLAR AŞAĞIDADIR ;

let examGrade = prompt("Puani Girin")
let textInfo;

//Aşağıdaki if bloğunun içine almamız gereklidir.
if(examGrade>=0 && examGrade <= 100)
{
    if(examGrade >=90) 
{
textInfo = "AA"
}

else if (examGrade >=85)
{
    textInfo = "BA"
}

else if (examGrade >=80)
{
    textInfo = "BB"
}
console.log(textInfo)
}

////////////////////////////////
//FONKSİYONLAR GENEL TEKRAR ARTTIR/AZALT ÖRNEĞİ KODLARI

//İLK BAŞTA TANIMLAMALARIMIZI YAPARIZ 2.ADIM

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

//3.ADIM HTML TARAFINI AKTİF ETME.

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click" , clickEvent)
decreaseDOM.addEventListener("click" , clickEvent)

function.clickEvet() {
    console.log(this.id)
    if (this.id=="increase") {
        counterDOM.innerHTML = counter +=1
    } else {
        counterDOM.innerHTML = counter -=1
    }

}



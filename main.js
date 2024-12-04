
let sinav_puani = 90;
let sonuc;
if (sinav_puani >= 90 && sinav_puani <= 100) {

    sonuc = 'A+'

} else if (sinav_puani >= 80 && sinav_puani < 90) {

    sonuc = "B+"

} else if (sinav_puani >= 70 && sinav_puani < 80) {

    sonuc = "C"

} else if (sinav_puani >= 60 && sinav_puani < 70) {

    sonuc = "D"

} else if (sinav_puani >= 50 && sinav_puani < 60) {

    sonuc = "F"

} else {

    sonuc = " Bu dersten kaldin"
}
if (sonuc) {
    console.log("Derece: " + sonuc);


    switch (sonuc) {
        case 'A':
            console.log("Mükemmel!");
            break;
        case 'B':
            console.log("Çok iyi!");
            break;
        case 'C':
            console.log("İyi!");
            break;
        case 'D':
            console.log("Zorla geçti.");
            break;


    }
}

let notlar=[ 80, 60, 12, 55, 98 ]
let toplam_not=0;
for(let i=0; i<notlar.length; i++){ 

    toplam_not+=notlar[i]
}

let ortalama = toplam_not / notlar.length;

console.log("Notlarin toplami: " + toplam_not);
console.log("Ortalama: " + ortalama.toFixed(3)); 
   
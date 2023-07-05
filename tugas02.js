/* 
Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4
nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga
untuk grade memiliki kondisi dengan ketentuan sebagai berikut:

  90 - 100 = A
  80 - 89 = B
  70 - 79 = C
  60 - 69 = D
  0 - 59 = E
*/

const matematika = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let total = matematika + bahasaIndonesia + bahasaInggris + ipa;
const avrg = total / 4;

console.log(`Rata-rata = ${avrg}`);

if (avrg >= 90) {
  console.log("Grade = A");
} else if (avrg >= 80) {
  console.log("Grade = B");
} else if (avrg >= 70) {
  console.log("Grade = C");
} else if (avrg >= 60) {
  console.log("Grade = D");
} else {
  console.log("Grade = E");
}

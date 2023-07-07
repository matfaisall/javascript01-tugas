const matematika = 89;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let total = matematika + bahasaIndonesia + bahasaInggris + ipa;
const avrg = total / 4;

if (typeof avrg !== "number" || isNaN(avrg)) {
  console.log("input harus berupa number");
} else {
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
}

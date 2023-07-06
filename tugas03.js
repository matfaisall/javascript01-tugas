const printSegitiga = 5;

if (typeof printSegitiga === "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    let tampung = "";
    for (let j = 1; j <= i; j++) {
      tampung += j;
    }
    tampung += "\n";
    console.log(tampung);
  }
} else {
  console.log("Data harus number");
}

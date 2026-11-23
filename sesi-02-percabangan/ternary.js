const pemakaian = Number(process.argv[2]);

let kategori;


if(pemakaian > 200) {
    kategori = "boros";
} else {
    kategori = "hemat";
}
console.log(`if/else → ${pemakaian} kwh: ${kategori}`);

const kategori2 = pemakaian > 200 ? "boros" : "hemat";
console.log(`ternary  → ${pemakaian} kwh: ${kategori2}`);

let kategori3;

if (pemakaian < 100) {
    kategori3 = "sangat hemat";
} else if (pemakaian <= 200) {
    kategori3 = "hemat";
} else {
    kategori3 = "boros";
}

console.log(`kategori3 → ${pemakaian} kwh: ${kategori3}`);
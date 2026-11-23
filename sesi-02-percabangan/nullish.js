// operator not
const sudahBayar = false;
console.log(`Belum Bayar ? ${!sudahBayar}`);

// cadangan jika tidak ada nilai
const metodeInput = process.argv[2];
const metode = metodeInput ?? "Tunai";
console.log(`Metode Bayar: ${metode}`);

// operator ??dan ||
const dendaAnda = 0;
console.log(`Pakai || : Rp: ${dendaAnda || 5000}`);
console.log(`Pakai ?? : Rp: ${dendaAnda ?? 5000}`);
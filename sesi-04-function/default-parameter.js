const hitungPPJ = (tagihan, persen = 0.03) => Math.round(tagihan * persen);

console.log(`PPJ Normal (3%) : Rp${hitungPPJ(365509).toLocaleString("id-ID")}`);
console.log(`PPJ Daerah X (5%) : Rp${hitungPPJ(365509, 0.05).toLocaleString("id-ID")}`);

const hitungTotal = (tagihan, ppj, biayaAdmin = 2500) => Math.round(tagihan + ppj + biayaAdmin);

const tagihanImam = 365509;
const ppjImam = hitungPPJ(tagihanImam);

console.log(`Total Normal      : Rp${hitungTotal(tagihanImam, ppjImam).toLocaleString("id-ID")}`);
console.log(`Total Tanpa Admin : Rp${hitungTotal(tagihanImam, ppjImam, 0).toLocaleString("id-ID")}`);

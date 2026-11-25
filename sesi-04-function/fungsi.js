function hitungTagihan(pemakaian, tarif) {
    const tagihan = Math.round(pemakaian * tarif);
    return tagihan;
}

const tagihanImam = hitungTagihan(253, 1444.70);
const tagihanDesiska = hitungTagihan(180, 1352);

console.log(`Tagihan Imam      : Rp${tagihanImam.toLocaleString("id-ID")}`);
console.log(`Tagihan Desiska   : Rp${tagihanDesiska.toLocaleString("id-ID")}`);
console.log(`Urutan dibalik    : ${hitungTagihan(1444.70, 253)}`);


// function hitungTagihanArrow(pemakaian, tarif) {
//     const tagihan = Math.round(pemakaian * tarif);
//     return tagihan;
// }




const hitungTagihanArrow = (pemakaian, tarif) => {
    const tagihan = Math.round(pemakaian * tarif);
    return tagihan;
}

const hitungPemakaian = (meterAwal, meterAkhir) => meterAkhir - meterAwal;  
const hitungTagihanPendek = (pemakaian, tarif) => Math.round(pemakaian * tarif);

console.log(`Bonus             : ${hitungTagihanPendek(hitungPemakaian(1450, 1703), 1444.70)}`);

console.log(`Arrow             : Rp${hitungTagihanArrow(253, 1444.70).toLocaleString("id-ID")}`);
console.log(`Pemakaian Imam    : ${hitungPemakaian(1450, 1703)} kWh`);
console.log(`Pemakaian Desiska : ${hitungPemakaian(3200, 3380)} kWh`);
console.log(`Pendek            : Rp${hitungTagihanPendek(253, 1444.70).toLocaleString("id-ID")}`);


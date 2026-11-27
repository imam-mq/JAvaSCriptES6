const tentukanTarif = (daya) => {
    switch (daya) {
        case 900:
            return 1352;
        case 1300:
        case 2200:
            return 1444.70;
        case 3500:
        case 5500:
            return 1699.53;
        default:
            return;
    }
};

const daftarPelanggan = [
    { id: "532110012345", nama: "Imam Mubaraq",  daya: 1300, pemakaian: 253 },
    { id: "532110067890", nama: "Desiska Awlia", daya: 900,  pemakaian: 80 },
    { id: "532110099999", nama: "Mubaraq Imam",  daya: 2200, pemakaian: 1200 },
    { id: "532110055555", nama: "Awlia Zahwa",   daya: 1300, pemakaian: 180 },
];

const daftarNama2 = daftarPelanggan.map((pelanggan) => pelanggan.nama);
const daftarTagihan = daftarPelanggan.map((pelanggan) => Math.round (pelanggan.pemakaian * tentukanTarif(pelanggan.daya)));
console.log("map    :", daftarNama2);
console.log(daftarTagihan);

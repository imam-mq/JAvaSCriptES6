const daftarPelanggan = [ 
    { id: "532110012345", nama: "Imam Mubaraq", daya: 1300, tunggakan: 0 },
    { id: "532110067890", nama: "Desiska Awlia", daya: 900, tunggakan: 250000 },
    { id: "532110099999", nama: "Mubaraq Imam", daya: 2200, tunggakan: 0},
    { id: "532110055555", nama: "Awlia Zahwa", daya: 1300, tunggakan: 475000 },
];

console.log("--- Pelanggan Menunggak ---");

let totalTunggakan = 0;
let jumlahMenunggak = 0;

for (const pelanggan of daftarPelanggan) {
    if (pelanggan.tunggakan > 0) {

        console.log(`Nama : ${pelanggan.nama} Rp${pelanggan.tunggakan}`);
        jumlahMenunggak ++;
        totalTunggakan += pelanggan.tunggakan;

    };
};

console.log(`Jumlah Menunggak : ${jumlahMenunggak} pelanggan`);
console.log(`Tunggakan Anda Rp${jumlahMenunggak.toLocaleString("id-ID")} Rp${totalTunggakan.toLocaleString("id-ID")}`);
let sisaTunggakan = 1000000;
const cicilanPerluban = 300000;
let bulan = 0;
let bayarBulanIni;

while (sisaTunggakan > 0) {
    bulan ++;

    if (sisaTunggakan >= cicilanPerluban) {
        bayarBulanIni = cicilanPerluban;
    } else {
        bayarBulanIni = sisaTunggakan;
    }

    sisaTunggakan -= bayarBulanIni;

    console.log(`Bulan ${bulan}: bayar Rp${bayarBulanIni.toLocaleString("id-ID")}, sisa Rp${sisaTunggakan.toLocaleString("id-ID")}`);
    // console.log(`Bulan ${bulan}: sisa Rp${sisaTunggakan.toLocaleString("id-ID")}`);
}

console.log(`Lunas dalam ${bulan} bulan`);
const daya = Number(process.argv[2]);

let tarifPerKwh;

switch (daya) {
    case 900:
        tarifPerKwh = 1352;
        break;
    case 1300:
    case 2200:
        tarifPerKwh = 1444.70;
        break;
    case 3500:
        tarifPerKwh = 1699.53;
        break;
    case 5500:
        tarifPerKwh = 1699.53;
        break;
    default:
        tarifPerKwh = 0;
}

console.log(`Daya ${daya} VA → tarif Rp${tarifPerKwh.toLocaleString("id-ID")}/kwh`);
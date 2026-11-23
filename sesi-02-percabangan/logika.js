const daya = Number(process.argv[2]);
const pemakaian = Number(process.argv[3]);

const depatSubsidi = daya === 900 && pemakaian < 100;
console.log(`Daya ${daya} VA, ${pemakaian} kwh`);
console.log(`Daya subsidi? ${depatSubsidi}`);

const perluSurvei = pemakaian === 0 || pemakaian > 1000;
console.log(` Perlu Survei ? ${perluSurvei}`);
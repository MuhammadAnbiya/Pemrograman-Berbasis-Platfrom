const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

async function main() {
    let jawab = "y";

    do {
        let umur, tinggi, harga = 0, keterangan = "";

        // Input Umur
        umur = parseInt(await askQuestion("Masukkan umur Anda: (Dalam Tahun) "));

        // Pengecekan umur dan tinggi badan
        if (umur <= 1) {
            keterangan = "Dilarang masuk!";
            console.log(keterangan);
            continue;
        } else {
            tinggi = parseInt(await askQuestion("Masukkan tinggi badan Anda: (Dalam Cm) "));
            if (umur <= 3) {
                harga = 30000;
                if (tinggi > 70) {
                    harga += 10000;
                }
            } else if (umur <= 7) {
                harga = 40000;
                if (tinggi > 120) {
                    harga += 15000;
                }
            } else if (umur <= 10) {
                harga = 50000;
                if (tinggi > 150) {
                    harga += 20000;
                }
            } else {
                harga = 80000;
            }
        }

        // Output Hasil
        console.log(`Umur anak: ${umur}`);
        console.log(`Tinggi anak: ${tinggi}`);
        console.log(`Tarif harga untuk bermain di wahana Disney Land: ${harga}`);

        // Perulangan Program
        jawab = (await askQuestion("Apakah Anda ingin mencoba lagi? Y/N: ")).toLowerCase();
    } while (jawab === "y");

    rl.close();
}

main();

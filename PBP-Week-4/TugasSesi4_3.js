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
        let nomorPunggung;
        let posisiSatu = "-";
        let posisiDua = "-";
        let posisiTiga = "-";

        // Input Nomor Punggung
        nomorPunggung = parseInt(await askQuestion("Masukan nomor punggung: "));

        // Pengecekan Posisi
        if (nomorPunggung % 2 === 0) {
            posisiSatu = "target attacker";
            if (nomorPunggung >= 50 && nomorPunggung <= 100) {
                posisiDua = "berhak dipilih menjadi captain team";
            }
        } else if (nomorPunggung % 2 === 1) {
            posisiSatu = "defender";
            if (nomorPunggung > 90) {
                posisiDua = "Playmaker";
                if (nomorPunggung % 3 === 0 && nomorPunggung % 5 === 0) {
                    posisiTiga = "keeper";
                }
            } else if (nomorPunggung % 3 === 0 && nomorPunggung % 5 === 0) {
                posisiDua = "keeper";
            }
        }

        // Output Posisi
        console.log(`Angka ${nomorPunggung} bisa berfungsi sebagai posisi:`);
        console.log(`Posisi satu : ${posisiSatu}`);
        console.log(`Posisi dua  : ${posisiDua}`);
        console.log(`Posisi tiga : ${posisiTiga}`);

        // Tanya apakah ingin mengulangi
        jawab = (await askQuestion("Apakah anda ingin mencoba lagi? (Y/N): ")).toLowerCase();
    } while (jawab === "y");

    rl.close();
}

main();

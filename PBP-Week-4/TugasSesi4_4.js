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
        const lariPermenit = 12;
        const pushUpPermenit = 6.66666667;
        const plankPermenit = 5;
        let totalKalori = 0;

        // Input waktu olahraga dari pengguna
        let lari = await askQuestion("Waktu lama lari (dalam menit): ");
        let pushUp = await askQuestion("Waktu lama push-up (dalam menit): ");
        let plank = await askQuestion("Waktu lama plank (dalam menit): ");

        let dLari = parseFloat(lari);
        let dPushUp = parseFloat(pushUp);
        let dPlank = parseFloat(plank);

        // Menghitung total kalori
        if (dLari > 0) {
            totalKalori += dLari * lariPermenit;
        }
        if (dPushUp > 0) {
            totalKalori += dPushUp * pushUpPermenit;
        }
        if (dPlank > 0) {
            totalKalori += dPlank * plankPermenit;
        }

        // Menampilkan jumlah kalori yang terbakar
        console.log("Jumlah kalori yang anda bakar: " + Math.floor(totalKalori));

        // Menanyakan apakah pengguna ingin mencoba lagi
        jawab = (await askQuestion("Apakah anda ingin mencoba lagi? (Y/N): ")).toLowerCase();
    } while (jawab === "y");

    rl.close();
}

main();

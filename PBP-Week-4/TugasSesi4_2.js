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
        let nilaiCoding;
        let nilaiInterview;
        let hasilCoding = "";
        let hasilInterview = "";

        // Input nilaiCoding Tes Coding
        nilaiCoding = parseInt(await askQuestion("Masukan nilaiCoding Skala 0-100: "));

        // Pengecekan hasilCoding nilaiCoding Tes Coding
        if (nilaiCoding > 80) {
            hasilCoding = "LOLOS";
        } else if (nilaiCoding >= 60 && nilaiCoding <= 80) {
            hasilCoding = "DIPERTIMBANGKAN";
        } else if (nilaiCoding < 60) {
            hasilCoding = "GAGAL";
        }

        // Pengecekan nilaiCoding Interview
        nilaiInterview = await askQuestion("Masukan nilai Interview (Huruf): ");
        nilaiInterview = nilaiInterview.toLowerCase();

        if (nilaiInterview === "a" || nilaiInterview === "b") {
            hasilInterview = "LOLOS tes Interview";
        } else {
            hasilInterview = "GAGAL tes Interview";
        }

        // Hasil Akhir
        nilaiInterview = nilaiInterview.toUpperCase();
        if ((hasilCoding === "LOLOS" || hasilCoding === "DIPERTIMBANGKAN") && (hasilInterview === "LOLOS tes Interview")) {
            console.log(`Nilai Tes Coding Kamu: ${nilaiCoding} (${hasilCoding})\n` +
                `Nilai Tes Interview Kamu: ${nilaiInterview} (${hasilInterview})\n` +
                "Selamat Kamu Berhasil Menjadi Calon Programmer!");
        } else {
            console.log(`Nilai Tes Coding Kamu: ${nilaiCoding} (${hasilCoding})\n` +
                `Nilai Tes Interview Kamu: ${nilaiInterview} (${hasilInterview})\n` +
                "Maaf Kamu Belum Berhasil Menjadi Calon Programmer.");
        }

        jawab = (await askQuestion("Apakah anda ingin mencoba lagi? (Y/N): ")).toLowerCase();
    } while (jawab === "y");

    rl.close();
}

main();

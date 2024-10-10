const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jawab = "y";

const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

async function main() {
    do {
        let nama = await askQuestion("Masukan nama anda: ");
        let umur = parseInt(await askQuestion("Masukan umur anda: "));
        let tempatTinggal = await askQuestion("Dimana tempat anda tinggal : \n1. Nevada\n2. New York\n3. Havana" +
            "\n4. New Jersey\n5. Manhattan\n6. California\n7. Detroit\n8. Boston\n9. Lainnya \n");
        tempatTinggal = tempatTinggal.toLowerCase();
        let uangTabunganDalamDollar = parseInt(await askQuestion("Berapa jumlah uang anda (Dalam Dolar): "));

        let pangkat = "Warga Biasa";

        // Uji Coba DON
        if ((umur > 40) && (uangTabunganDalamDollar > 10000000) &&
            (tempatTinggal === "nevada" || tempatTinggal === "new york" || tempatTinggal === "havana")) {
            pangkat = "Don";
        } 
        // Uji Coba Underboss
        else if ((umur >= 25 && umur <= 40) && (uangTabunganDalamDollar >= 1000000 && uangTabunganDalamDollar <= 2000000) &&
            (tempatTinggal === "new jersey" || tempatTinggal === "manhattan" || tempatTinggal === "nevada")) {
            pangkat = "Underboss";
        } 
        // Uji Coba Capo
        else if ((umur >= 18 && umur <= 24) && (uangTabunganDalamDollar < 1000000) &&
            (tempatTinggal === "california" || tempatTinggal === "detroit" || tempatTinggal === "boston")) {
            pangkat = "Capo";
        }

        if (pangkat === "Don" || pangkat === "Underboss" || pangkat === "Capo") {
            console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}.`);
        } else {
            console.log(`${nama} tidak mencurigakan.`);
        }

        jawab = (await askQuestion("Apakah anda ingin mencoba lagi? (Y/N): ")).toLowerCase();
    } while (jawab === "y");

    rl.close();
}

main();

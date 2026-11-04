// Tipe Data Primitif:
// Typescript menggunakan tipe data di JavaScript, sehingga semua tipe data seperti string, number, boolean otomaatis didukung oleh TypeScript
// float, int, complex menjadi number disini
// Karena Typescript adalah stringly Type Languange, 
// oleh karena itu saat kita membuat variable, kita harus menentukan tipe data dari variable nya
// Dan jika kita sudh menentukan tipe datanya, kita tidka boleh mengubah variable tersebut menjadi tipe data yang berbeda
// TypeScript bisa secara otomatis mendeteksi tipe data yang sedang digunakan, tapi kita juga bisa menentukan secara eksplisit menggunakan
// const namaVariable: tipedata = value

function TipeDataPrimitif(): void{
    const name: string = "Faiz Hannan Hakim";
    const angka: number = 12;
    const benar: boolean = true; 

    console.info(name);
    console.info(angka);
    console.info(benar);
}

TipeDataPrimitif()

// npx tsx 1A.tipe-data-primitif
// sama seperti di javascript di typescript juga mendukung pembuatan function
// cara pembuatan function di typescript pun sama dengan di javascript
// salah satu yang membedakan adalah, pada parameter kita perlu menentukan tipe data dan pada function kita juga perlu menentukan tipe data return value nya
// pada kasus function tersebut kita tidak mengembalikan value maka kita bisa menggunakan tipe data void
const tanpaReturn = () => {
    console.info("Haloo ini tanpa return ");
};
const denganReturn = () => {
    return "Halo ini dengan return";
};
function MasukanTulisan(input) {
    return input + "ini inputan nya";
}
let anjay = 12;
let akhir = anjay;
export function fallBackParameter(nama = "Faiz") {
    return `Halo ${nama}`;
}
export function restParameter(...sum) {
    let total = 0;
    for (const value of sum) {
        total += value;
    }
    return total;
}

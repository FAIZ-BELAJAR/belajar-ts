// Function
// Sama seperti di javascript di typescript juga mendukung pembuatan function
// Cara pembuatan function di typescript pun sama dengan di javascript
// Salah satu yang membedakan adalah, pada parameter kita perlu menentukan tipe data dan pada function kita juga perlu menentukan tipe data return value nya
// Pada kasus function tersebut tidak mengembalikan value, kita bisa menggunakan tipe data void, atau tidak perlu menyebutkan sama sekali seperti di javascript

const tanpaReturn = ():void => {
    console.info("Haloo ini tanpa return ")
}

const denganReturn = ():string => {
    return "Halo ini dengan return"
}

type tulisan = number | string;

function MasukanTulisan(input: tulisan): tulisan {
    return input + "ini inputan nya"
}

export function fallBackParameter(nama: string = "Faiz"):string {
    return `Halo ${nama}`
}

export function restParameter(...sum: Array<number>): number {
    let total = 0;
    for (const value of sum) {
        total += value
    }

    return total
}

function Function(): void {
    console.info(tanpaReturn())
    console.info(denganReturn())
    console.info(MasukanTulisan("Anjay"))
    console.info(fallBackParameter("Kocak"))
    console.info(fallBackParameter())
    console.info(restParameter(12,2,3,2,2,3,2,4,23,23,5,5,4))
}

// npx tsx 18R.function.ts

Function()
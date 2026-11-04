// sama seperti di javascript di typescript juga mendukung pembuatan function
// cara pembuatan function di typescript pun sama dengan di javascript
// salah satu yang membedakan adalah, pada parameter kita perlu menentukan tipe data dan pada function kita juga perlu menentukan tipe data return value nya

// pada kasus function tersebut kita tidak mengembalikan value maka kita bisa menggunakan tipe data void

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

let anjay: any = 12

let akhir: string = anjay as string;

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
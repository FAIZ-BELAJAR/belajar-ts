// function overloading adalah kemampuan untuk membuat function dengan nama yang sama, namun dengan parameter input yang berbeda
// di js, membuat satu function dengan input data yang berbeda dan output yang bisa menghasilkan yang berbeda sudah biasa di lakukan
// namun hal ini kadnag bisa membuat sebuah function tidak aman dan sulit di baca, karna menghasilkan return tipe data yang berbeda beda
// typescript memberikan kemampuan function overloading agar pembuatan function seperti ini lebih gampang dan aman dilakukan dan dibada kemudain harinya

export function callMe(value: number): number;
export function callMe(value: string): string;
export function callMe(value: any) {
    if (typeof value === "string") {
        return value
    } else if (typeof value === "number") {
        return value
    }
}
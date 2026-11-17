// Function Overloading
// Function overloading adalah kemampuan untuk membuat function dengan nama yang sama, namun dengan parameter input yang berbeda
// Di js, membuat satu function dengan input data yang berbeda dan output yang bisa menghasilkan yang berbeda sudah biasa di lakukan
// Namun hal ini kadnag bisa membuat sebuah function tidak aman dan sulit di baca, karna menghasilkan return tipe data yang berbeda beda
// ypescript memberikan kemampuan function overloading agar pembuatan function seperti ini lebih gampang dan aman dilakukan dan dibada kemudain harinya

 function callMe(value: number): number;
 function callMe(value: string): string;
 function callMe(value: any) {
    if (typeof value === "string") {
        return value
    } else if (typeof value === "number") {
        return value
    } else {
        return value
    }
}

function FunctionOverloading(){
    let apaya: any = {
        id: 0,
        nama: "anjay"
    }
    console.info(callMe(2))
    console.info(callMe("Kocak"))
    console.info(callMe(apaya))
}

// npx tsx 20T.function-overloading.ts

FunctionOverloading()
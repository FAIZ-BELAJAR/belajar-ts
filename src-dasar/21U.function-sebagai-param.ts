// Function sebagai parameter
// Sama seperti di javascript, di typescript juga kita bisa gunakan function sebagai parameter
// Hal ini sudah sering kita lakukan biasanya ketika memanggil function yang membutuhkan callback function lain nya 
// Pada typescript parameter yang berupa function perlu kita beri tahu bahwa parameter tersebut adalah function 
// Kita bisa gunakan function, interface atau bisa langsung sebutkan pada parameternya jumlah parameter dan return value function yang dibutuhkan

export function Pertambahan(nil1: number, nil2: number): number {
    return nil1 + nil2
}

export function Tambahin(fungsi: (nil1: number, nil2: number) => number, angka1:number, angka2:number):number {
    return fungsi(angka1, angka2)
}

function FunctionSebagaiParameter(){
    console.info(Tambahin(Pertambahan, 12, 8))
}

// npx tsx 21U.function-sebagai-param.ts

FunctionSebagaiParameter()
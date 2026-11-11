// Function Interface
// Di typescript, kita juga bisa membuat deklarasi function dalam bentuk interface 
// Dengan demikian ketika kita ingin membuat variable yang berisi function, kita bisa dengan mudeah menggunakan interface tersebut

export interface NumericFunction<T extends number> {
    (a1: T, a2: T): T
}

function functionInterface(){
    const tambah: NumericFunction<number> = (a, b) => {
        return a+b
    }

    const kurang: NumericFunction<number> = (a, b) => {
        return a-b
    }

    const kali: NumericFunction<number> = (a, b) => {
        return a*b
    }

    const bagi: NumericFunction<number> = (a, b) => {
        return a/b
    }

    const modulo: NumericFunction<number> = (a, b) => {
        return a%b
    }

    let a = tambah(12, 5) + modulo(22,3) + kali(20, 9) + bagi(22, 82) + kurang(11,2)

    console.info(a)
}

// npx tsx 12L.function-interface.ts

functionInterface()
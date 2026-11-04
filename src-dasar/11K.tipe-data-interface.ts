// Tipe Data Interface
// Interface adalah cara lain melakukan deklarasi data selain menggunakan Type
// Lantas kalo begitu, apa bedanya Interface dan Type
// Interface bisa dikembangkan dengan mudah dibanding Type
// Oleh karena itu, kebanyakan untuk tipe data custom, kebanyakn programmer TypeScript akan menggunakan Interface dibandingkan menggunakan Type
// interface
export interface Seller{
    id: number;
    name: string;
    address?: string;
}


// Objek
export var Orang : {
    id: number;
    name: string;
    address?: string;
}

// di typescipt kita juga bisa membuat deklarasi function dalam bentuk interface

interface AddFunction {
    (val1: number, val2: number): number
}

const add: AddFunction = (nilai1: number, nilai2: number): number => {
    return nilai1 + nilai2
}

function TipeDataInterface(): void{
    let seller: Seller = {
        id: 1,
    name: "paes",
    address: "mantap"
    }

    console.info(seller)
}

// npx tsx 11K.tipe-data-interface

TipeDataInterface()
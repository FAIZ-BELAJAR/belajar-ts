// Function Parameter
// Sama seperti di JS, function di typescript bisa memiliki banyak parameter, rest prameter, sampai default value 
// Fitur yang berbeda dengan javascript adalah di typescript setiap parameter wajib diisi, kecuali ktia tentukan sebagai optional menggunakan? (tanda tanya)

function sayHelleo(name: string = "Guest"): string {
    return `Hello ${name}`
}

function FunctionParameter(){
    console.info(sayHelleo("Faiz"))
}

// npx tsx 19S.function-parameter.ts

FunctionParameter()
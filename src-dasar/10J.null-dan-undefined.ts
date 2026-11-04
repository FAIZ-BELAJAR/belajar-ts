// Null dan Undefined
// Saat kita menggunakan ? pada variable atau parameter, secara otomatis kita bisa mengirim data undefined
// Tapi kadang, ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null

export function sayHello(name?: string | null | undefined) {
    if (name){
        console.info(`Hello${name}`)
    } else {
        console.info("Hello")
    }
}


function NullDanUndefined(): void {
    sayHello("Faiz")
    sayHello(undefined)
    sayHello(null)
}

// npx tsx 10J.null-dan-undefined

NullDanUndefined()
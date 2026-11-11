// Type Assertions
// Kadang kita sering bedada pada situasi dimana kita tahu tipe data yang akan kita gunakan namun typescript tidak tahu tipe data tersebut
// Seperti di kasus kita mendapatkan data dari API atau sesuatu yang mereturn nilai any
// Pada kasus ini kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci "as"
// Ini disebut dengan type assertions
// Tetapi hati hati dalam menggunakan type assertion karna berpotensi besar salah maka bisa error

interface Orang{
    nama: string;
    kekerenan: string;
}

function SiapaDia(o1: Orang): string{
    return `Dia bernama: ${o1.nama} dan keren bat jir dia bisa ${o1.kekerenan}`
}

function TypeAssertions(){
    const orang1: any = {
        nama: "Teddy",
        kekerenan: "Mantap"
    }
    
    let o1: Orang = orang1 as Orang;

    console.info(SiapaDia(o1))
}

// npx tsx 17Q.type-assertions.ts

TypeAssertions()
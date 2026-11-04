// kadang kita sering bedada pada situasi dimana kita tahu tipe data yang akan kita gunakan namun typescript tidak tahu tipe data tersebut
// seperti di kasus kita mendapatkan data dari API atau sesuatu yang mereturn nilai any
// pada kasus ini kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci "as"
export const person = {
    name: "Eko",
    age: 30
};
export const person2 = person; //typescript akan memaksa konversi ke tipe "Person"
// tetapi hati hati dalam menggunakan type assertion karna berpotensi besar salah maka bisa error

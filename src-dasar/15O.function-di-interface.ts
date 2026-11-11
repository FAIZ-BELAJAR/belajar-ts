// Function di interface
// Implementasi dari interface di javascript sebenernya adalah sebuah object
// Seperti yang kita tahu, di javascript, kita bisa menambahkan function sebagai attribute di object
// Hal ini juga bisa kita lakukan di interface 

interface Person {
    nama: string,
    sayHello (): string;
    sayHelloToOther(name: string): string;
}

function FunctionDiInterface(){
    const orang1: Person = {
        nama: "Faiz",
        sayHello: (): string =>{return `Halo saya ${orang1.nama}`}, 
        sayHelloToOther: (nama: string): string => {return `Halo ${nama} saya ${orang1.nama}`}
    }

    console.info(orang1.sayHello())
    console.info(orang1.sayHelloToOther("Nadia"))
}

// npx tsx 15O.function-di-interface.ts

FunctionDiInterface()
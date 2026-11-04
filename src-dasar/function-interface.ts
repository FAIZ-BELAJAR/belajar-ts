// implementasi dariinterface di javascript sebenernya adalah sebuah object
// seperti yang kita tahu di javascript kita bisa memasukan method/function ke dalam object

export interface Person {
    readonly name: string;
    age?: number;
    sayHello(name:string):string;
}

export const personnih: Person = {
    name: "Faiz",
    sayHello: function (name:string): string {
        return `hello ${name}, my name is ${this.name}`
    }
}


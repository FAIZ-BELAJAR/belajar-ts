// implementasi dariinterface di javascript sebenernya adalah sebuah object
// seperti yang kita tahu di javascript kita bisa memasukan method/function ke dalam object
export const personnih = {
    name: "Faiz",
    sayHello: function (name) {
        return `hello ${name}, my name is ${this.name}`;
    }
};

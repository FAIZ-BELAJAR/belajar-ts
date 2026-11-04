export function sayHello(name: String): String {
    return `Hello ${name}`
}

export function Hitung(angka: number[]): number{
    var hasil: number = 0;
    angka.forEach((v, _) => {
        hasil += v
    });

    return hasil
}
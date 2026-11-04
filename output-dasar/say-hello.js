export function sayHello(name) {
    return `Hello ${name}`;
}
export function Hitung(angka) {
    var hasil = 0;
    angka.forEach((v, _) => {
        hasil += v;
    });
    return hasil;
}

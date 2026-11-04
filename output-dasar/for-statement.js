export function PerulanganOf(...angka) {
    for (const nil of angka) {
        console.info(nil);
    }
}
export function PerulanganI(...angka) {
    for (let i = 0; i < angka.length; i++) {
        console.info(angka[i]);
    }
}
export function PerulanganIn(...angka) {
    for (const a in angka) {
        console.info(a);
    }
}

export function ItungAngka(angka: number[]): number {
    let hasil = 0
    for (const a of angka) 
    {
        hasil += a
    }

    console.log(hasil)

    return hasil
}
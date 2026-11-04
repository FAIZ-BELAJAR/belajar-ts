// Tipe Data Array
// Tipe data array di Typescript juga sama seperti di JavaScript , cara pembuatan nya dan penggunaan nya
// Di TS tipe data Array bisa menggunakan tanda TipeData[] atau Array<TipeData>

function TipeDataArray(): void{
    const names: string[] = ["Faiz", "Hannan", "Hakim"]
    const angkas: number[] = [1, 22.3, 21, 22/7, 21]
    const values: boolean[] = [true, false, false, false, true, true]

    names.forEach((nama: string, u: number) => {
        console.info(`nama: ${nama} adalah urutan ke ${u+1}`)
    })

    let total_angka: number = 0
    angkas.forEach((angka) => {
        total_angka += angka
    })

    console.info(`total angkas: ${total_angka}`)

    values.forEach((kebenaran: boolean, u: number) => {
        console.info(`urutan ke: ${u+1} ${kebenaran ? "benar" : "salah"}`)
    })
}

// npx tsx 2B.tipe-data-array

TipeDataArray()
// Tuple 
// Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan 
// Pada kasus tuple bersifat read only (tidak bisa diubah), kita bisa tambahkan kata kunci readonly

function TipeDataTuple(): void {
    const person: readonly [string, boolean, number] = ["Faiz", true, 1]

    person.forEach((d: string | boolean | number, u: number) => {
        switch (typeof d) {
            case "string":
                console.info(`tipe data dari index ke ${u} adalah string dengan isi ${d}`)
                break;
            case "boolean":
                console.info(`tipe data dari index ke ${u} adalah boolean dengan isi ${d}`)
                break;
        
                case "number":
                console.info(`tipe data dari index ke ${u} adalah number dengan isi ${d}`)
                break;
        
        
            default:
                break;
        }
    })
}

// npx tsx 3C.tipe-data-tuple

TipeDataTuple()

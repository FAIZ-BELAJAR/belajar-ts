// Object Type
// Pada kasus yang sederhana, kadang membuat alias terlalu bertele tele, kita juga bisa membuattipe data JavaScript Object secara langsung
// dengan mendeklarasikan detail type nya ketika membuat variable nya
// Hal ini disarankan pada kasus sederhana saja

function TipeDataObject(): void {
    const orang: {id: number, name: string} = {
        id: 1,
        name: "Faiz"
    }

    console.info(orang)
}

// npx tsx 7G.tipe-data-object

TipeDataObject()
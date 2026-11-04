// Union Type
// Seperti yang sudah kita tahu, JavaScript sebenarnya bisa menyipan berbagai jenis tipe data di variabel yang sama
// Namun di TypeScript, hal itu dilarang karena prakter yang buruk
// Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
// Secara otomatis TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya

function UnionType(): void {
    let sample : number | string | boolean;
    sample = 100
    console.info(typeof sample, `inilah isi sample: ${sample}`)
     sample = "Faiz"
    console.info(typeof sample, `inilah isi sample: ${sample}`)
     sample = true
    console.info(typeof sample, `inilah isi sample: ${sample}`)
    
}

// npx tsx 5E.tipe-data-union

UnionType()
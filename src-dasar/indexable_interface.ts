// interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti array atau object


interface StringArrayBiasa {
    [index: number]: string
}

interface StringObjekBiasa {
    [index: string]: string | number
}

export const ContohArray:StringArrayBiasa = ["Faiz","Hannan", "Hakim"] 

export const ContohObjek:StringObjekBiasa = {
    name: "Faiz",
    "Kelas": "Mantap"
}




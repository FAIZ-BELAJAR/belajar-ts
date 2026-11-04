// intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
// hal ini sangat cocok ketika kita tidak bisa melakukan extends pada interface
// kita bisa membuat type dengan menggunakan kata kunci &(dan)

export interface HasName{
    name: string;
}

export interface HasId{
    id: number;
}

export type Domain = HasId & HasName;

const domein: Domain = {
    name: "Faiz",
    id: 123
} //bisa seperti ini

export interface IdentitasKaryawan extends Domain {
    tanggal_lahir: Date,
    umur: number;
}
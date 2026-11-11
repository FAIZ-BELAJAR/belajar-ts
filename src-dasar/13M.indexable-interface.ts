// Indexable Interface
// Interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array atau Object

export interface Pegawai {
    id: number;
    nama: string;
    umur: number;
    divisi: string;
    pegawai_tetap: boolean;
}

export interface ListPegawai {
    [urutan: number]: Pegawai
}

function IndexableInterface(){
    const Lp: ListPegawai = [
        {
            id: 1,
            nama: "Faiz Hannan Hakim",
            umur: 21,
            divisi: "technology",
            pegawai_tetap: true,
        },
        {
            id: 2,
            nama: "Nadia Farranisa",
            umur: 22,
            divisi: "marketing",
            pegawai_tetap: true,
        }
    ]

    const ambilPegawai = (urutan: number): Pegawai | boolean => {
        if (urutan <= 0){
            return false
        }
        return Lp[urutan-1]
    }

    console.info(ambilPegawai(1))
    console.info(ambilPegawai(2))
}

// npx tsx 13M.indexable-interface.ts

IndexableInterface()


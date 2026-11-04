// Tipe Data any
// Saat kita menggunakan TypeScript, setiap jenis data idealnya ada deklarasi datanya
// Contoh saat kita ingin menggunakan tipe data JavaScript Object, idealnya harusnya ada ketentuan attribute yang dimilikinya, sedangkan di JavaScript hal itu tidak diwajibkan
// Pada kasus kita memang ingin membua tipe data yang bebad seperti di JavaScript, kita bisa gunakan tipe data Any
// Tipe data any tersebut menjadikan TypeScript tidak melakukan pengecekan apapun terhadap data tersebut
// Any juga sebenrnya kurang direkomendasikan dalam typescript karna justru mematikan fitur safe type nya

class Orang {
    public nama: string;
    protected umur: number; 
    private menikah: boolean;

    constructor(n: string, u: number, m: boolean){
        this.nama = n
        this.umur = u,
        this.menikah = m
    }

    tampilkan(): void {
        console.info(`nama: ${this.nama}, umur: ${this.umur}, menikah: ${this.menikah ? "sudah" : "belum"}`)
    }
}

function TipeDataAny(): void{
    let o1: any = new Orang("Faiz", 12, false)

    o1.tampilkan() // ini dianggap error dan gak sah sama typescript karna type script mengabaikan typescheck pada variable o1, tapi tetep aja method nya bisa dijalankan
}

// npx tsx 4D.tipe-data-any

TipeDataAny()
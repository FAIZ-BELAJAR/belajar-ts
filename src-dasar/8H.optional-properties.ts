//Optional Properties
// Secara Default, saat kita membuatattribute di Object atau Type, maka attribute tersebut wajib diisi nilainy
// Namun, kadang kadang tidak semua attribute itu wajib diisi nilainya
// Pada kasus attribute nya, tidak wajib diisi, kita bisa tambahkan tanda ?untuk menandakan bahwa itu adalah optional
// Contoh di sosmed tanggal lahir tak wajib diisi

type AkunSosmed = {
    id: number;
    username: string;
    tanggal_lahir?: string;
}

function OptionalProperties(): void {
    let orangNgisi: AkunSosmed = {
        id: 1,
        username: "ffaazi",
        tanggal_lahir: "11-09-1998"
    }

    let orangGaNgisi: AkunSosmed = {
        id: 2,
        username: "yuru",
    }

    console.info(orangNgisi)
    console.info(orangGaNgisi)
}

// npx tsx 8H.optional-properties


OptionalProperties()
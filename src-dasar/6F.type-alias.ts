// Type Alias
// Menggunakan tipe data Any sangat tidak direkomendasikan
// Biasanya kita akan menggunakan tipe data Any, jika memang datany kita gunakan misal dari library orang lain yang sudah tidak bisa diubah, atau memang ketika attribute nya tidak pasti datanya
// Pada kasus jika kita membuattipe data Javascript object sendiri, kita bisa membuat alias untuk struktur tipe data objectnya

type Categori = {
    id: string;
    name: string;
}

type Product = {
    id: string;
    name: string;
    price: number;
    category: Categori
}

function InformasiProduk(p: Product): void {
    console.info(`=== Informasi Produk ===`);
    console.info(`ID Produk   : ${p.id}`);
    console.info(`Nama Produk : ${p.name}`);
    console.info(`Harga       : Rp ${p.price.toLocaleString('id-ID')}`);
    console.info(`Kategori    : ${p.category.name} (ID: ${p.category.id})`);
}

function TypeAlias(): void {
    const dataAman: Product = {
        id: "76212",
        name: "Roti",
        price: 20000,
        category : {
            id: "112222",
            name: "makanan"
        }
    }

     const dataKurangAman: any = {
        id: "76212",
        name: "Roti",
        price: 20000,
        category : {
            id: "112222",
            name: "makanan"
        }
    }

    InformasiProduk(dataAman)
    InformasiProduk(dataKurangAman) // walau juga berhasil
}

// npx tsx 6F.type-alias

TypeAlias()
// Enum
// TypeScript memiliki tipe data enum, yaitu tipe data yang nilainya sudah pasti
// Tipe data ini tidak dimiliki di javascript
// Secara default tipe data enum ini akan dikonversi menjadi string di JavaScript, namun bisa juga dikonversi menjadi number

enum customertype {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

function TipeDataEnum(): void {
    const customer: {nama: string, type: customertype } = {
        nama: "faiz",
        type: customertype.GOLD
    } 

    console.info(customer)
}

// npx tsx 9I.tipe-data-enum

TipeDataEnum()
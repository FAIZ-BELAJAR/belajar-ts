// interface bisa melanjutkan (extends) ke interface lain

// secara otomatis attribute interface yang di lanjutkan dimiliki juga oleh interface tersebut

// ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

// contoh kasus 3 role berbeda namun kurang lebih memiliki attribute nya sama

export interface Employee {
    id: string;
    name: string;
    division?: number;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}

export const Menejer: Manager = {
    id: "JSCBBSCKS",
    name: "Faiz",
    numberOfEmployees: 100
}
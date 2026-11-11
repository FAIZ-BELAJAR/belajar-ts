// Extending Interface 
// Interface bisa melanjutkan atau extends(mewariskan) ke interface lain nya
// Secara otomatis attribute interface yang dilanjutkan yang dimiliki juga oleh interface tersebut
// Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks
export interface Employee {
    id: string;
    name: string;
    division?: number;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}

function ExtendingInterface(){
    let manager1: Manager = {
        id: "1",
        name: "Rudi hustono",
        division: 12,
        numberOfEmployees: 11,
    }

    console.info(manager1)
}

// npx tsx 14N.extending-interface.ts

ExtendingInterface()
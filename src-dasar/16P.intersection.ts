// Intersection
// Intersections meripakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain 
// Hal ini sangat cocok ketika kita tidak bisa melakukan extend pada interface
// Misal interface yang dibuat oleh library atau package orang lain dimana kita tidak bisa mengubah nya 
// Kita bisa membuat tipe baru dengan menggunakan kata kunci & (dan)

export interface HasName{
    name: string;
}

export interface HasId{
    id: number;
}

export type Domain = HasId & HasName;

function Intersections(){
    const domein: Domain = {
        name: "Faiz",
        id: 123
    }
    console.info(domein);
}

// npx tsx 16P.intersection.ts

Intersections()
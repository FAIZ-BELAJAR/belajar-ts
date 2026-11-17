// For LOOP
// Perulangan for di typescript sama saja seperti perulangan for di javascript
// Typescript mendukung semua for loop seperti for loop bisasa for in dan for of

export function PerulanganOf(...angka: number[]):void{
    for (const nil of angka){
        console.info(nil)
    }
}

export function PerulanganI(...angka: number[]):void{
    for(let i = 0; i < angka.length; i++){
        console.info(angka[i])
    }
}

export function PerulanganIn(...angka: number[]):void {
    for (const a in angka){
        console.info(a)
    }
}

function ForLoop(){
    PerulanganI(0,3,3,4,5,4,3,5,5,3,)
     PerulanganIn(0,3,3,4,5,4,3,5,5,3,)
      PerulanganOf(0,3,3,4,5,4,3,5,5,3,)
}

// npx tsx 25Y.for-loop.ts
ForLoop()
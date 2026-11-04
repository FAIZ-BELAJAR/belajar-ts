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
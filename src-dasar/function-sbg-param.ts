export function Pertambahan(nil1: number, nil2: number): number {
    return nil1 + nil2
}

export function Tambahin(fungsi: (nil1: number, nil2: number) => number, angka1:number, angka2:number):number {
    return fungsi(angka1, angka2)
}

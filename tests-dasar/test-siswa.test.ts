import type { Siswa } from "../src/tipe-data-alias";

describe('harusnya lulus', (): void => {
    it("should lulus", (): void =>{
        var budi: Siswa = {
            nama: "budi",
            umur: 18,
            lulus: false,
            
        }

        budi.lulus = true
        expect(budi).toBe({
            nama: "budi",
            umur: 18,
            lulus: true
            
        })
    })

    it("harusnya namanya faiz", () => {
        expect(Faiz).toBe({id: "282783", nama:"Faiz"})
    })
});

import { Hitung } from "../src/say-hello"
import { Faiz } from "../src/tipe-object-type";

describe("it should be perhitungan", (): void => {
    it("harusnye hasilnya 15", (): void => {
        expect(Hitung([5, 5, 5])).toBe(14);
    })

    
})
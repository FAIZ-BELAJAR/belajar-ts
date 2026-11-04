import {Seller} from "../src/readonly"

describe('it should support readonly', () => { 
    it('cannot be change again', () => {
        var penjual: Seller = {
            id: 1,
            name: "Bahi",
            adress: "Bampus",
            npwp: "cuwdcbsd",
            nib: "sqcougqdcbj"
        }


        penjual.name = "Faiz";
        penjual.nib = "anjay";

        console.info(penjual)
    });
    
 })
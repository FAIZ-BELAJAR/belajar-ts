import { customer } from "../src/tipe-data-enum";

describe('customer tipe', () => { 
    it('gold', () => {
        expect(customer).toBe({nama:"faiz", type:1})
    });
    
 })
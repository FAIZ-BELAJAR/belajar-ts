import { ItungAngka } from "../src-dasar/itung";

describe('testing ts', () => { 
    it('should not support string', () => {
        expect(ItungAngka([10, 10, 10, "makanan"])).toBe(30);
    });
    
 })
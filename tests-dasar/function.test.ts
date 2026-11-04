import{fallBackParameter, restParameter} from "../src/function"
import{callMe} from "../src/function-overloading"
import{Pertambahan, Tambahin} from "../src/function-sbg-param"

describe('it should support variative function', (): void => { 
    it('', (): void => {
        expect(fallBackParameter("Budi")).toBe("Halo Budi");
    });

    it('harusnya jadi total', () => {
        expect(restParameter(1,2,3,4)).toBe(10);

        console.info(restParameter(1,2,3,4))
    });
    
    it('harisnya support funtion overloading', () => {
        expect(callMe("Faiz")).toBe("Faizz")
    });
    
    it('bisa param func', () => {
        expect(Tambahin(Pertambahan, 2, 5)).toBe(8)
    });
    
    
 })
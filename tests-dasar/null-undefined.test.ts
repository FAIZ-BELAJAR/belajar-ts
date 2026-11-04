import {sayHello} from "../src/null-dan-undefined"

describe('support null and undefined', () => { 
    it('should support null', () => {

        let anan: null = null;
        expect(sayHello(anan)).toBe("Hello")
    });

    it('should support undefined', () => {

        let anan1: undefined;
        expect(sayHello(anan1)).toBe("Hello")
    });

    it('should support string', () => {

        let anan2: string = "Faiz";
        expect(sayHello(anan2)).toBe("Hello Faizz")
    });
    
 })
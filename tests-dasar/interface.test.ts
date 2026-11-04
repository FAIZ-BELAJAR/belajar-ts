import {Seller, Orang} from "../src/interface"
import {Menejer} from "../src/extending-interface"
import {personnih} from "../src/function-interface"
import {person2} from "../src/type-assertions"
describe('desc interface and object', () => { 
    it('should interface', () => {
        const seller: Seller = {
            id: 1,
            name: "Faiz",
        };

        console.info(seller)
    });

    it('Object', () => {
         

         console.info(Orang)
    });

    it('extends test passed', () => {
        expect(Menejer).toBe({id: "JSCBBSCKS",
    name: "Faiz",
    numberOfEmployees: 100});
    });

    it('method', () => {
        expect(personnih.sayHello("Budi")).toBe("hello Budi, my name is Faiz");
    });

    it('should support type assertions', () => {
        expect(person2).toBe(
            {
                name: "Eko",
                age: 30
            }
        )
    });
    
    
    
    
    
 })
import { customer, customertype } from "../src/tipe-data-enum";

describe('Enum', () => {
    it('should be enum', () => {
        expect(customertype.GOLD).toBe("Gold");

        expect(customertype.PLATINUM).toBe("Platinum")
    });
 })
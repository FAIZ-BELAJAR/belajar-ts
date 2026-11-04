import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it("should return hello eko", function(): void {
        expect(sayHello("Faiz")).toBe("Hello Faiz");
    });
});

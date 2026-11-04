export function sayHello(name) {
    if (name) {
        console.info(`Hello${name}`);
    }
    else {
        console.info("Hello");
    }
}

export function PerulanganWhileLoop(limit: number):void {
    let counter:number = 0;

    while(counter < limit){
        console.info(counter)
        counter++
    }
}

export function PerulanganDoWhileLopp(limit: number): void {
     let counter:number = 0;

    while(counter < limit){
        do {
            counter++

            if (counter == limit){
                break;
            }

            if (counter % 2 == 0) {
                continue;
            }

            console.info(counter)
        } while (true)
    }
}
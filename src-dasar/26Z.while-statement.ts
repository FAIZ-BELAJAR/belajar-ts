// While Loop
// Typescript juga mendukung perulangan While loop seperti di javascript baik while loop atau do while loop

function PerulanganWhileLoop(limit: number):void {
    let counter:number = 0;

    while(counter < limit){
        console.info(counter)
        counter++
    }
}

function PerulanganDoWhileLopp(limit: number): void {
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

function WhileStatement(){
    PerulanganWhileLoop(20)
    PerulanganDoWhileLopp(20)
}

// npx tsx 26Z.while-statement.ts

WhileStatement()
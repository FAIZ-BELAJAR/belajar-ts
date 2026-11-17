// Switch Statement
// Switch statement di typescript juga sama seperti di javascript

function SwitchStatement(){
    const nilai: number = 89;

    switch (nilai) {
        case 89:
            console.info("lulus");
        case 70: 
            console.info("gagal");
        default: 
            console.info("gatau")
    }
}

// npx tsx 24X.switch-statement.ts

SwitchStatement()
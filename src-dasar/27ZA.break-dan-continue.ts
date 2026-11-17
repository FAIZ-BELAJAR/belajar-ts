// Break dan Continue
// Seperti di Javascript pada perulangan baik for, while, dll kita sering menggunakan kata kunci 
// break untuk menghentikan kode
// continue untuk membatalkan eksekusi kode dibawah dan melanjutkan ke iterasi selanjutnya 
// Hal ini juga bisa dilakukan di typescript

function BreakDanContinue(){
    let perulangan: number = 0
    while(true){
        perulangan++
        console.info("perulangan ke:", perulangan)
        if(perulangan == 20){
            break //selesai
        } else if (perulangan == 19){
            continue // tak akan ada hai
        }
        console.info("hai")
    }
}

// npx tsx 27ZA.break-dan-continue.ts

BreakDanContinue()
export function decrescente(vetor:number[]):number[]{

try{
    for (let i in vetor.length){

        vetor[i] = (-1) * vetor[i];

    }

    // sort negative number
    vetor.sort();

    for(let i in vetor.length){

        console.log(vetor[i]);

    }

    for(let i in vetor.length){
        vetor[i] = (-1)*vetor[i];
    }
}finally {
    return vetor;
}


} // end function decrescente



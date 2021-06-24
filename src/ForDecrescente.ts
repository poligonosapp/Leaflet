import nodemon from 'nodemon';

export function decrescente(vetor: number[]): number[]{

try{
    for (let i in vetor.length){

        vetor[i] = (-1) * vetor[i];

    }

    // sort negative number
    vetor.sort();

    for(let i in vetor.length){
        vetor[i] = (-1)*vetor[i];
    }
} finally {
    
    for (let i in vetor.length) {

        nodemon.logger(vetor[i]);

    }

    return vetor;
}


} // end function decrescente



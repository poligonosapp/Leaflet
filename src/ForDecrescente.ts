import nodemon from 'nodemon';

export function decrescente(vetor: number[]): number[]{

try{
    for (const i in vetor.length){

        vetor[i] = (-1) * vetor[i];

    }

    // sort negative number
    vetor.sort();

    for(const i in vetor.length){
        vetor[i] = (-1)*vetor[i];
    }
}catch (e) {
    nodemon("forDecrescente fail");
} finally {

    for (const i in vetor.length) {

        nodemon(vetor[i]);

    }

    return vetor;
}


} // end function decrescente



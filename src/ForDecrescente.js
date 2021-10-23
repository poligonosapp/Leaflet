"use strict";
exports.__esModule = true;
exports.decrescente = void 0;
function decrescente(vetor) {
    try {
        for (var i in vetor.length) {
            vetor[i] = (-1) * vetor[i];
        }
        // sort negative number
        vetor.sort();
        for (var i in vetor.length) {
            console.log(vetor[i]);
        }
        for (var i in vetor.length) {
            vetor[i] = (-1) * vetor[i];
        }
    }
    finally {
        return vetor;
    }
} // end function decrescente
exports.decrescente = decrescente;

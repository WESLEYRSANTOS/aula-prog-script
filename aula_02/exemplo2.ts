namespace exemplo2{
    let vetor: number[] = [1,2,3,4,5];
    //console.log(vetor);
    let result: number;
    let h = 1;
    let vetor1: number[] = [];
    for(let i = 0; i < vetor.length; i++){
      
        if ( i == vetor.length - 1){
            result = vetor[i] + vetor[0];
            vetor1.push(result);
        }
        else{
            result = vetor[i] + vetor[h];
            vetor1.push(result);
            h += 1;
        }
        
    }
    //pop, push, shift, unshift
    console.log(vetor);
    console.log(vetor1);
}


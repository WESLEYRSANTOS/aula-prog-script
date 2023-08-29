namespace exemplo1.ts {
    let valor: number = 1;
    let cont: number = 0;
    do {
        console.log(`contador: ${cont}`)
        cont++
        cont== 10 ? valor = 0 : valor = 1 
    } while (valor >=1 );

    while(valor >= 0) {
        console.log(`Entrou no while, o valor está em: ${valor}`);
        valor ++

        if (valor >= 20){
            break;
        }
    }

    for( let i = 1; 1 >= 10; i++){
        console.log(i);
    }

    const nome = "carro"
        for(const letra of nome){
            console.log(letra);
            
        }
    let vetor = [1,2,3,4,5]
    for(const index in vetor){
        console.log(index);
    }

    for(const index of vetor){
        console.log(index);
    }

    const carro = {
        marca: "gol",
        Ano: "1998",
        cor: "Roxo",
      };
      
      for (const [prop, valor] of Object.entries(carro)) {
        console.log(`${prop}: ${valor}`);
      }
}

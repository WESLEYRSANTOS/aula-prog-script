namespace exemplo2{
    let idade: number = 18;

    if(idade >= 18){
        console.log(" A pessoa pode beber");
    }
    else{
        console.log(" A pessoa não pode beber");
    }

    let resultado: string;
    resultado = idade >= 18 ? " Pode beber" : " Não pode beber";
    console.log(resultado)

    switch(idade){
        case 18:
            console.log(" A pessoa pode beber");
            break;

        case 15:
            console.log(" A pessoa pode beber Refri");
            break;
            
        case 7:
            console.log(" A pessoa pode beber leite");
            break;  
        
        default:
            console.log(" beba agua");           
            break;
    }
}
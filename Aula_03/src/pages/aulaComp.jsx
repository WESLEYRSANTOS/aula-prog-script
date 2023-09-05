import PrimeiroComponente from "@/components/primeiroComp";
import ValidaCPF from "@/components/ValidaCPF";

export default function AulaComp(){
    return(
        <>
            <PrimeiroComponente
                titulo = "Meu Primeiro Componente"
                
                Subtitulo = " Estamos aprendendo Next.js com React"
            />
            <br></br>
            <PrimeiroComponente
                titulo = " Exemplo 2"
                
                Subtitulo = " Exemplo 2"
            />  
            <br></br>
            <ValidaCPF
                cpf="12345678912"
            />
            <br></br>
            <ValidaCPF
                cpf="12345678"
            />

        </>
    )
}
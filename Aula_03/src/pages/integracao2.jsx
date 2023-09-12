//import styles form '@/styles/integracao2css.module.css'

export default function integracaoCSS(){
    return(
        <>
        <h1 className={styles.vermelho}>Teste CSS Module </h1>
        <h1 className={styles.azul}>Teste CSS Module </h1>
        
        <div className = 'integracao1'> 
            <PrimeiroComponente titulo = "Teste com paramentro" css = "verde" />
        </div>    
        </>
    )
}
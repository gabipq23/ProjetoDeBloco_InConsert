export function Footer(){

    const estilo = {
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#C14493',
        fontSize:'0.8em',
        fontFamily:'Helvetica',
        padding:'8px',
        gap:'20px'

    }
    return(

        <div style={estilo}>
            <div >
                <p>2024 © Gabriela Quintaes</p>
            </div>
            <div >
                <p>Todos os direitos reservados.</p>
            </div>
        </div>
    )
}
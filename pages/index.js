import { useState } from "react";

function Visu(){

    return( 
    <div>
        <h1>Home</h1>
        <Contador />
        <h2>Teste</h2>
    </div>
    )
}

function Home(){

    return( 
    <div>
        <h1>Marina sua linda, cuida do Koda pro Deco poder ir lá pra cima e dormir</h1>
    </div>
    )
}


function Contador(){

    const [contador,setContador] = useState(1);

    function adicione(){

        setContador(contador +1 );
    }

    return (

        <div>
            <div>{ contador }</div>
            <button onClick={ adicione }>Adicionar</button>
        </div>
    );

}

export default Home;
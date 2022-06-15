import React, {useState} from 'react'

export default function SetStateFunction(){

    const [state,setState] = useState({
        name: 'Lucas',
        age:27
    })

    return (
        <div>
            //Atualizando uma propriedade do objeto e perdendo a outra
            <button
                onClick={() => setState({name:'Lucas Garcez'})}
            >
                Atualizar nome
            </button>
            {JSON.stringify(state)}
        </div>
    )
}
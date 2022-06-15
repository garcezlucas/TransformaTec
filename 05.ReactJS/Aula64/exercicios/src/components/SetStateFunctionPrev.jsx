import React, {useState} from 'react'

export default function SetStateFunctionPrev(){

    const [state,setState] = useState({
        name: 'Lucas',
        age:27
    })

    return (
        <div>
            <button
                //realizando merge com estado anterior no componente de classe
                onClick={() => setState(
                    prevState => {
                        return {...prevState, name: 'Lucas Garcez'}
                    }
                )}
            >
                Atualizar nome
            </button>
            {JSON.stringify(state)}
        </div>
    )
}
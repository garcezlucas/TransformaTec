import React, {useState} from 'react'

export default function UseStateObject(){

    const [user, setUser] = useState(
        {
            name: 'Lucas',
            age:27
        }
    )

    return (
        <div>
            <h4>Exemplo de prevState em objeto</h4>
            <button
                // onClick={
                //     ()=> setUser({name:'Lucas Garcez'})
                // }

                onClick={
                    () =>setUser(
                        (prevState) => {
                            return {...prevState, name: 'Lucas Garcez'}
                        }
                    )
                }
            >
                Atualizar nome
            </button>
            <p>
                {JSON.stringify(user)}
            </p>
        </div>
    )
}
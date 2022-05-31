import React, {useEffect, useState} from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUSer);

    useEffect(() => {
        setUser(props.currentUSer);
    }, [props]);

    const handleInputChange = (event) => {

            const {name, value} = event.target;

            setUser({...user, [name]:value});

        }

        return (

            <form onSubmit = {
                (event) => {
                    event.preventDefault();

                    props.updateUser(user.id, user);
                }
            }>

                <input type = "text" name = "name" value = {user.name} onChange = {handleInputChange} placeholder = "Nome" />
                <input type = "text" name ="userName" value = {user.userName} onChange = {handleInputChange} placeholder = "NickName" />
                <input type = "text" name = "email" value = {user.email} onChange = {handleInputChange} placeholder = "Email" />
                <input type = "number" name = "age" value = {user.age} onChange = {handleInputChange} placeholder = "Idade" /> 

                <button>Atualizar</button>
                <button onClick = {() => props.setEditing(false)}>Cancelar</button>

            </form>

        )

}

export default EditUserForm;
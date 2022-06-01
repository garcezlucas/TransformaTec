import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {StyledForm} from './Form.styles';

const ConfirmButton = styled.button`
    background: lightgreen;
`
const CancelButton = styled.button`
    background: lightcoral;
`

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {

            const {name, value} = event.target

            setUser({...user, [name]:value})

        }

        return (

            <form 
                style = {StyledForm.StyledForm}
                onSubmit = {
                (event) => {
                    event.preventDefault()

                    props.updateUser(user.id, user)
                }
            }>

                <label>Nome</label>
                <input type = "text" name = "name" value = {user.name} onChange = {handleInputChange} placeholder = "Nome" />

                <label>Username</label>
                <input type = "text" name = "username" value = {user.username} onChange = {handleInputChange} placeholder = "Nickname" />

                <label>Email</label>
                <input type = "text" name = "email" value = {user.email} onChange = {handleInputChange} placeholder = "Email" />

                <label>Idade</label>
                <input type = "number" name = "age" value = {user.age} onChange = {handleInputChange} placeholder = "Idade" /> 

                <ConfirmButton>Atualizar</ConfirmButton>
                <CancelButton onClick = {() => {props.setEditing(false)}}>Cancelar</CancelButton>

            </form>

        )

}

export default EditUserForm;
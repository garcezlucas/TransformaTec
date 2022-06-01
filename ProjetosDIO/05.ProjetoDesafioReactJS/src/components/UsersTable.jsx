import React from "react";
import styled from 'styled-components'
import styles from './styles.scss'

// Botão Principal
const Button = styled.button `
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    `

// Botão Personalizado que herda do botão Principal
const EditButton = styled(Button) `
        background: lightyellow;
    `

// Botão Personalizado que herda do botão Principal
const RemoveButton = styled(Button) `
        background: lightcoral;
    `

const UsersTable = (props) => {

    const {users} = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Idade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? (
                        props.users.map(user => (
                            <tr key = {user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <EditButton onClick = {() => props.editRow(user)}>Editar</EditButton>
                                    <RemoveButton onClick = {() => props.deleteUser(user.id)}>Excluir</RemoveButton>
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan = {4}>Lista Vazia</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )

}

export default UsersTable;
function HelloPerson(props){

    return(
        <div>
            <p>
                Hello {props.person.name} {props.person.surName} 
            </p>
        </div>
    )
}

export default HelloPerson
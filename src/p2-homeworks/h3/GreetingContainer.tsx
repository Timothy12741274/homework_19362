import React, {useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value)// need to fix
    }
    const addUser = () => {
        //debugger
        const nameLatters = name.split('')
        //console.log(nameLatters == '')
        console.log('  ' in nameLatters)
        if(nameLatters.length !== 0  && !(' ' in nameLatters)){
            alert(`Hello ${name}!`)
            addUserCallback(name)
            setError('')

        } else {
            setError('error')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

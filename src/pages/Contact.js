import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

const Contact = (props) => {
    const [name, setName] = useState();
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [user, setUser] = useState();

    const saveName = (e) => {
        setName(e.target.value)
    }
    const saveFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const saveEmail = (e) => {
        setEmail(e.target.value)
    }
    const saveMessage = (e) => {
        setMessage(e.target.value)
    }
    const sendForm = () =>{
        const user = {
            name,
            firstName,
            email,
            message
        }
        setUser(user)
    }

    useEffect(() => {
        console.log('useEffect User :', user)
    }, [setUser, user])

    return !user ? <>
        <h1>Contact</h1>
        <form>
            <label>Name :</label>
            <input type="text" defaultValue={name} onChange={saveName} />
            <br /><br />
            
            <label>Fistname :</label>
            <input type="text" defaultValue={firstName} onChange={saveFirstName} />
            <br /><br />

            <label>Email :</label>
            <input type="text" defaultValue={email} onChange={saveEmail} />
            <br /><br />

            <label>Message :</label>
            <textarea defaultValue={message} onChange={saveMessage} />
            <br /><br />

            <button type="button" onClick={sendForm}> Send</button>
        </form>
    </> :
    <Navigate to="/" />
}

export default Contact
    import React, { useState, useContext, useEffect } from "react"
    import UserContext from "../context/UserContext";

    const Contact = () => {
        const {user} = useContext(UserContext);
        const [name, setName] = useState();
        const [firstName, setFirstName] = useState();
        const [email, setEmail] = useState();
        const [message, setMessage] = useState();

        useEffect(() => {
            user ? setName(user.getId()) : setName("");
        },[user, setName]);
        

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
            console.log(`Send new message : From ${name} ${firstName} (${email}) Content : ${message}`)
        }

        return (
            <>
                <h1>Contact</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"}}>
                
                    <form className="border border-secondary rounded-2 p-2">
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" defaultValue={name} onChange={saveName} />
                        </div>
                        <div className="form-group">
                            <label>Fistname :</label>
                            <input type="text" className="form-control" defaultValue={firstName} onChange={saveFirstName} />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="email" className="form-control" defaultValue={email} onChange={saveEmail} />
                        </div>
                        <div className="form-group">
                            <label>Message :</label>
                            <textarea className="form-control" defaultValue={message} onChange={saveMessage} />
                        </div>
                        <div className="text-center mt-2">
                        <button type="button" className="btn btn-primary" onClick={sendForm}> Send</button>
                        </div>
                    </form>
                </div> 
            </>
        )
    }

    export default Contact
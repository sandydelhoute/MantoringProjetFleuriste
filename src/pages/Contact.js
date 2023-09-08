        import React, { useState, useContext, useEffect } from "react"
        import UserContext from "../context/UserContext";

        const Contact = () => {
            const {user} = useContext(UserContext);
            const [name, setName] = useState();
            const [subject, setSubject] = useState();
            const [email, setEmail] = useState();
            const [message, setMessage] = useState();

            useEffect(() => { 
                user ? setName(user.getId()) : setName("");
            },[user, setName]);
            

            const saveName = (e) => {
                setName(e.target.value)
            }
            const saveSubject = (e) => {
                setSubject(e.target.value)
            }
            const saveEmail = (e) => {
                setEmail(e.target.value)
            }
            const saveMessage = (e) => {
                setMessage(e.target.value)
            }
            const sendForm = () =>{
                console.log(`Send new message : From ${name} (${email}) Subject : ${subject} Content : ${message}`)
            }
            return (
                <>
                <section className="ftco-section mt-5">
                    <div className="container">
                        <div className="row justify-content-center m-auto">
                        <div className="col-lg-10">
                            <div className="wrapper img" style={{border: "2px solid black",  borderRadius: "25px"}}>
                            <div className="row">
                                <div className="col-md-9 col-lg-7">
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4">Nous contacter !</h3>
                                    <form id="contactForm" className="contactForm" >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label className="label" >Name</label>
                                            <input type="text" defaultValue={name} className="form-control" id="name" placeholder="Name" onChange={saveName} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label className="label" >Email</label>
                                            <input type="email" defaultValue={email} className="form-control" id="email" placeholder="Email" onChange={saveEmail} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label className="label">Sujet</label>
                                            <input type="text" defaultValue={subject}  className="form-control" id="subject" placeholder="Sujet" onChange={saveSubject} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label className="label" >Message</label>
                                            <textarea name="message" defaultValue={message} className="form-control" cols="30" rows="4" placeholder="Message" onChange={saveMessage}></textarea>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button value="Envoyer" className="mt-2 btn btn-primary" onClick={sendForm}>Envoyer</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            <div className="col-md" >
                            <img src="https://fastly.picsum.photos/id/738/400/400.jpg?hmac=uwnltMc6mbAqRj9h51qWOnOZxu3y3NGc78aZr35AkkA" alt="Error image" style={{width: "100%", height: "100%", borderRadius: "0 25px 25px 0"}}/>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </>
            )
        }

        export default Contact
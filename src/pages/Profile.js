import React, {useContext, useState} from "react"
import UserContext from "../context/UserContext";
import userObject from "../class/User"
import constants from "../utils/constant";

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    
    const saveId = (e) => {
        setId(e.target.value)
    }
    const savePassword = (e) => {
        setPassword(e.target.value)
    }
    const sendConnectForm = () =>{
        setUser(new userObject(id, password))
    }
    const sendDisconnect = () =>{
        setUser(constants.localStrorage.userLocalStorageDefaultValue)
    }

    return user ?
        <>
            <h3>{`Bonjour ${user.id}, heureux de vous revoir`}</h3> 
            <button type="button" className="btn btn-primary" onClick={sendDisconnect}> Déconnexion</button>
        </>
        :
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"}}>
        
            <form className="border border-secondary rounded-2 p-2">
                <div className="form-group">
                    <label>Identifiant :</label>
                    <input type="text" className="form-control" onChange={saveId} />
                </div>
                <div className="form-group">
                    <label>Mot de passe :</label>
                    <input type="password" className="form-control" onChange={savePassword} />
                </div>
                <div className="text-center mt-2">
                    <button type="button" className="btn btn-primary" onClick={sendConnectForm}> Connexion</button>
                </div>
            </form>
        </div> 
}

export default Profile
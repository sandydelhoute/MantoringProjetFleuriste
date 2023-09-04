import React, {useContext} from "react"
import UserContext from "../context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext);
    
    return <h3>{`Bonjour ${user.name}, heureux de vous revoir`}</h3> 
}

export default Profile
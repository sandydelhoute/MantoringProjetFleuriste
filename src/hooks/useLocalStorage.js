import { useEffect, useState } from "react"
import UserObject from '../class/User'
import constants from "../utils/constant"

const getValueFromStorage = (key) => {
    if(key === constants.localStrorage.userLocalStorageName){
        return UserObject.createFromJson(JSON.parse(localStorage.getItem(key)))
    }
    return JSON.parse(localStorage.getItem(key))
}

const setValueInStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const useLocalStorage = (keyValue, initialData) => {
    const [data, setData] = useState(getValueFromStorage(keyValue) || initialData)

    useEffect(() => {
        const getKey = () => keyValue;
        setValueInStorage(getKey(), data)
    }, [data, keyValue])

    return [data, setData]

}

export default useLocalStorage
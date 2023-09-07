import { useEffect, useState } from "react"

const getValueFromStorage = (key) => {
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
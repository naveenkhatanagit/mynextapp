import { useState, useEffect } from "react";

const SetSessionStorage = (name) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    sessionStorage.setItem("mynewname",name)
  }, [name])

 console.log(value)
  return value
}

const GetSessionStorage = () => {
    const [value, setValue] = useState('')
    useEffect(() => {
        setValue(sessionStorage.getItem("mynewname"))
    }, [])
  
   console.log(value)
    return value
  }

export {GetSessionStorage, SetSessionStorage}
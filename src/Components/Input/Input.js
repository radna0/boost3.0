import React, { useState, useLayoutEffect} from 'react'
import { useTranslation } from 'react-i18next';
import './Input.css'
function Input({

    page,
    section,
    type,
    regex,


    HandleCheckSubmit
}) {

    const { t } = useTranslation();

    const [input, setInput] = useState("")
    const [valid, setValid] = useState("")
    const [color, setColor] = useState("")

    const handleOnChange = (e) =>{
        setInput(e.target.value)
    }

    useLayoutEffect(() =>{
        if(regex.test(input)){
             setValid(t(`${page}_${section}_valid_${type}`))
             setColor("green")
             HandleCheckSubmit(true)
        }else if(input === ""){
             setValid(t(`${page}_${section}_empty_${type}`))
             setColor("yellow")
             HandleCheckSubmit(false)
        }else if(!regex.test(input)){
             setValid(t(`${page}_${section}_invalid_${type}`))
             setColor("red")
             HandleCheckSubmit(false)
        }else{
             setValid("")
             setColor("")
             HandleCheckSubmit(false)
        }

    },)


  return (
    
    <div className={`${page}_${section}_${type}_box  input_box`}>
        <label>{t(`${page}_${section}_${type}_name`)}</label>
        <input 
          type="text" 
          placeholder={t(`${page}_${section}_${type}_placeholder`)} 
          value={input} 
          onChange={handleOnChange}
        />
        <p className={color}>{valid}</p>
    </div>
  )
}

export default Input
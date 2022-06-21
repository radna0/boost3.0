import React,  { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import '../../Styles/FAQ/FAQ.css'
import Form from '../../Data/Faq/Form'
import IMG from '../../Components/IMG/IMG'
import H1 from '../../Components/Header/H1'
import Para from '../../Components/Para/Para'
import Input from '../../Components/Input/Input'
import Btn from '../../Components/Button/Btn'
function FAQ() {

  const { t } = useTranslation();

  const [submit, setSubmit] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)

    const HandleCheckSubmit = (boolean) =>{

      setSubmit(boolean)
    }
    const handleOnSubmit = (e) =>{
    if(submit === true){
       e.preventDefault()
       setCheckSubmit(true)
       console.log(e)
    }else if(submit === false){
      e.preventDefault()
      setCheckSubmit(false)
    }
  }



  return (
    
     <div className="FAQ_form_section">
      <div className="FAQ_form_display">
        <IMG image="/Assets/Images/Form/Form_logo.png" />
      </div>
      
        {checkSubmit ? 
        <div className="FAQ_formComplete_input">
          <div className="FAQ_formComplete_input_title">
            <H1 H1Size={"small"} page="FAQ" section="formComplete" />
          </div>
        </div>
        
        :
        <div className="FAQ_form_input">
         <form onSubmit={handleOnSubmit}>
          <div className="FAQ_form_input_title">
          <H1 H1Size={"small"} page="FAQ" section="form" />
          <Para   page="FAQ" section="form" pSize="large" />
          </div>
         { 
          Form.map(data =>{
            return(
              <Input key={data.type} {...data} HandleCheckSubmit={HandleCheckSubmit} />
            )
          })
          
         }
           <Btn 
            Text={t(`FAQ_form_input_submit`)}
            />
         </form>
        </div>
        }
      
     </div>
        
  )
}

export default FAQ
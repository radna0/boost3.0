import React from 'react'
import './Footer.css'
import List from '../../List/List'
import Contacts from './Data/Contacts.json'
import Content from '../../Content/Content'
import Helps from './Data/Helps.json'


function Footer() {
  return (
    <>
    <div className="footer_section">
      <div  className="footer_contact_section">
      {Contacts.map(contact =>{
            return(
                <List key={`${contact.page}_${contact.section}_${contact.id}`} {...contact} />
            )
        })}
      </div>
      <div className="footer_info_section">
          <div className="footer_helps">

             {Helps.map(help =>{
               return(
                 <Content key={`${help.page}_${help.section}_${help.id}`} {...help} />
                 )
                })}
          </div>
          <div className="footer_input">

          </div>
       </div>
    </div>
    
    
    </>
  )
}

export default Footer
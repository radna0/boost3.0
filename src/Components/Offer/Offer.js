import React from 'react'
import './Offer.css'

import H1 from '../Header/H1';
import Para from '../Para/Para';
function Offer({ 
    id,
    page,
    section,
    icon,

    H1Size,
    H1ID,
    
    pSize,

    
    
}) {


  return (
    <div key={`${page}_${section}_${id}`} className={`${page}_${section}_${id} ${section}_section `}> 

{ icon === undefined ? 
  null :
 <i className={icon} />}

      <H1 H1ID={H1ID} H1Size={H1Size} page={page} section={section} />
      <Para id={id} pSize={pSize}  page={page} section={section}  />

    </div>
  )
}

export default Offer
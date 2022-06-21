import React from 'react'
import './Member.css'
import IMG from '../IMG/IMG';
import '../Header/H.css'
import '../Para/Para.css'
function Member({ 
  id,
  page,
  section,
  role,

  H1Size,
  H1Child,
  

  pSize,
  pChild,
  
  
  image
}) {


  return (
    <div key={`${page}_${section}_${role}_${id}`} className={`${page}_${section}_${role}_${id} ${section}_${role} ${section}s`}> 

      <IMG image={image} />
      <h1 className={`${H1Size}_header`}>{H1Child}</h1>
      <p className={`${pSize}_para`}>{pChild}</p>

    </div>
  )
}

export default Member
import React from 'react';
import './Comment.css';

import '../Header/H.css'
import '../Para/Para.css'

import IMG from '../IMG/IMG';
import Para from '../Para/Para';


function  Comment({

    id,
    page,
    section,

    pSize,

    H1Size,
    H1Child,

    posSize,
    pos,

    
  
    
    
    
    image

  
  }) {
  
   


      return (
   
        <div  
        key={`${page}_${section}_${id}`}
        className={`${page}_${section}_${id} ${section}_section `}
        >

             <Para 
             id={id} 
             pSize={pSize} 
             page={page} 
             section={section}  
             />
             
            <div className={`${page}_${section}_info_${id} ${section}_info `}>

                <IMG image={image} />

                <div className={`${page}_${section}_title_${id} ${section}_info_title `}>
                  <h1 className={`${H1Size}_header`}>{H1Child}</h1>
                  <p className={`${posSize}_para`}>{pos}</p>
                </div>

            </div>
        </div>
    );

   
  
  
     
  };

export default Comment;
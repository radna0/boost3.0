import React from 'react';
import './intro.css';
import './Content.css';
import './Dynamic.css';
import IMG from '../IMG/IMG';
import H1 from '../Header/H1';
import H3 from '../Header/H3';
import Para from '../Para/Para';
import List from '../List/List'

function  Content( props) {
  
   


      return (
        <div key={`${props.page}_${props.section}_section${props.id}`} className={` ${props.page}_${props.section}_section ${props.direct} ${props.svgDirect === undefined ? null : props.svgDirect} ${props.section}_section `} >

          <div className={`${props.page}_${props.section}_title ${props.section}_title`}>
            <H3 H3ID={props.H3ID} H3Size={props.H3Size} page={props.page}  section={props.section} />
             <H1 H1ID={props.H1ID} H1Size={props.H1Size} page={props.page} section={props.section} />

             {
              Array.isArray(props.pChilds) ?

              props.pChilds.map( pChild => {
                 return (
                   <Para
                     key={`${props.page}_${props.section}_para${pChild.id}`}
                     id={pChild.id}  
                     page={props.page} 
                     section={props.section} 
                     pSize={props.pSize} 
                    />
                 )})  

              :

                <Para
                  key={`${props.page}_${props.section}_para`} 
                  id={""}  
                  page={props.page} 
                  section={props.section} 
                  pSize={props.pSize} 
                />
              }
              
                 { props.children }

               <List listId={props.listId} listChild={props.listChild} listSize={props.listSize} icon={props.icon} page={props.page} section={props.section} />
           </div>
           <div className={`${props.page}_${props.section}_display  ${props.section}_display`}>
             <IMG image={props.image}/>
           </div>

        </div>
    );

   
  
  
     
  };

export default Content;
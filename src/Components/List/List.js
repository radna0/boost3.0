import React from 'react';
import './List.css'
import Para from '../Para/Para'

function  List({
    listId,
    listChild,
    listSize,
    icon,
    page,
    section,


}) {


  

if( listId === undefined || listId === "none"){
    return null;

}else{
    
    return (
       <ul 
       key={`${page}_${section}_title_list_${listId}`}
       className={`${page}_${section}_title_list title_list`}
       >
           {listChild.map( child => {

               return (
                   <li
                    key={`${page}_${section}_title_list_${listId}_${child.id}`}
                    className={`${page}_${section}_title_lists`}
                   >
                    { icon === undefined ? null : <i className={icon} />}

                       <Para 
                       id={child.id}
                       page={page}
                       section={section}
                       pSize={listSize}
                       >
                       </Para >
                   </li>
              
               )
           })}
       </ul>
    );
}

};

export default  List;
import React from 'react'
import './Btn.css'
import { Link } from 'react-router-dom';
function Btn({
    Text,
    Children,
    to
}) {

    if(to === undefined ){

        return (
            <button>
                {Text}
                {Children}
             </button>
          ) 

    }else{

        return(
            <Link to={to} >
                <button>
                    {Text}
                    {Children}
                </button>
            </Link>
            ) 
    }
 
}

export default Btn
import React from 'react';
import { useTranslation } from 'react-i18next';
import './H.css'

function  H1({
    H1ID,
    H1Size,
    page,
    section,


}) {



    const { t } = useTranslation();
 


    return (
        <h1 key={`${page}_${section}_header${H1ID}`} className={` ${page}_${section}_header ${H1Size}_header `}>
            { ( H1ID === "none" || H1ID === undefined )   ?  
            t(`${page}_${section}_header`) 
            : 
            t(`${page}_${section}_header${H1ID}`) 
             }
        </h1>
    );
};

export default  H1;
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Para.css'
function  Para({
    id,
    page,
    section,
    pSize
    
}) {

    const { t } = useTranslation();
    
    
    return (
        <p key={`${page}_${section}_para${id}`} className={` ${page}_${section}_para ${pSize}_para `}>
            { ( id === "none" || id === undefined )   ?  
            t(`${page}_${section}_para`) 
            : 
            t(`${page}_${section}_para${id}`) 
             }
    </p>
    );
};

export default Para;
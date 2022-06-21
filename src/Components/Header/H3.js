import React from 'react';
import { useTranslation } from 'react-i18next';
import './H.css'

function  H3({
    H3ID,
    H3Size,
    page,
    section,

}) {

    
    const { t } = useTranslation();


    if ( H3ID === undefined || H3ID === "none" ) {
        return null;

    }else{

    return (
        <h3 key={`${page}_${section}_header${H3ID}`} className={` ${page}_${section}_header ${H3Size}_header `}>
            {t(`${page}_${section}_subHeader${H3ID}`)}
        </h3>
    );

    };
};

export default  H3;
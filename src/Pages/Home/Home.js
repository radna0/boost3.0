import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../Styles/Home/Home.css';

import Content from '../../Components/Content/Content';
import Intros from '../../Data/Home/Intro.json'
import Contents from '../../Data/Home/Content.json';

import Btn from '../../Components/Button/Btn'






function Home() {


    const { t } = useTranslation();
   

    return (
        <>
       
        <Content  {...Intros} >
           <Btn 
             Text={t(`home_intro_learnMore`)}
             Children={<i className="fa-solid fa-arrow-right home_intro_learnMore_icon"></i>} 
             to="/features" 
           /> 
        </Content>

         {Contents.map(content =>{
         return (
           <Content 
             key={content.id}  
             {...content} 
            />
          )
           })}      
        </>
    );
  }
  
  export default Home;
  
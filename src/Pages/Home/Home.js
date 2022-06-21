import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../Styles/Home/Home.css';

import Content from '../../Components/Content/Content';
import Intros from '../../Data/Home/Intro.json'
import Contents from '../../Data/Home/Content.json';

import Btn from '../../Components/Button/Btn'

import intro_IMG from '../../Assets/Images/demo_phone.png'






function Home() {


    const { t } = useTranslation();
   

    return (
        <>
       
        <Content  {...Intros} image={intro_IMG} >
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
  
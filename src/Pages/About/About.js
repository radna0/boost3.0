import React from 'react';
import '../../Styles/About/About.css';
import Content from '../../Components/Content/Content';
import Member from '../../Components/Member/Member'
import H1 from '../../Components/Header/H1'
import H3 from '../../Components/Header/H3'
import Intros from '../../Data/About/Intro.json'
import Goals from '../../Data/About/Goal.json';
import Founders from '../../Data/About/Founder.json';
import Staffs from '../../Data/About/Staff.json';



function About() {

    return (
     <>
        <Content  {...Intros} />

        {Goals.map(goal =>{

            return (
                <Content  key={goal.id} {...goal} />
            )
            
               })}
        <div className="about_member_section">
            <H1  H1Size={"medium"} page={"about"} section={"member"} />
            <H3 H3ID={1} H3Size={"small"} page={"about"} section={"member"} />
            <div className="about_member_founder_section">

               {Founders.map(founder =>{
                      return (
                       <Member key={founder.id}  {...founder} />
                      )
                 })}
            </div>

            <H3 H3ID={2} H3Size={"small"} page={"about"} section={"member"} />
            <div className="about_member_staff_section">

                  {Staffs.map(staff =>{
                      return (
                       <Member key={staff.id}  {...staff} />
                       )
                    })}
             </div>
        </div>

     </>
    );
  }
  
  export default About;
  
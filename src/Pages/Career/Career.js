import React from 'react';
import '../../Styles/Career/Career.css';
import Content from '../../Components/Content/Content';
import Comment from '../../Components/Comment/Comment'

import Intros from '../../Data/Career/Intro.json';
import Comments from '../../Data/Career/Comment.json'

import IMG from '../../Assets/Images/demo_full.png'

function Career() {

    return (
        <>

        <Content {...Intros} image={IMG} />

        <div className="career_comment_section">
           {Comments.map(comment => {
               return (
                <Comment key={comment.id} {...comment} />
             )
               })}
        </div>

        </>
    );
  }
  
  export default Career;
  
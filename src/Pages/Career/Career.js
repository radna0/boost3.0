import React from 'react';
import '../../Styles/Career/Career.css';
import Content from '../../Components/Content/Content';
import Comment from '../../Components/Comment/Comment'

import Intros from '../../Data/Career/Intro.json';
import Comments from '../../Data/Career/Comment.json'



function Career() {

    return (
        <>

        <Content {...Intros} />

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
  
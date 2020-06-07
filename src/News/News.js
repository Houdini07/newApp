import React from 'react'
import './News.css'; 


const News = (props) =>{



    return(

        <div className="post">
          
            <img src={props.img} alt=""></img>
           
             <div className="body_post">

             
            <h1>{props.title} </h1>
            <h2> {props.author}</h2>
            <p> {props.description} </p>
            
            
            </div>



        </div>
    )
}

export default News; 
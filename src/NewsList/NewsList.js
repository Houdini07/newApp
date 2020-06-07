import React from 'react';
import News from '../News/News.js'; 






const NewsList = (props) => {



const newsArticles = props.articles.map((story,index)=>{


    console.log(story.title); 

return <News title={story.title} 
             description = {story.description} 
             img = {story.url}
             author = {story.author}
/>

})





return(
    <div className="list-wrapper"> 
    
    {newsArticles}
    
    
    </div>
); 

}

export default NewsList; 
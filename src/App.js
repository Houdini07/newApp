import React, { Component, useEffect } from 'react';


import NewsList from './NewsList/NewsList'; 
//import './App.css';



class App extends Component{


  state = {

    articles:[
      {
        author:"Eliza Mackintosh, CNN", 
            title:"What the coronavirus pandemic looks like when you don't have the internet - CNN",
        url:"https://cdn.cnn.com/cnnnext/dam/assets/200529143717-01-coronavirus-no-internet-super-tease.jpg", 
        description:"When the coronavirus pandemic began to spread through Colombia, creeping its way to the town of Uribia, the only information Angela Montiel could get about Covid-19 was from her neighbors."
      },
    {
  
  author:"Gordon Kelly", 
  title:"2020 iPhone Shock As Five ‘All-New’ Apple iPhones Revealed - Forbes",
  url:"https://cdn.vox-cdn.com/thumbor/kwCZuthSVn0kmLAjYBhPMpzVwaU=/0x165:3935x2225/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20022890/1218023998.jpg.jpg", 
  description:"When the coronavirus pandemic began to spread through Colombia, creeping its way to the town of Uribia, the only information Angela Montiel could get about Covid-19 was from her neighbors."

    }
,

    {
  author:"Dawn Ennis", 
  title:"JK Rowling's Anti-Transgender Tweetstorm Receives Furious Response - The Daily Beast",
  url:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2285,w_4064,x_0,y_78/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1591540851/2019-12-19T184805Z_1_LYNXMPEFBI20A_RTROPTP_4_FILM-FANTASTICBEASTS_hxqgwq", 
  description: "While tens of thousands around the world marched for justice and equality on Saturday, author J.K. Rowling decided to tweet about the phrase, people who menstruate.  Her tweet, however, backfired bi… [+11206 chars]"}, 

 { 
    author:"Susan Miller, Lorenzo Reyes", 
    title:"Tropical Storm Cristobal path moving closer to Gulf Coast; landfall expected today - USA TODAY",
    url:"https://www.gannett-cdn.com/presto/2020/06/07/USAT/e030b5f8-9603-450e-9ef8-6be34a69f8d6-AP_Tropical_Weather.jpg?crop=5567,3132,x0,y283&width=3200&height=1680&fit=bounds",
    description:"When the coronavirus pandemic began to spread through Colombia, creeping its way to the town of Uribia, the only information Angela Montiel could get about Covid-19 was from her neighbors."

  }


]

}
 

render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to News Feed :-) </h1>

      <NewsList articles={this.state.articles} /> 
      </header>

    </div>
  );


}


}


/*  state = {

    articles:[{author:"Eliza Mackintosh, CNN", title:"What the coronavirus pandemic looks like when you don't have the internet - CNN",url:"https://cdn.cnn.com/cnnnext/dam/assets/200529143717-01-coronavirus-no-internet-super-tease.jpg", description:"When the coronavirus pandemic began to spread through Colombia, creeping its way to the town of Uribia, the only information Angela Montiel could get about Covid-19 was from her neighbors."},
    {author:"Eliza Mackintosh, CN", title:"What the coronavirus pandemic looks like when you don't have the internet - CNN",url:"https://cdn.cnn.com/cnnnext/dam/assets/200529143717-01-coronavirus-no-internet-super-tease.jpg", description:"When the coronavirus pandemic began to spread through Colombia, creeping its way to the town of Uribia, the only information Angela Montiel could get about Covid-19 was from her neighbors."}]

}*/ 




export default App;

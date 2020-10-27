import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bg.jpg';
const time = new Date().toLocaleTimeString();
let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {};

if(currDate>=1 && currDate<12){
  greeting = 'Good Morning';
  cssStyle.color = '#00003f';
}
else if(currDate>=12 && currDate<18)
{
  greeting = 'Good Afternoon';
  cssStyle.color = '#00003f';
}
else { greeting = 'Good Night';
cssStyle.color = '#00003f';
}
ReactDOM.render(
  <>
  
  <div>
    <h1><span style={{fontSize:'70px',}}>{time}</span><br/>Hello Ma'am, <span style={cssStyle}>{greeting}</span></h1>
    
  </div>
  
  </>,
  document.getElementById('root')
);
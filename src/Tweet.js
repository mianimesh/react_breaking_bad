import React from 'react' ;
import './App.css';

function Tweet(props){
  var flag = 0;
  function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
  function callthis(){
    flag=flag^1 ;
    if(flag)
    {
      document.getElementById(JSON.stringify(props.char_id)).style.height='800px' ;
      document.getElementById(JSON.stringify(props.image)).style.height='300px' ;
      document.getElementById(JSON.stringify(props.image)).style.width='300px' ;
      var html = '<b>Nickname - </b>'+props.nick ;
      addElement(JSON.stringify(props.char_id),'p',JSON.stringify(props.nick),html)
      html = '<b>Appearance - </b>'+JSON.stringify(props.appearance) ;
      addElement(JSON.stringify(props.char_id),'p',JSON.stringify(props.appearance),html);
      html = '<b>Category - </b>'+JSON.stringify(props.category);
      addElement(JSON.stringify(props.char_id),'p',JSON.stringify(props.category),html);
      html = '<b>Portrayed - </b>'+JSON.stringify(props.portrayed);
      addElement(JSON.stringify(props.char_id),'p',JSON.stringify(props.portrayed),html);
    }
    else {
      document.getElementById(JSON.stringify(props.char_id)).style.height='300px' ;
      document.getElementById(JSON.stringify(props.image)).style.height='100px' ;
      document.getElementById(JSON.stringify(props.image)).style.width='100px' ;
      var obj = document.getElementById(JSON.stringify(props.nick)) ;
      obj.remove() ;
      obj =document.getElementById(JSON.stringify(props.appearance)) ;
      obj.remove() ;
      obj =document.getElementById(JSON.stringify(props.category)) ;
      obj.remove() ;
      obj =document.getElementById(JSON.stringify(props.portrayed)) ;
      obj.remove() ;
    }
  }
  return(
    <span onClick={callthis} id={JSON.stringify(props.name)}>
    <a href='javascript:void(0);' onclick='return false ;'className='tweet' id={JSON.stringify(props.char_id)}>
    <h3>{props.name}</h3><img src ={props.image} id ={JSON.stringify(props.image)} height='100' width='100' align='right'></img>
    <p><b>Occupation -</b>{props.message}</p>
    <p><b>Date Of Birth -</b>{props.dob}</p>
    <p><b>Status -</b>{props.status}</p>
    </a>
    </span>
  );
}

export default Tweet

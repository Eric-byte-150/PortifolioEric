import React from 'react'
import "./CardTextInleft.css"


const CardTextInleft = ({header,text,src,href,hrefCode}) => {
  return (
    <div className='card_left'>
   
        <div className="imgStandard">
      <img src={src} alt="" />
        </div>
      <div className="texto">
     <h1>{header}</h1>
     <p> {text}</p>
     <div className="buttons">
        <a href={href}><button>VER PROJETO</button></a>
       
       
      </div>
      </div>
    
        

    </div>
  )
}

export default CardTextInleft
import React from 'react'
import "./CardTextInRight.css"


const CardTextInRight = ({header,text,src,href,hrefCode}) => {
  return (
    <div className='card_right'>
   
        
      <div className="texto">
     <h1>{header}</h1>
     <p> {text}</p>
     <div className="buttons">
     <a href={href}><button>VER PROJETO</button></a>
        
      </div>
      </div>
      <div className="imgStandard">
      <img  src={src} alt="" />
        </div>
    
        

    </div>
  )
}

export default CardTextInRight
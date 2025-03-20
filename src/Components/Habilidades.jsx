import React from 'react'
import HTML from '../imagens/arquivo-html.png';
import CSS from '../imagens/arquivo-css.png';

import PYTHON from '../imagens/Python.png';
import EXCEL from '../imagens/EXECEL ICON.png';
import MYSQL from '../imagens/icons8-my-sql-48.png';
import POWERBI from '../imagens/Power BI.webp';




import "./Habilidades.css"

const Habilidades = () => {
  return (
    <div className='habilidades' id='habilidades'>
        <h1>HABILIDADES</h1>
        <div className="conteudo">
        <p>PRINCIPAIS:</p>
            <div className="icons">
            <img src={MYSQL} alt="" />
            <img src={EXCEL} alt="" />
            <img src={PYTHON} alt="" />
            <img src={POWERBI} alt="" />


                
            </div>
        </div>
        <div className="conteudo">
            <p>TENHO CONHECIMENTOS:</p>
            <div className="icons">
              
                <img src={HTML} alt="" />  
                <img src={CSS} alt="" />  

                
            </div>
        </div>
        
    </div>
  )
}

export default Habilidades
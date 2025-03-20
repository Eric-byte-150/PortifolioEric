import React from 'react'
import "./Redes.css"
import GITHUB from '../imagens/icons8-git-48.png';
import EMAIL from '../imagens/icons8-gmail-48.png';
import LINKEDIN from '../imagens/icons8-linkedin-48.png';

const Redes = () => {
  return (
    <section className="redes" id='redes'>
        <h1>REDES E CONTATO</h1>
        <div className="boxes">
        <div className="box">
           <img src={GITHUB} alt="" /> 
           <h2>GIT HUB</h2>
           <p>Eric-byte-150</p>
        </div>
        <div className="box">
           <img src={EMAIL} alt="" /> 
           <h2>EMAIL/TELEFONE</h2>
           <p>ericribeiro756@gmail</p>
           <p>Tel:(11) 99800-6317</p>

        </div>
        <div className="box">
           <img src={LINKEDIN} alt="" /> 
           <h2>LINKEDIN</h2>
           <p>Eric Ribeiro</p>
        </div>
        </div>
        <div className='frase'>
    <h2>VOCÊ NÃO SE ARREPENDERÁ EM ME <span>TER</span> EM SUA <span>EQUIPE</span></h2>
        </div>
        
    </section>
  )
}

export default Redes
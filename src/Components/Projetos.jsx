import FILME from '../imagens/PROJECTBI.PNG';

import Excel from '../imagens/Excel Projeto.jpg';



import React, { useState } from 'react';
import CardTextInleft from './CardTextInleft';
import CardTextInRight from './CardTextInRight';

import './Projeto.css';

const Projetos = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [

   <CardTextInleft text="
   Um dashboard interativo no Excel, desenvolvido com tabelas dinâmicas, oferece uma visão clara e organizada dos dados, facilitando a análise e tomada de decisões. Com um design profissional e bem estruturado, ele apresenta gráficos dinâmicos, filtros intuitivos e métricas estratégicas que tornam a interpretação das informações mais eficiente. A interface responsiva permite explorar tendências, identificar padrões e gerar relatórios detalhados com poucos cliques. A automação de cálculos e a interatividade proporcionada pelas tabelas dinâmicas garantem uma experiência fluida, tornando o dashboard uma ferramenta essencial para otimizar a gestão e análise de dados empresariais." 
   header="DASHBOARD: VENDAS XBOX "
   src={Excel}
   href="https://docs.google.com/spreadsheets/d/1khuvdVxIa0jg6Klt4QPwJRUgzBtdghM6ElDGoNfPd18/edit?gid=860618199#gid=860618199"
   hrefCode="https://github.com/Eric-byte-150/Barbeariacerto"/>
   ,

    
    <CardTextInRight text="
  O projeto InsightSales é um painel interativo para gestão de vendas, desenvolvido no Power BI com um pouco de DAX para cálculos personalizados. Ele exibe métricas essenciais, como faturamento por loja, período e forma de pagamento, além de uma análise detalhada por produto, destacando os mais vendidos. Os filtros dinâmicos permitem personalizar a exibição dos dados, tornando a análise mais eficiente. Com gráficos intuitivos e um design bem organizado, o painel facilita a tomada de decisões. A navegação fluida e a disposição clara das informações tornam o acompanhamento de vendas mais ágil e preciso, ajudando na definição de estratégias." 
   header="INSIGHTSALES - DADOS EM DECISÕES ESTRATÉGICAS"
   src={FILME}
   href="https://youtu.be/N2YhHJY_5ws"
   hrefCode="https://github.com/Eric-byte-150/Lista-de-filmes"
   />,
 
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);


  return (
    <section className="Projetos" id='projetos'>
      <h1>PROJETOS</h1>
      <div id="projectsVisible">
        {visibleProjects.map((project, index) => (
          <div className="projeto" key={index}>
            {project}
          </div>
        ))}
      </div>
    {/*<div className="ver">
<button className="ver-mais-menos" onClick={handleClick}>
        {showAllProjects ? 'Ver Menos' : 'Ver Mais'}
      </button>
</div>
      */}


    </section>
  );
};

export default Projetos;

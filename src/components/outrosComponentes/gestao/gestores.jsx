import React, { useState } from 'react';
import g from './Gestao.module.css';
import jsoon from '../../dados.json';

const gestores = jsoon.Pages.gestao.gestores.map((item) => {
    return(
        {
            nome: item.nome,
            foto: item.foto,
            area: item.area
        }
    )
})

const professores = jsoon.Pages.gestao.professores.map((item)=>{
    return(
        {
            nome: item.nome,
            foto: item.foto,
            cargo: item.cargo,
            formacao: item.formacao
        }
    )
})
function Gestores() {
    return (
        <>
            <main>
                <div className={g.container_nome}>
                    <hr className={g.linha} />
                    <h1 className={g.nome_topo}>Grupo de Gestores e Professores</h1>
                </div>
                <div className={g.container}>   
                    {gestores.map((item, index) => (
                        <div className={g.infoGestores} key={index}>
                            <img src={item.foto} alt="foto" width={250} />
                            <div className={g.infoAbaixo}>
                                <div className={g.infoAbaixo1}>
                                    <hr className={g.linha2} />
                                    <h2 className={g.nomeGestor}>{item.nome}</h2>
                                </div>
                                <h2 className={g.nomeGestor1}><strong>{item.area}</strong></h2>
                            </div>
                        </div>
                        ))};
                </div>
                {professores.map((item,index)=> (
                    <div className={g.containerProfs} key={index}>
                        <div className={g.laranjaBack}>
                            <div className={g.corBack}>
                                <img src={item.foto} alt="aaaa" />
                            </div>
                        </div>
                        <div className={g.containerNomeProf}>
                            <div className={g.infors}>
                                <hr className={g.linhaProf}/>
                                <h2 className={g.nomeProf}>{item.nome}</h2>
                            </div>
                            <div className={g.infors1}>
                                <div className={g.cargo}>
                                    <h2 className={g.restoInfo}>Cargo:&nbsp;</h2>
                                    <h2 className={g.restoInfo}>{item.cargo}</h2>
                                </div>
                                <div className={g.cargo}>
                                    <h2 className={g.restoInfo}>Formação:&nbsp;</h2>
                                    <h2 className={g.restoInfo}>{item.formacao}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
};

export default Gestores;
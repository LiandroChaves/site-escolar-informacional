import React, { useState } from 'react';
import d from '../devs/Dev.module.css';
import { Link } from 'react-router-dom';
import jsoon from '../../dados.json';

const devs = jsoon.Pages.dev.devs.map((item)=>{
    return(
        {
            nome: item.nome,
            area: item.area,
            foto: item.foto
        }
    )
})

function EquipeDev() {
    return (
        <>
            <main>
                <div className={d.container_nome}>
                    <hr className={d.linha} />
                    <h1 className={d.nome_topo}>Equipe de desenvolvimento</h1>
                </div>
                <div className={d.container}>   
                {devs.map((item, index) => (
                    <div className={d.infoAlunos} key={index}>
                        <img src={item.foto} alt="foto" width={250} />
                        <div className={d.infoAbaixo}>
                            <div className={d.infoAbaixo1}>
                                <hr className={d.linha2} />
                                <h2 className={d.nomeDev}>{item.nome}</h2>
                            </div>
                            <h2 className={d.nomeDev1}><strong>{item.area}</strong></h2>
                            <button className={d.btnLinkedin}>Linkedin</button>
                        </div>
                    </div>
                    ))};
                </div>
            </main>
        </>
    )
};

export default EquipeDev;
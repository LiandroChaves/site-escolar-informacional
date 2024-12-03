
// ========================================================= CTRL + C, CLTR + V DESSE ARQUIVO EM OUTROS PARA OS CURSOS ==================================

// =============== Importações de fotos, ReactState e css.module =====================
import React, { useState } from 'react';
import a from '../Aprovacoes/Aprovacoes.module.css';
import { Link } from 'react-router-dom';
import jsoon from '../../dados.json';


// ===================================================================================

// =============== Criação de dados em formato de json para usar no map===============

const alunos = jsoon.Pages.aprovMasso.alunos.map((item)=>{
    return(
        {
            nome: item.nome,
            curso: item.curso,
            foto: item.foto
        }
    )
})

const melhoresAlunosMes = jsoon.Pages.aprovMelhoresMasso.alunos.map((item)=>{
    return(
        {
            nome: item.nome,
            curso: item.curso,
            foto: item.foto
        }
    )
})


// ===================================================================================


function AprovacoesMasso() {
    // ============= Criando um index de inicio para referenciar os alunos visíveis no useState ==============
    const [indexInicio, setindexInicio] = useState(0);
    // =====================================================

    // ======== Função para adiconar +1 no useStat e atualizar no estado ==============
    const PassarProx = () => {
        if (indexInicio < alunos.length - 5) {
            setindexInicio(indexInicio + 1);
        }
    };
    // =========================================================================


    // ======== Função para adiconar -1 no useStat e atualizar no estado ==============
    const VoltarAnt = () => {
        if (indexInicio > 0) {
            setindexInicio(indexInicio - 1);
        }
    };
    // =========================================================================

    // ================= Utilizando a função slice para adionar no carrousel de aprovações ===================================
    const alunos_visiveis = alunos.slice(indexInicio, indexInicio + 5);
    // ======================================================================

    // =================================== Utilizando biblio. math para checar a quant de slides visíveis  
    const total_paginas = Math.ceil(alunos.length / 1);
    // ======================================================================

    // ================== Utilizando math para definir uma página de início ==============================
    const pagina_inicio = Math.floor(indexInicio / 1);
    // ======================================================================

    // ======= Carroussel ===========================================================
    return (
        <>
            <main>
                <div className={a.container_nome}>
                    <hr className={a.linha} />
                    <h1 className={a.nome_topo}>Aprovações do bimestre</h1>
                </div>
                <h2 className={a.mdb}>Melhores do bimestre</h2>
                <div className={a.container}>   
                    {melhoresAlunosMes.map((item, index) => (
                        <div className={a.infoAlunos} key={index}>
                            <img src={item.foto} alt="foto" width={250} />
                            <div className={a.infoAbaixo}>
                                <div className={a.infoAbaixo1}>
                                    <hr className={a.linha2} />
                                    <h2 className={a.nomeDev}>{item.nome}</h2>
                                </div>
                                <h2 className={a.nomeDev1}><strong>{item.curso}</strong></h2>
                                <button className={a.btnLinkedin}>Linkedin</button>
                            </div>
                        </div>
                    ))};
                </div>
            </main>
            <div className={a.aprovacoes_container}>
                <div className={a.linha_aprov}>
                    <h2 className={a.aprovacoes_titulo}>Aprovações do Bimestre</h2>
                    <div className={a.dropdown}>
                        <h2>Aprovações por curso</h2>
                        <ul className={a.dropdown_menu}>
                            <Link to="/aprovadm"><li>Adiministração</li></Link>
                            <Link to="/aprovdds"><li>Des. de Sistemas</li></Link>
                            <Link to="/aprovedf"><li>Edificações</li></Link>
                            <Link to="/aprov"><li>Aprovações gerais</li></Link>
                        </ul>
                    </div>
                </div>
                <div className={a.carrossel_container}>
                    {indexInicio >= 0 && <button className={a.seta} onClick={VoltarAnt}>◀</button>}
                    <div className={a.grid_container}>
                        {/* =========================== Utilizando o map para percorer meus dados json ================================================= */}
                        {alunos_visiveis.map((aluno, index) => (
                            <div key={index} className={a.card}>
                                <img src={aluno.foto} alt={aluno.nome} />
                                <div className={a.card_nome}>{aluno.nome}</div>
                                <div className={a.card_curso}>Curso: {aluno.curso}</div>
                            </div>
                        ))}
                        {/* ==================================================== */}
                    </div>
                    {indexInicio + 4 < alunos.length && <button className={a.seta} onClick={PassarProx}>▶</button>}
                </div>
                <div className={a.indicadores}>
                    {Array.from({ length: total_paginas - 4 }, (_, i) => (
                        <div
                            key={i}
                            className={`${a.indicador} ${i === pagina_inicio ? a.active : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
        {/* // ====================================================================== */}
        </>
    );
}

export default AprovacoesMasso;



// ========================================================= CTRL + C, CLTR + V DESSE ARQUIVO EM OUTROS PARA OS CURSOS ==================================
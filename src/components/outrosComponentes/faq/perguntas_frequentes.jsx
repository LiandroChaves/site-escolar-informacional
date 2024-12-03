import React from 'react';
import p from '../faq/faq.module.css';
import icperfil1 from '/assets/iconeperfil1.png'
import icperfil2 from '/assets/iconeperfil2.png'
import jsoon from '../../dados.json';

// import Header from "./header";
// import Navbar from "./nav";
// import exemploImagem from '/assets/john wick.webp';
// import Footer from "./footer";

const PerRe = jsoon.Pages.faq.perre.map((item)=>{
    return(
        {
            pergunta: item.pergunta,
            resposta: item.resposta
        }
    )
})

const Branca = jsoon.Pages.faq.branca.map((item)=>{
    return(
        {
            pergunta: item.pergunta,
            resposta: item.resposta
        }
    )
})

const Lista = jsoon.Pages.faq.lista.map((item)=>{
    return(
        {
            pergunta: item.pergunta,
            resposta1: item.resposta1,
            resposta2: item.resposta2,
            resposta3: item.resposta3,
            resposta4: item.resposta4
        }
    )
})

function FAQ() {
    
    return (
        <>
            <main className={p.pageContent}>
                <div className={p.pf}>
                    <span className={p.barra_lateral}></span>
                    <h2 className={p.Titulozin}>FAQ - perguntas Frequentes</h2>
                </div>
                {PerRe.map((item, index) => (
                    <div className={p.labelperguntas} key={index}>
                        <img src={icperfil1} alt="iconeperfil1" />
                        <span className={p.barra_lateralInt}></span>
                        <div className={p.slaman}>
                            <h2 className={p.pergunta}>{item.pergunta}</h2>
                            <p className={p.resposta}>{item.resposta}</p>
                        </div>
                    </div>
                ))}
                {Lista.map((item, index) => (
                    <div className={p.labelperguntas1} key={index}>
                        <img src={icperfil2} alt="iconeperfil2" />
                        <span className={p.barra_lateralInt2}></span>
                        <div className={p.slaman1}>
                            <h2 className={p.pergunta}>{item.pergunta}</h2>
                            <ul className={p.slaman1}>
                                <li><p className={p.Idelistinha}>{item.resposta1}</p></li>
                                <li><p className={p.Idelistinha}>{item.resposta2}</p></li>
                                <li><p className={p.Idelistinha}>{item.resposta3}</p></li>
                                <li><p className={p.Idelistinha}>{item.resposta4}</p></li>
                            </ul>
                        </div>
                    </div>
                ))}
                {Branca.map((item, index) => (
                    <div className={p.labelperguntas2} key={index}>
                        <img src={icperfil1} alt="iconeperfil1" />
                        <span className={p.barra_lateralInt}></span>
                        <div className={p.slaman}>
                            <h2 className={p.pergunta}>{item.pergunta}</h2>
                            <p className={p.resposta}>{item.resposta}</p>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}


export default FAQ;
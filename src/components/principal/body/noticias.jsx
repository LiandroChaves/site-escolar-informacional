// import { useState } from 'react';
import n from './Noticia.module.css';
import jsoon from '../../dados.json';

const noticias = jsoon.Pages.noticia.noticias.map((item)=>{
    return(
        {
            data: item.data,
            titulo: item.titulo,
            noticia: item.noticia
        }
    )
})

function Noticias() {
    return (
        <>

            <div className={n.container_principal}>
                <h1 className={n.nome_principal}>Todas as notícias</h1>
                {noticias.map((item, index) => (
                    <div key={index}>
                        <div className={n.coluninhas}>
                            <p className={n.coluninha}></p>
                            <p className={n.data}>{item.data}</p>
                        </div>
                        <div className={n.container}>
                            <p className={n.coluninha2}></p>
                            <div className={n.txtEColuna2}>
                                <h2 className={n.txt}>{item.titulo}</h2>
                                <p className={n.txt2}>{item.noticia}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Noticias;

import React, { useState } from 'react';
import b from '../body/Body.module.css';
import img_adm from '/assets/logo_adm.png';
import img_dds from '/assets/logo_dds.png';
import img_edf from '/assets/logo_edf.png';
import img_mas from '/assets/logo_mas.png';
import { Link } from 'react-router-dom';
import jsoon from '../../dados.json';

import Noticias from '../body/noticias';


const fotos = jsoon.Pages.body.listaBody.map((item)=>{
    return(
        {
            img: item.img,
            legenda: item.legenda
        }
    )
})
// ==========================================================
function Body() {

    const [indexInicio, setindexInicio] = useState(0);

    const PassarProx = () => {
        if (indexInicio < fotos.length - 1) {
            setindexInicio(indexInicio + 1);
        }
    };

    const VoltarAnt = () => {
        if (indexInicio > 0) {
            setindexInicio(indexInicio - 1);
        }
    };

    return (
        <>
            <div className={b.container}>
                <Link to='/adm'>
                    <div className={b.quadrado_curso_container}>
                        <div className={b.quadrado_curso} id={b.adm}>
                            <img className={b.img_cursos} src={img_adm} alt="Imagem_adm" />
                            <hr className={b.linha_quadrado} />
                        </div>
                        <h2>ADMINISTRAÇÃO</h2>
                    </div>
                </Link>
                <Link to='/cursos'>
                    <div className={b.quadrado_curso_container}>
                        <div className={b.quadrado_curso} id={b.dds}>
                            <img className={b.img_cursos} src={img_dds} alt="Imagem_dds" />
                            <hr className={b.linha_quadrado} />
                        </div>
                        <h2>DES. DE SISTEMAS</h2>
                    </div>
                </Link>
                <Link to='/edf'>
                    <div className={b.quadrado_curso_container}>
                        <div className={b.quadrado_curso} id={b.edf}>
                            <img className={b.img_cursos} src={img_edf} alt="Imagem_edf" />
                            <hr className={b.linha_quadrado} />
                        </div>
                        <h2>EDIFICAÇÕES</h2>
                    </div>
                </Link>
                <Link to='/masso'>
                    <div className={b.quadrado_curso_container}>
                        <div className={b.quadrado_curso} id={b.mas}>
                            <img className={b.img_cursos} src={img_mas} alt="Imagem_masso" />
                            <hr className={b.linha_quadrado} />
                        </div>
                        <h2>MASSOTERAPIA</h2>
                    </div>
                </Link>
            </div>
            <div className={b.container2}>
                <div className={b.img_info_escola}>
                    <img className={b.img_escola} src={fotos[indexInicio].img} alt="img_escola" />
                    <div className={b.seta_pequena_container}>
                        <button className={b.seta_pequena} onClick={VoltarAnt}>◀</button>
                        <button className={b.seta_pequena} onClick={PassarProx}>▶</button>
                    </div>
                    <div className={b.texto_hover}>
                        <p className={b.leg_carrosel}>{fotos[indexInicio].legenda}</p>
                    </div>
                </div>
                <div className={b.texto_infor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia autem deleniti voluptatum porro vel soluta numquam, saepe maxime illum sed consectetur dolores cum doloremque explicabo obcaecati atque aliquid itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, minima vero ea similique nesciunt omnis quos quis modi sint vitae esse? Illum veniam explicabo soluta tempore, beatae inventore blanditiis? Inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas, inventore tempore aliquid earum nulla hic perferendis velit est debitis quaerat dolorum ullam porro deserunt blanditiis asperiores architecto consequatur labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam in dolores odit deserunt labore quis quia eveniet neque, ipsa molestias distinctio at consequatur voluptates fugiat. Eius obcaecati eos tenetur? Pariatur veniam in dolores odit deserunt labore quis quia eveniet neque, ipsa molestias distinctio at consequatur voluptates fugiat. Eius obcaecati eos tenetur?
                </div>
            </div>
            <Noticias />
        </>
    );
}

export default Body;

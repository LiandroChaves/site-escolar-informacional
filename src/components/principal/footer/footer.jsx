import { useState } from "react";
import f from "../footer/Footer.module.css"
import logoEscola from '/assets/Logo Lucia Baltazar.png';
import wpp from '/assets/wpp.png'
import insta from '/assets/insta.png'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <div className={f.container}>
                <hr className={f.Linhatopo} />
                <div className={f.container2}>
                    <div className={f.sla}>
                        <Link to="/"><img src={logoEscola} alt="logoescola" /></Link>
                        <span>EEEP LÚCIA BALTAZAR COSTA</span>
                        <ul className={f.listaFoter}>
                            <Link><li>Cursos</li></Link>
                            <Link><li>Grade curricular</li></Link>
                            <Link to="/aprov"><li className={f.linkfooter}>Aprovações</li></Link><Link><li>Sobre nós</li></Link>
                            <Link to="/FAQ"><li>FAQ</li></Link>
                            <Link><li>Contato</li></Link>
                            <Link to="/dev"><li>Desenvolvedores</li></Link>
                            <Link><li>Voltar ao topo</li></Link>
                        </ul>
                    </div>
                    <div className={f.midias}>
                        <ul>
                            <a href="#"><li><img src={insta} alt="insta" /></li></a>
                            <a href="#"><li><img src={wpp} alt="wpp" /></li></a>
                        </ul>
                    </div>
                    <div className={f.txtRodape}>
                        <p>&copy; 2024 - EEEP LÚCIA BALTAZAR COSTA - Todos os direitos reservados - </p><u>Termos e condições de uso e Política de privacidade</u>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
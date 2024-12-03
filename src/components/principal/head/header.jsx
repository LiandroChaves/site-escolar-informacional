import { useState } from 'react';
import h from '../head/Header.module.css';
import logoEscola from '/assets/Logo Lucia Baltazar.png';
import logoSeduc from '/assets/logo_seduc.png';
import logoCeara from '/assets/logonova3 (1) 1.svg';
import { Link } from "react-router-dom";
// import Gestao from "../../outrosComponentes/Gestores/gestores"  


function Header() {
  const [barra_lat_aberta, setBarraLatAberta] = useState(false);

  const mostraBarra = () => {
    setBarraLatAberta(!barra_lat_aberta);
  };

  return (
    <>
      <header className={h.container}>
        <div className={h.logoELinha}>
          <Link to="/"><img className={h.logoEscola} src={logoEscola} alt="Logo-escola" /></Link>
          <div className={h.linhaVerticalGrande}></div>
        </div>
        <div className={h.infoEscola}>
          <h2>EEEP LÚCIA BALTAZAR COSTA</h2>
          <div className={h.seducContainer}>
            <img className={h.logoSeduc} src={logoSeduc} alt="Logo SEDUC" />
            <img className={h.logoCe} src={logoCeara} alt="Logo CE" />
          </div>
        </div>
        <div className={h.cadastro}>
          <a href="/pre-cadastro"><h3>PRÉ-CADASTRO</h3></a>
        </div>
        <div className={h.login}>
          <a href="/login"><h3>LOGIN</h3></a>
        </div>
        <div className={h.menu} onClick={mostraBarra}>
          <h3>☰</h3>
        </div>
        <hr className={h.linha_laranja} />
      </header>

      {/* Barra lateral */}
      <div className={h.barra_lat} style={{ transform: barra_lat_aberta ? 'translateX(0)' : 'translateX(100%)' }}>
        <button className={h.btn_fechar} onClick={mostraBarra}>
          x
        </button>
        <nav>
          <ul>
            <li><a href="/pre-cadastro">Pré-cadastro</a></li>
            <li><a href="/login">Login</a></li>
            <Link to="/aprov"><li>Aprovações</li></Link>
            <Link to="/FAQ"><li>FAQ</li></Link>
            <Link to="/gestores"><li>Gestão escolar</li></Link>
            <Link to="/dev"><li>Desenvolvedores</li></Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

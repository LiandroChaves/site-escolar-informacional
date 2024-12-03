// src/components/Navbar.jsx
import React from 'react';
import n from '../nav/Nav.module.css';
import vetor from '/assets/Vector 18.png'

function Navbar() {
  return (
    <>
      <nav className={n.container}>
        <div className={n.btn_aluno}>
          <a href="https://aluno.seduc.ce.gov.br" target="_blank" rel="noopener noreferrer">ALUNO ONLINE</a>
        </div>
        <div className={n.btn_professor}>
          <a href="https://professor.seduc.ce.gov.br" target="_blank" rel="noopener noreferrer">PROFESSOR ONLINE</a>
        </div>
      </nav>
      <hr className={n.linha_verde} />
      <img src={vetor} alt="vetor" className={n.imgVetor} />
    </>
  );
}

export default Navbar;

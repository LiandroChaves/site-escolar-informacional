import React from 'react';
import c from './PaginaCursos.module.css';
import exemploImagem from '/assets/john wick.webp';
import Footer from "../principal/footer/footer";

const informacoes = [
    { titulo: 'Objetivos do curso', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium quod? Molestias ducimus deleniti omnis non aliquam quasi quas aspernatur soluta unde illo adipisci dolores, ad totam atque perspiciatis consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?' },
    { titulo: 'Áreas de atuação', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium quod? Molestias ducimus deleniti omnis non aliquam quasi quas aspernatur soluta unde illo adipisci dolores, ad totam atque perspiciatis consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?' },
    { titulo: 'Oportunidades de carreira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium quod? Molestias ducimus deleniti omnis non aliquam quasi quas aspernatur soluta unde illo adipisci dolores, ad totam atque perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?lor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?' },
    { titulo: 'Elementos curriculares', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium quod? Molestias ducimus deleniti omnis non aliquam quasi quas aspernatur soluta unde illo adipisci dolores, ad totam atque perspiciatis consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores ut fugit officiis quasi ad culpa ab odio, maiores, temporibus, doloremque inventore aperiam rerum hic sunt voluptatibus iusto ullam sint?' },
];

function Dds() {
    return (
        <>
            <div className={c.pageContent}>
                <h1 className={c.Cursonome}>
                    <span className={c.barra_lateral}></span>
                    Desenvolvimento de sistemas
                </h1>
                <div className={c.imgProfs}>
                    <img src={exemploImagem} alt="Descrição da imagem" className={c.imagem} />
                    <span className={c.barra_lateralFoto}></span>
                    <div>
                        <h2 className={c.h2PEspaçotop}>CORDENADOR DO CURSO</h2>
                        <h2 className={c.h2PEspaço}>Adriano Gomes da Silva</h2>
                        <p className={c.h2PEspaço}>Formação:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat magni iure. Nam atque obcaecati odit dolores sapiente harum dicta, quis quasi doloribus quaerat facere minus eos magni vero maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos dolorem at eveniet recusandae, provident praesentium ipsa blanditiis aut omnis quam? Consequuntur voluptate iusto cupiditate nobis quos reiciendis neque nemo!</p>
                    </div>
                </div>
                <div className={c.imgProfs}>
                    <img src={exemploImagem} alt="Descrição da imagem" className={c.imagem} />
                    <span className={c.barra_lateralFoto}></span>
                    <div>
                        <h2 className={c.h2PEspaçotop}>ORIENTADOR DO CURSO</h2>
                        <h2 className={c.h2PEspaço}>Jiannini Baggio Diogenes de Sousa</h2>
                        <p className={c.h2PEspaço}>Formação:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat magni iure. Nam atque obcaecati odit dolores sapiente harum dicta, quis quasi doloribus quaerat facere minus eos magni vero maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos dolorem at eveniet recusandae, provident praesentium ipsa blanditiis aut omnis quam? Consequuntur voluptate iusto cupiditate nobis quos reiciendis neque nemo!</p>
                    </div>
                </div>
                <div className={c.informacoesContainer}>
                    {informacoes.map((item, index) => (
                        <div key={index} className={c.informacaoItem}>
                            <div className={c.coluninhas}>
                                <span className={c.barra_lateral}></span>
                            </div>
                            <div className={c.Titulos_informações}>
                                <h2 className={c.txt}>{item.titulo}</h2>
                                <p className={c.descricao}>{item.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <table className={c.tabela}>
                    <thead>
                        <tr>
                            <th>Componentes curriculares</th>
                            <th className={c.colunaMaior}>1º ano</th>
                            <th className={c.colunaMaior}>2º ano</th>
                            <th className={c.colunaMaior}>3º ano</th>
                            <th className={c.colunaMaior}>4º ano</th>
                            <th className={c.colunaMaior}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={c.formGeral}>Formação geral</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                        </tr>
                        <tr>
                            <td className={c.formProf}>Formação profissional</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                            <td>Preparado para mais informações</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Dds;

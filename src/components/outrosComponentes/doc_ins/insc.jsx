import i from "./insc.module.css"
import logoEscola from '/assets/Logo Lucia Baltazar.png';
import logoCeara from '/assets/logonova3 (1) 1.svg';
import logoSeduc from '/assets/logo_seduc.png';

// #172E27 verde escuro
// #F58634 laranja
// #808080 cinza
// #FFFFFF branco
// #F2E2E2 bege

export default function Insc() {
    return(
    <form className={i.forminsc}>

        <div className={i.contform}> {/*V indetificação aluno */}
            <h3 className={i.titulo_cont}>{"Identificação (Aluno)"}</h3>
            <div className={i.contlinhabase}>
            <label className={i.labelinscG} htmlFor="nomealuno">Nome:</label>
            <input className={i.inputinscG} type="text" name="nomealuno" id="nomealuno" />
            </div>

            <div className={i.contlinhabase}>
            <label className={i.labelinscG} htmlFor="nomesocial">Nome social:</label>
            <input className={i.inputinscG} type="text" name="nomesocial" id="nomesocial" />
            </div>

            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="cpf">cpf:</label>
                    <input className={i.inputinscG} type="text" name="cpf" id="cpf" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG}  htmlFor="nascimento">nascimento:</label>
                    <input className={i.inputinscG} type="text" name="nascimento" id="nascimento" />
                </div>
            </div>

            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="rg">registro geral:</label>
                    <input className={i.inputinscG} type="text" name="rg" id="rg" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="org_expd">orgão expeditor:</label>
                    <input className={i.inputinscG} type="text" name="org_expd" id="org_expd" />
                </div>
            </div>

            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="endereco">endereço:</label>
                    <input className={i.inputinscG} type="text" name="endereco" id="endereco" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="bairro">bairro:</label>
                    <input className={i.inputinscG} type="text" name="bairro" id="bairro" />
                </div>
            </div>

            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="municipio">municipio:</label>
                    <input className={i.inputinscG} type="text" name="municipio" id="municipio" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="estado">estado:</label>
                    <input className={i.inputinscG} type="text" name="estado" id="estado" />
                </div>
            </div>

            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="telefone:">telefone:</label>
                    <input className={i.inputinscG} type="text" name="telefone:" id="telefone:" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="cep">cep:</label>
                    <input className={i.inputinscG} type="text" name="cep" id="cep" />
                </div>
            </div>
        </div>


        <div> {/*L indetificação responsavel */}
            <div className={i.indentResp}>
                <div className={i.nomeELinha}>
                    <h2 className={i.nomeTop}>Identificação do Responsável</h2>
                </div>
                <div className={i.container}>
                    <div className={i.nomePai}>
                        <label htmlFor="nomePai" className={i.nPai}>
                            Pai:&nbsp;
                        </label>
                        <input type="text" id="nomePai" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePai}>
                        <label htmlFor="nomeMae" className={i.nPai}>
                            Mãe:&nbsp;
                        </label>
                        <input type="text" id="nomeMae" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePai}>
                        <label htmlFor="nomeRespons" className={i.nPai}>
                            Responsável Legal:&nbsp;
                        </label>
                        <input type="text" id="nomeRespons" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePaiSep}>
                        <label htmlFor="profissao" className={i.nPai}>
                            Profissão:&nbsp;
                        </label>
                        <input type="text" id="profissao" className={i.inputPai}/>
                        <label htmlFor="localTrab" className={i.nPai}>
                            Local de Trabalho:&nbsp;
                        </label>
                        <input type="text" id="localTrab" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePaiSep}>
                        <label htmlFor="rgpais" className={i.nPai}>
                            RG:&nbsp;
                        </label>
                        <input type="text" id="rgpais" className={i.inputPai}/>
                        <label htmlFor="orgaoExp" className={i.nPai}>
                            Orgão Expeditor:&nbsp;
                        </label>
                        <input type="text" id="orgaoExp" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePai}>
                        <label htmlFor="cpfpais" className={i.nPai}>
                            CPF:&nbsp;
                        </label>
                        <input type="text" id="cpfpais" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePaiSep}>
                        <label htmlFor="endereço" className={i.nPai}>
                            Endereço:&nbsp;
                        </label>
                        <input type="text" id="endereço" className={i.inputPai}/>
                        <label htmlFor="bairro:" className={i.nPai}>
                            Bairro:&nbsp;
                        </label>
                        <input type="text" id="bairro:" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePaiSep}>
                        <label htmlFor="município" className={i.nPai}>
                            Município:&nbsp;
                        </label>
                        <input type="text" id="município" className={i.inputPai}/>
                        <label htmlFor="estadopais" className={i.nPai}>
                            Estado:&nbsp;
                        </label>
                        <input type="text" id="estadopais" className={i.inputPai}/>
                    </div>
                    <div className={i.nomePaiSep}>
                        <label htmlFor="contato1" className={i.nPai}>
                            Contato 1:&nbsp;
                        </label>
                        <input type="text" id="contato1" className={i.inputPai}/>
                        <label htmlFor="contato2" className={i.nPai}>
                            Contato 2:&nbsp;
                        </label>
                        <input type="text" id="contato2" className={i.inputPai}/>
                    </div>
                </div>
            </div>
        </div>


        <div className={i.contform}>{/*V escolaridade Curso */}
            <h3 className={i.titulo_cont}>Escolaridade do curso</h3>
            <div className={i.contlinhabase}>
                <input type="radio" name="serie" id="serie1" />
                <label className={i.labelinscG} htmlFor="serie1">{`Série 1° 2024:`}</label>
            </div>
            <div className={i.contlinhabase}>
                <input type="radio" name="serie" id="serie2" />
                <label className={i.labelinscG} htmlFor="serie2">{`Série 2° 2025:`}</label>
            </div>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="serie3">{`Série 3° 2026:`}</label>
                <input type="radio" name="serie" id="serie3" />
            </div>
        </div>


        <div>  {/*L etnia do aluno */}
            <div className={i.contform}>{/*V escolaridade Curso */}
                <h3 className={i.titulo_cont}>{`Etnia do Aluno(a) (Raça/Cor)`}</h3>
                <div className={i.baseEtnia}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="branco" name="etnia" />
                        <label htmlFor="branco">Branco</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="indigena" name="etnia" />
                        <label htmlFor="indigena">Indígena</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="pardo" name="etnia" />
                        <label htmlFor="pardo">Pardo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="negro" name="etnia" />
                        <label htmlFor="negro">Negro</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="amarelo" name="etnia" />
                        <label htmlFor="amarelo">Amarelo</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="outro" name="etnia" />
                        <label htmlFor="outro">Outro</label>
                    </div>
                </div>
            </div> 
        </div>


        <div className={i.contform}> {/*V ficha biografica 1 */}
            <h3 className={i.titulo_cont}>Ficha biografica</h3>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Cursou a educação infantil?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="educacaoinfatil" id='educsim'/>
                                <label htmlFor="educsim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="educacaoinfatil" id='educnao'/>
                                <label htmlFor="educnao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="educinfantempo">Se sim, quanto tempo?</label>
                                <input className={i.inputinscG} type="text" id="educinfantempo" name="educinfantempo" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Estudou em escola particular?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="educacaopart" id='partsim'/>
                                <label htmlFor="partsim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="educacaopart" id='partnao'/>
                                <label htmlFor="partnao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="educparttempo">Se sim, quanto tempo?</label>
                                <input className={i.inputinscG} type="text" id="educparttempo" name="educparttempo" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Participa ou participou de outras atividades?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="atv" id='atvsim'/>
                                <label htmlFor="atvsim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="atv" id='atvnao'/>
                                <label htmlFor="atvnao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="atvtempo">Se sim, quanto tempo?</label>
                                <input className={i.inputinscG} type="text" id="atvtempo" name="atvtempo" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Repetiu algum ano?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="rpt" id='rptsim'/>
                                <label htmlFor="rptsim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="rpt" id='rptnao'/>
                                <label htmlFor="rptnao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="rptqts">Se sim, quantas vezes?</label>
                                <input className={i.inputinscG} type="number" id="rptqts" name="rptqts" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>estuda todo dia em casa?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="estdcasa" id='estdcasasim'/>
                                <label htmlFor="estdcasasim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="estdcasa" id='estdcasanao'/>
                                <label htmlFor="estdcasanao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="estdtempo">Se sim, quanto tempo?</label>
                                <input className={i.inputinscG} type="text" id="estdtempo" name="estdtempo" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Dispõe de local de estudo adequado?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="lclestd" id='lclestdsim'/>
                                <label htmlFor="lclestdsim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="lclestd" id='estdcasanao'/>
                                <label htmlFor="estdcasanao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="ondeestd">Se sim, onde?</label>
                                <input className={i.inputinscG} type="text" id="ondeestd" name="ondeestd" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Dispensado da prática de educação fisica?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="dispeducfis" id='dispeducfissim'/>
                                <label htmlFor="dispeducfissim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="dispeducfis" id='estdcasanao'/>
                                <label htmlFor="estdcasanao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="dispeducfismtv">Se sim, porque?</label>
                                <input className={i.inputinscG} type="text" id="dispeducfismtv" name="dispeducfismtv" />
                            </div>
                        </div>
                </div>
                <div className={i.blocoinfo}>
                    <p className={i.perguntainsc}>Precisa de acompanhamento especializado?</p>
                        <div className={i.contlinhasquest}>
                            <div className={i.contlinharadio}>
                                <input type="radio" name="acompanesp" id='acompansim'/>
                                <label htmlFor="acompansim">Sim</label>
                            </div>    
                            <div className={i.contlinharadiofim}>
                                <input type="radio" name="acompanesp" id='acompannao'/>
                                <label htmlFor="acompannao">Não</label>
                            </div>

                            <div className={i.extrainsc}>
                                <label className={i.labelinscG} htmlFor="acompanespmtv">Se sim, qual?</label>
                                <input className={i.inputinscG} type="text" id="acompanespmtv" name="acompanespmtv" />
                            </div>
                        </div>
                </div>
        </div>


        <div> {/*L ficha biografica 2 */}
            <div className={i.indentResp}>
                <div className={i.nomeELinha}>
                    <h2 className={i.nomeTop}>Ficha Biográfica</h2>
                </div>
                <h4 className={i.asipse}>Alguém se interessa pelo seu estudo?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim" name="interesseEstudo" />
                        <label htmlFor="sim">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao" name="interesseEstudo" />
                        <label htmlFor="nao">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem">Se sim, quem?</label>
                        <input type="text" id="simQuem" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Alguém o ajuda a estudar?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim1" name="interesseEstudo1" />
                        <label htmlFor="sim1">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao1" name="interesseEstudo1" />
                        <label htmlFor="nao1">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem1">Se sim, quem?</label>
                        <input type="text" id="simQuem1" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Frequenta a escola porque quer?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim2" name="interesseEstudo2" />
                        <label htmlFor="sim2">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao2" name="interesseEstudo2" />
                        <label htmlFor="nao2">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem2">Se sim, o motivo?</label>
                        <input type="text" id="simQuem2" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Frequenta o curso pretendido?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim3" name="interesseEstudo3" />
                        <label htmlFor="sim3">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao3" name="interesseEstudo3" />
                        <label htmlFor="nao3">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem3">Se sim, curso pretendido?</label>
                        <input type="text" id="simQuem3" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Gosta de estudar nessa escola?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim4" name="interesseEstudo4" />
                        <label htmlFor="sim4">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao4" name="interesseEstudo4" />
                        <label htmlFor="nao4">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem4">Se sim, o motivo?</label>
                        <input type="text" id="simQuem4" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Recebe apoio pedagógico?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim5" name="interesseEstudo5" />
                        <label htmlFor="sim5">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao5" name="interesseEstudo5" />
                        <label htmlFor="nao5">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem5">Se sim, qual?</label>
                        <input type="text" id="simQuem5" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <h4 className={i.asipse}>Recebe apoio pedagógico?</h4>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="sim6" name="interesseEstudo6" />
                        <label htmlFor="sim6">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="nao6" name="interesseEstudo6" />
                        <label htmlFor="nao6">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="simQuem6">Recebe benefício do governo?</label>
                        <input type="text" id="simQuem6" className={i.inputPaiInt}/>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
            </div>
        </div>


        <div> {/*L (Transporte escolar) */}
            <div className={i.indentResp}>
                <div className={i.nomeELinha}>
                    <h2 className={i.nomeTop}>O aluno ultiliza transporte escolar?</h2>
                </div>
                <div className={i.container2}>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="simtransp" name="transporte" />
                        <label htmlFor="simtransp">Sim</label>
                    </div>
                    <div className={i.corpoEtnia}>
                        <input type="radio" id="naotransp" name="transporte" />
                        <label htmlFor="naotransp">Não</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="qualRota">Qual a rota escolar?</label>
                        <input type="text" id="qualRota" className={i.inputPaiInt}/>
                    </div>
                </div>
            </div>
        </div>


        <div className={i.contform}>{/*V itinerario */}
            <h3 className={i.titulo_cont}>{"Itinerário"}</h3>
            <div className={i.blocoinfo}>
                <p className={i.perguntainsc}>Casa - Escola</p>
                <div className={i.contlinhabase}>
                    <div className={i.contlinhaprimr1}>
                        <label className={i.labelinscG} htmlFor="transporte">transporte:</label>
                        <input className={i.inputinscG} type="text" name="transporte" id="transporte" />
                    </div>
                    <div className={i.contlinhar1}>
                        <label className={i.labelinscG} htmlFor="tranportetmp">{"Tempo (min):"}</label>
                        <input className={i.inputinscG} type="text" name="tranportetmp" id="tranportetmp" />
                    </div>
                </div>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="distancia">Distância:</label>
                    <input className={i.inputinscG} type="text" name="distancia" id="distancia" />
                </div>
                <div className={i.separador}></div>
                <p className={i.contlinhasquest}>Escola - Casa</p>
                <div className={i.contlinhabase}>
                    <div className={i.contlinhaprimr1}>
                        <label className={i.labelinscG} htmlFor="transporte">transporte:</label>
                        <input className={i.inputinscG} type="text" name="transporte" id="transporte" />
                    </div>
                    <div className={i.contlinhar1}>
                        <label className={i.labelinscG} htmlFor="tranportetmp">{"Tempo (min):"}</label>
                        <input className={i.inputinscG} type="text" name="tranportetmp" id="tranportetmp" />
                    </div>
                </div>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="distancia">Distância:</label>
                    <input className={i.inputinscG} type="text" name="distancia" id="distancia" />
                </div>
            </div>
        </div> 


        <div className={i.indentResp}> {/* Necessidades especiais aquiii */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Necessidades especiais</h2>
            </div>
            <div className={i.container2}>
                <div className={i.corpoEtnia1}>
                    <label htmlFor="necesEspe">{"O(a) Aluno(a) possui Necessidades Especiais?"}</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simNeceEsp" name="necesEspe" />
                    <label htmlFor="simNeceEsp">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoNeceEsp" name="necesEspe" />
                    <label htmlFor="naoNeceEsp">Não</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="probCegueira" name="qualNeces" />
                    <label htmlFor="probCegueira">Cegueira</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probSurdez" name="qualNeces" />
                    <label htmlFor="probSurdez">Surdez Severa</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probSDD" name="qualNeces" />
                    <label htmlFor="probSDD">Síndrome de Down</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="probFisico" name="qualNeces" />
                    <label htmlFor="probFisico">Física</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probMultiplo" name="qualNeces" />
                    <label htmlFor="probMultiplo">Multípla</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probCegoESurdo" name="qualNeces" />
                    <label htmlFor="probCegoESurdo">Cegueira e Surdez</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="probBaixaVisao" name="qualNeces" />
                    <label htmlFor="probBaixaVisao">Baixa Visão</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probSurdezLeve" name="qualNeces" />
                    <label htmlFor="probSurdezLeve">Surdez Leve</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="probAutismo" name="qualNeces" />
                    <label htmlFor="probAutismo">Autismo</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota1}>
                    <input type="radio" id="probMentalSemSindro" name="qualNeces" />
                    <label htmlFor="probMentalSemSindro">Mental sem Síndrome</label>
                </div>
                <div className={i.feladapota}>
                    <label htmlFor="outroProb">Outra:</label>
                    <input type="text" id="outroProb" className={i.inputPaiInt}/>
                </div>
            </div>
        </div>


        <div className={i.contform}>{/*V ficha de saúde do aluno */}
            <h3 className={i.titulo_cont}>{"Ficha de Saúde do(a) Aluno(a)"}</h3>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="segsaude">Seguro saúde:</label>
                <input className={i.inputinscG} type="text" name="segsaude" id="segsaude" />
            </div>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="segsaude">Médico credenciado:</label>
                <input className={i.inputinscG} type="text" name="segsaude" id="segsaude" />
            </div>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="segsaude">Hospital credenciado:</label>
                <input className={i.inputinscG} type="text" name="segsaude" id="segsaude" />
            </div>
            <div className={i.contlinhaquestradiodir}>
                <p>Faz uso de alguma medicação:</p>
                <div className={i.contradio}>
                    <div className={i.contlinharadiodir}> {/* mudar este codigo pra ele funcionar sem dir */}
                        <input type="radio" name="medcontrol" id="medcontrolsim" />
                        <label htmlFor="medcontrolsim">Sim</label>
                    </div>
                    <div className={i.contlinharadiodirfim}>
                        <input type="radio" name="medcontrol" id="medcontrolnao" />
                        <label htmlFor="medcontrolnao">Não</label>
                    </div>
                </div>
            </div>
            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="mednome">qual medicação?</label>
                    <input className={i.inputinscG} type="text" name="mednome" id="mednome" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="tiposan">Tipo sanguineo:</label>
                    <input className={i.inputinscG} type="text" name="tiposan" id="tiposan" />
                </div>
            </div>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="emengnome">{"Em caso de emergência, procurar (nome)"}</label>
                <input className={i.inputinscG} type="text" name="emengnome" id="emengnome" />
            </div>
            <div className={i.contlinhabase}>
                <div className={i.contlinhaprimr1}>
                    <label className={i.labelinscG} htmlFor="parentesco">Parentesco:</label>
                    <input className={i.inputinscG} type="text" name="parentesco" id="parentesco" />
                </div>
                <div className={i.contlinhar1}>
                    <label className={i.labelinscG} htmlFor="telefone">Telefone:</label>
                    <input className={i.inputinscG} type="text" name="telefone" id="telefone" />
                </div>
            </div>
            <div className={i.blocoinfo}>
                <p className={i.perguntainsc}>{"Existe algum dado de saúde do(a) aluno(a) que deva ser informado à escola?"}</p>
                <div className={i.contlinhaquestradio}>
                    <div className={i.contradio}>
                        <div className={i.contlinharadiodir}>
                            <input type="radio" name="dadosaudeconfirm" id="dadosaudesim" />
                            <label  htmlFor="dadosaudesim">Sim</label>
                        </div>
                        <div className={i.contlinharadiodirfim}>
                            <input type="radio" name="dadosaudeconfirm" id="dadosaudenao" />
                            <label htmlFor="dadosaudenao">Não</label>
                        </div>
                    </div>
                    <div className={i.contlinhar1flexfacil}>
                        <label className={i.labelinscG} htmlFor="dadosaude">Qual?</label>
                        <input className={i.inputinscG} type="text" id="dadosaude" name="dadosaude" />
                    </div>
                </div>
            </div>
            <div className={i.contlinhaquestradiodir}>
                <p>Apresenta alguma restrição alimentar?</p>
                <div className={i.contradio}>
                    <div className={i.contlinharadiodir}> {/* mudar este codigo pra ele funcionar sem dir */}
                        <input type="radio" name="restralimen" id="restralimensim" />
                        <label htmlFor="restralimensim">Sim</label>
                    </div>
                    <div className={i.contlinharadiodirfim}>
                        <input type="radio" name="restralimen" id="restralimennao" />
                        <label htmlFor="restralimennao">Não</label>
                    </div>
                </div>
            </div>
            <div className={i.contlinhabase}>
                <label className={i.labelinscG} htmlFor="qualrestalimen">Qual?</label>
                <input className={i.inputinscG} type="text" name="qualrestalimen" id="qualrestalimen" />
            </div>
        </div> 


        <div> {/*L questionário socioeconomico da familia */}
            <div className={i.indentResp}>
                <div className={i.nomeELinha}>
                    <h2 className={i.nomeTop}>{`Questionário Sócio Econômico do(a) Aluno(a)`}</h2>
                </div>
                <div className={i.container2}>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="socioPai">Nome do Pai:</label>
                        <input type="text" id="socioPai" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.nomePaiSep1}>
                        <label htmlFor="socioprofissao" className={i.nPai}> 
                            Profissão:&nbsp;
                        </label>
                        <input type="text" id="socioprofissao" className={i.inputPai}/>
                        <label htmlFor="socioidade" className={i.nPai}>
                            Idade:&nbsp;
                        </label>
                        <input type="text" id="socioidade" className={i.inputPai}/>
                </div>
                <h4 className={i.asipse}>Escolaridade:</h4>
                <div className={i.baseEtnia1}>
                    <div className={i.feladapota}>
                        <input type="radio" id="nenhuma" name="escolaridade" />
                        <label htmlFor="nenhuma">Nenhuma</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiFundamIncomp" name="escolaridade" />
                        <label htmlFor="ensiFundamIncomp">Ensino fundamental incompleto</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="fundamCompleto" name="escolaridade" />
                        <label htmlFor="fundamCompleto">Ensino fundamental completo</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiMedComp" name="escolaridade" />
                        <label htmlFor="ensiMedComp">Ensino médio completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="medIcompleto" name="escolaridade" />
                        <label htmlFor="medIcompleto">Médio incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiSupComp" name="escolaridade" />
                        <label htmlFor="ensiSupComp">Ensino superior completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="supIcompleto" name="escolaridade" />
                        <label htmlFor="supIcompleto">Superior incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="posGradu" name="escolaridade" />
                        <label htmlFor="posGradu">Pós graduação</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota1}>
                        <input type="radio" id="ensinoSupComp" name="escolaridade" />
                        <label htmlFor="ensinoSupComp">Ensino superior completo</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="escoOutros">Outros:</label>
                        <input type="text" id="escoOutros" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.corpoEtnia}>
                        <div className={i.desempregado}>
                            <label>{`Está desempregada(o)?`}</label>
                            <div className={i.desemprego}>
                                <input type="radio" id="sociosim" name="desemprego" />
                                <label htmlFor="sociosim">{`Sim`}</label>
                            </div>
                            <div className={i.desemprego}>
                                <input type="radio" id="socionao" name="desemprego" />
                                <label htmlFor="socionao">{`Não`}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <div className={i.container2}>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="socioMae">Nome da Mãe:</label>
                        <input type="text" id="socioMae" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.nomePaiSep1}>
                        <label htmlFor="socioprofissaoMae" className={i.nPai}> 
                            Profissão:&nbsp;
                        </label>
                        <input type="text" id="socioprofissaoMae" className={i.inputPai}/>
                        <label htmlFor="socioidadeMae" className={i.nPai}>
                            Idade:&nbsp;
                        </label>
                        <input type="text" id="socioidadeMae" className={i.inputPai}/>
                </div>
                <h4 className={i.asipse}>Escolaridade:</h4>
                <div className={i.baseEtnia1}>
                    <div className={i.feladapota}>
                        <input type="radio" id="nenhumaMae" name="escolaridadeMae" />
                        <label htmlFor="nenhumaMae">Nenhuma</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiFundamIncompMae" name="escolaridadeMae" />
                        <label htmlFor="ensiFundamIncompMae">Ensino fundamental incompleto</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="fundamCompletoMae" name="escolaridadeMae" />
                        <label htmlFor="fundamCompletoMae">Ensino fundamental completo</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiMedCompMae" name="escolaridadeMae" />
                        <label htmlFor="ensiMedCompMae">Ensino médio completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="medIcompletoMae" name="escolaridadeMae" />
                        <label htmlFor="medIcompletoMae">Médio incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiSupCompMae" name="escolaridadeMae" />
                        <label htmlFor="ensiSupCompMae">Ensino superior completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="supIcompletoMae" name="escolaridadeMae" />
                        <label htmlFor="supIcompletoMae">Superior incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="posGraduMae" name="escolaridadeMae" />
                        <label htmlFor="posGraduMae">Pós graduação</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota1}>
                        <input type="radio" id="ensinoSupCompMae" name="escolaridadeMae" />
                        <label htmlFor="ensinoSupCompMae">Ensino superior completo</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="escoOutrosMae">Outros:</label>
                        <input type="text" id="escoOutrosMae" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                <div className={i.corpoEtnia}>
                        <div className={i.desempregado}>
                            <label>{`Está desempregada(o)?`}</label>
                            <div className={i.desemprego}>
                                <input type="radio" id="sociosimMae" name="desempregoMae" />
                                <label htmlFor="sociosimMae">{`Sim`}</label>
                            </div>
                            <div className={i.desemprego}>
                                <input type="radio" id="socionaoMae" name="desempregoMae" />
                                <label htmlFor="socionaoMae">{`Não`}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={i.linhabaixo} />
                <div className={i.container2}>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="socioResp">Nome do responsável:</label>
                        <input type="text" id="socioResp" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.nomePaiSep1}>
                        <label htmlFor="socioprofissaoResp" className={i.nPai}> 
                            Profissão:&nbsp;
                        </label>
                        <input type="text" id="socioprofissaoResp" className={i.inputPai}/>
                        <label htmlFor="socioidadeResp" className={i.nPai}>
                            Idade:&nbsp;
                        </label>
                        <input type="text" id="socioidadeResp" className={i.inputPai}/>
                </div>
                <h4 className={i.asipse}>Escolaridade:</h4>
                <div className={i.baseEtnia1}>
                    <div className={i.feladapota}>
                        <input type="radio" id="nenhumaResp" name="escolaridadeResp" />
                        <label htmlFor="nenhumaResp">Nenhuma</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiFundamIncompResp" name="escolaridadeResp" />
                        <label htmlFor="ensiFundamIncompResp">Ensino fundamental incompleto</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="fundamCompletoResp" name="escolaridadeResp" />
                        <label htmlFor="fundamCompletoResp">Ensino fundamental completo</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiMedCompResp" name="escolaridadeResp" />
                        <label htmlFor="ensiMedCompResp">Ensino médio completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="medIcompletoResp" name="escolaridadeResp" />
                        <label htmlFor="medIcompletoResp">Médio incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="ensiSupCompResp" name="escolaridadeResp" />
                        <label htmlFor="ensiSupCompResp">Ensino superior completo</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota}>
                        <input type="radio" id="supIcompletoResp" name="escolaridadeResp" />
                        <label htmlFor="supIcompletoResp">Superior incompleto</label>
                    </div>
                    <div className={i.feladapota}>
                        <input type="radio" id="posGraduResp" name="escolaridadeResp" />
                        <label htmlFor="posGraduResp">Pós graduação</label>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                    <div className={i.feladapota1}>
                        <input type="radio" id="ensinoSupCompResp" name="escolaridadeResp" />
                        <label htmlFor="ensinoSupCompResp">Ensino superior completo</label>
                    </div>
                    <div className={i.corpoEtnia1}>
                        <label htmlFor="escoOutrosResp">Outros:</label>
                        <input type="text" id="escoOutrosResp" className={i.inputPaiInt}/>
                    </div>
                </div>
                <div className={i.baseEtnia}>
                <div className={i.corpoEtnia}>
                        <div className={i.desempregado}>
                            <label>{`Está desempregada(o)?`}</label>
                            <div className={i.desemprego}>
                                <input type="radio" id="sociosimResp" name="desempregoResp" />
                                <label htmlFor="sociosimResp">{`Sim`}</label>
                            </div>
                            <div className={i.desemprego}>
                                <input type="radio" id="socionaoResp" name="desempregoResp" />
                                <label htmlFor="socionaoResp">{`Não`}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 


        <div className={i.contform}> {/*L Dados referentes a familia */}
            <h3 className={i.titulo_cont}>Dados Referentes à família</h3>
            <div className={i.formatado}>
                <div className={i.contbase}>
                    <p className={i.perguntainline}>Moradia:</p>
                    <div className={i.divradio}>
                        <input type="radio" name="possecasa" id="propria" />
                        <label className={i.labelradio} htmlFor="propria">propia</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="possecasa" id="alugada" />
                        <label className={i.labelradio} htmlFor="alugada">alugada</label>
                    </div>
                    <div className={i.divinputtext}>
                        <label className={i.labelinscG} htmlFor="casaoutros">Outros</label>
                        <input className={i.inputinscG} type="text" name="possecasa" id="casaoutros" />
                    </div>
                </div>
            </div>
            <div className={i.formatado}>    
                <div className={i.contbase}>
                    <p className={i.perguntainline}>Tipo de moradia:</p>
                    <div className={i.divradio}>
                        <input type="radio" name="tipocasa" id="alven" />
                        <label className={i.labelradio} htmlFor="alven">Alvenaria</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="tipocasa" id="barro" />
                        <label className={i.labelradio} htmlFor="barro">{"Barro(Taipa)"}</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="tipocasa" id="madeira" />
                        <label className={i.labelradio} htmlFor="madeira">Madeira</label>
                    </div>
                </div>
            </div>

            <div className={i.formatado}>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="tipocasaoutros">Outros:</label>
                    <input className={i.inputinscG} type="text" name="tipocasaoutros" id="tipocasaoutros"/>
                </div>
            </div>

            <div className={i.formatado}>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="qtdirmaos">quantidade de irmãos:</label>
                    <input className={i.inputinscG} type="number" name="qtdirmaos" id="qtdirmaos" />
                </div>
            </div>
            
            <div className={i.formatado}>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="qtdirmaos">{"quantidade de pessoas que residem na moradia (inclusive o aluno)"}:</label>
                    <input className={i.qtdirmaos} type="number" name="qtdirmaos" id="qtdirmaos" />
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*L renda mensal da familia */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Renda Mensal da Família</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.feladapota}>
                    <input type="radio" id="nenhumaRenda" name="renda" />
                    <label htmlFor="nenhumaRenda">Nenhuma</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="de04a06" name="renda" />
                    <label htmlFor="de04a06">De 04 até 06 salários mínimos</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="menos01min" name="renda" />
                    <label htmlFor="menos01min">Menos de 01 salário mínimo</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="de06a08" name="renda" />
                    <label htmlFor="de06a08">De 06 até 08 salários mínimos</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="de01a02" name="renda" />
                    <label htmlFor="de01a02">De 01 até 02 salários mínimos</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="miasde08" name="renda" />
                    <label htmlFor="miasde08">Mais de 08 salários mínimos</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="de02a04" name="renda" />
                    <label htmlFor="de02a04">De 02 até 04 salários mínimos</label>
                </div>
            </div>
        </div>


        <div className={i.contform}> {/* com quem o aluno mora */}
            <div className={i.formatado}>
                <h3 className={i.titulo_cont}>Com quem o aluno mora?</h3>
                <div className={i.contbase}>
                    <div className={i.divradio}>
                        <input type="radio" name="morar" id="moramae" />
                        <label className={i.labelradio} htmlFor="moramae">Mãe</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="morar" id="morapai" />
                        <label className={i.labelradio} htmlFor="morapai">Pai</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="morar" id="moraambos" />
                        <label className={i.labelradio} htmlFor="moraambos">Ambos</label>
                    </div>
                    <div className={i.divinputtext}>
                        <label className={i.labelinscG} htmlFor="moraoutros">Outros</label>
                        <input className={i.inputinscG} type="text" name="mora" id="moraoutros" />
                    </div>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*L tem computador com acesso a internet */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Tem computador com acesso à internet?</h2>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simComput" name="computador" />
                    <label htmlFor="simComput">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoComput" name="computador" />
                    <label htmlFor="naoComput">Não</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="asVezesComput" name="computador" />
                    <label htmlFor="asVezesComput">As vezes</label>
                </div>
            </div>
        </div>


        <div className={i.contform}> {/* com celular com acesso a internet?*/}
            <div className={i.formatado}>
                <p className={i.titulo_cont}>Possui celular com acesso a internet</p>
                <div className={i.contbase}>
                    <div className={i.divradio}>
                        <input type="radio" name="cellnet" id="cellnetsim" />
                        <label className={i.labelradio} htmlFor="cellnetsim">Sim</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="cellnet" id="cellnetnao" />
                        <label className={i.labelradio}  htmlFor="cellnetnao">Não</label>
                    </div>
                    <div className={i.divradio}>
                        <input type="radio" name="cellnet" id="cellnetasvezes" />
                        <label className={i.labelradio}  htmlFor="cellnetasvezes">As vezes</label>
                    </div>
                </div>

            </div>
        </div>


        <div className={i.indentResp}> {/*L a familia recebe algum beneficio pelo governo */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>A família recebe algum benefício dado pelo governo</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simBenef" name="beneficio" />
                    <label htmlFor="simBenef">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoBenef" name="beneficio" />
                    <label htmlFor="naoBenef">Não</label>
                </div>
                <div className={i.corpoEtnia1}>
                    <label htmlFor="simQualBenef">Se sim, qual?</label>
                    <input type="text" id="simQualBenef" className={i.inputPaiInt}/>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/* escolaridade onde concluiu o curso fundamental*/}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Escolaridade onde concluiu o ensino fundamental</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="publica" name="qualEscoFundamental" />
                    <label htmlFor="publica">Pública</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="particular" name="qualEscoFundamental" />
                    <label htmlFor="particular">Particular</label>
                </div>
                <div className={i.corpoEtnia1}>
                    <label htmlFor="qualEscola">Qual?</label>
                    <input type="text" id="qualEscola" className={i.inputPaiInt}/>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*L por que razão optou pela a EEEP */}
        <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Por que Razão Optou Pela EEEP?</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoproximididade" name="razaoEscolha" />
                    <label htmlFor="razaoproximididade">Proximidade com a residência</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoQualidade" name="razaoEscolha" />
                    <label htmlFor="razaoQualidade">Qualidade de ensino</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoJornIntegral" name="razaoEscolha" />
                    <label htmlFor="razaoJornIntegral">Jornada integral</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoCursoTec" name="razaoEscolha" />
                    <label htmlFor="razaoCursoTec">Para fazer o curso técnico</label>
                </div>
            </div>
            <div className={i.baseEtnia}>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoPrepararFacul" name="razaoEscolha" />
                    <label htmlFor="razaoPrepararFacul">Preparação para o ensino superior</label>
                </div>
                <div className={i.feladapota}>
                    <input type="radio" id="razaoPrepararTrab" name="razaoEscolha" />
                    <label htmlFor="razaoPrepararTrab">Preparação para o mercado de trabalho</label>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*V o que sabe sobre o curso... */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>{`O que sabe sobre o curso profissionalizante que o(a) aluno(a) cursará?`}</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoSeiCurso" name="conhecimentoCurso" />
                    <label htmlFor="naoSeiCurso">Não sei</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="poucoSeiCurso" name="conhecimentoCurso" />
                    <label htmlFor="poucoSeiCurso">Pouco sei</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="nocoesBasicasCurso" name="conhecimentoCurso" />
                    <label htmlFor="nocoesBasicasCurso">Tenho noções básicas</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="conhecoBemCurso" name="conhecimentoCurso" />
                    <label htmlFor="conhecoBemCurso">Conheço bem o curso</label>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*L justifique a escolha do curso... */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>{`Justifique a escolha do curso profissionalizante que o(a) aluno(a) cursará na escola`}</h2>
            </div>
            <div className={i.baseColuna}>
                <div className={i.inputColuna}>
                    <input type="radio" id="justAfinidadeCurso" name="justifiqueCurso" />
                    <label htmlFor="justAfinidadeCurso">Afinidade com o curso</label>
                </div>
                <div className={i.inputColuna}>
                    <input type="radio" id="justSugestaoCurso" name="justifiqueCurso" />
                    <label htmlFor="justSugestaoCurso">Sugestão da família</label>
                </div>
                <div className={i.inputColuna}>
                    <input type="radio" id="justSemOpcaoCurso" name="justifiqueCurso" />
                    <label htmlFor="justSemOpcaoCurso">Sem outra opção</label>
                </div>
                <div className={i.inputColuna}>
                    <input type="radio" id="justCursoBom" name="justifiqueCurso" />
                    <label htmlFor="justCursoBom">Por ser um curso bem conceituado no mercado</label>
                </div>
            </div>
        </div>


        <div className={i.contform}> {/*V onde obteve informações sobre o curso... */}
            <div className={i.formatado}>
                <h3 className={i.titulo_cont}>{"Onde obteve informações sobre o curso profissionalizante que o(a) aluno(a) irá cursar"}</h3>
                <div className={i.contbaseflex}>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="papel" />
                        <label className={i.labelradio} htmlFor="papel">livros e jornal</label>
                    </div>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="seminfo" />
                        <label className={i.labelradio} htmlFor="seminfo">não tive informações</label>
                    </div>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="propescola" />
                        <label className={i.labelradio} htmlFor="propescola">na propria escola</label>
                    </div>
                </div>
                <div className={i.contbaseflex}>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="profsinfo" />
                        <label className={i.labelradio} htmlFor="profsinfo">profissionais que ja atuam na area</label>
                    </div>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="midiainfo" />
                        <label className={i.labelradio} htmlFor="midiainfo">internet, tv e radio</label>
                    </div>
                    <div className={i.divradio}>
                        <input  type="radio" name="tipoinform" id="outroinfo" />
                        <label className={i.labelradio} htmlFor="outroinfo">outro</label>
                    </div>
                </div>
                <div className={i.contlinhabase}>
                    <label className={i.labelinscG} htmlFor="qualinfo">Qual?</label>
                    <input className={i.inputinscG} type="text" name="qualinfo" id="qualinfo" />
                </div>
            </div>
        </div>
        

        <div className={i.indentResp}> {/*L autorizo a imagem do aluno */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Autorizo a imagem do aluno?</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simImagem" name="autorizoImg" />
                    <label htmlFor="simImagem">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoImagem" name="autorizoImg" />
                    <label htmlFor="naoImagem">Não</label>
                </div>
            </div>
        </div>


        <div className={i.indentResp}> {/*V autorizo a divulgação dos resultados... */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>{"Autorizo a divulgação dos resultados de Aprendizagem do(a) Aluno(a)?"}</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simAultMelhorResult" name="autorizoDivulResult" />
                    <label htmlFor="simAultMelhorResult">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoAultMelhorResult" name="autorizoDivulResult" />
                    <label htmlFor="naoAultMelhorResult">Não</label>
                </div>
            </div>
        </div> 


        <div className={i.indentResp}> {/*L li e estou ciente das regras disciplinares e de escola */}
            <div className={i.nomeELinha}>
                <h2 className={i.nomeTop}>Li e estou ciente das regras disciplinares e de convivência estabelecida pela escola?</h2>
            </div>
            <div className={i.baseEtnia1}>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="simCienteRegras" name="autorizoRegras" />
                    <label htmlFor="simCienteRegras">Sim</label>
                </div>
                <div className={i.corpoEtnia}>
                    <input type="radio" id="naoCienteRegras" name="autorizoRegras" />
                    <label htmlFor="naoCienteRegras">Não</label>
                </div>
            </div>
        </div>


    </form>
    )
}

import Header from "../src/components/principal/head/header";
import Navbar from "../src/components/principal/nav/nav";
import styles from "./App.module.css";
import Body from "../src/components/principal/body/body";
import Footer from "../src/components/principal/footer/footer";
import Dds from "./components/cursos/dds";
import { Routes, Route, useLocation } from 'react-router-dom';
import Adm from "./components/cursos/adm";
import Edf from "./components/cursos/edf";
import Masso from "./components/cursos/masso";
import FAQ from "./components/outrosComponentes/faq/perguntas_frequentes";
import EquipeDev from "./components/outrosComponentes/devs/equipe";
import Aprovacoes from "./components/outrosComponentes/Aprovacoes/aprovacoes";
import AprovacoesDds from "./components/outrosComponentes/Aprovacoes/aprovacoesDds";
import AprovacoesAdm from "./components/outrosComponentes/Aprovacoes/aprovacoesAdm";
import AprovacoesEdf from "./components/outrosComponentes/Aprovacoes/aprovacoesEdf";
import AprovacoesMasso from "./components/outrosComponentes/Aprovacoes/aprovacoesMasso";
import Gestores from "./components/outrosComponentes/gestao/gestores";
import Insc from "./components/outrosComponentes/doc_ins/insc";
function App() {
  const location = useLocation();

    const showHeaderAndFooter = location.pathname !== '/cursos';


  return (
    <div className={styles.appContainer}>
      {showHeaderAndFooter && <Header />}
      {showHeaderAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cursos" element={<Dds />} /> 
        <Route path="/adm" element={<Adm />} />
        <Route path="/edf" element={<Edf />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/masso" element={<Masso />} />
        <Route path="/dev" element={<EquipeDev/>}/>
        <Route path="/aprov" element={<Aprovacoes/>}/>
        <Route path="/aprovdds" element={<AprovacoesDds/>}/>
        <Route path="/aprovadm" element={<AprovacoesAdm/>}/>
        <Route path="/aprovedf" element={<AprovacoesEdf/>}/>
        <Route path="/aprovmasso" element={<AprovacoesMasso/>}/>
        <Route path="/gestores" element={<Gestores/>}/>
        <Route path="/inscricao" element={<Insc/>}/>
        
      </Routes>

      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;



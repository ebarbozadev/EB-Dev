import NavBar from './componentes/NavBar';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import EditorDeCodigo from './componentes/EditorDeCodigo';

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <NavBar />
    </div>
  );
}
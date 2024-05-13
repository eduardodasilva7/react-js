import './App.css';
import PrimeiroComponente from './componentes/PrimeiroComponente';
// 3 - importando templateexpressions 
import TemplateExpressions from './componentes/TemplateExpressions';


// 2 - exibindo componente importado na tela
function App() {
  return(
    <div className="AppFundamentos">
      <h1>Fundamentos do React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
    </div>
  )
}

export default App;

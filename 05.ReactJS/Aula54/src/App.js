import logo from './logo.svg';
import './App.css';

//Importando um componente externo
import HelloWorldDIO from './components/HelloWorldDIO';
import HelloWprldDIOClass from './components/HelloWorldDIOClass';
import HelloPeople from './components/HelloPeople';
import Calculator from './components/Calculator';
import HelloPerson from './components/HelloPerson';
import HelloCalc from './components/HelloCalc';

//Função que agrupa todos os componentes que serão renderizados
function App() {

  let a = 44
  let b = 99

  let person = {
    name: 'Lucas',
    surName: 'Garcez'
  }

  //Retorno da função 
  return (
    <div className="App">

        {/*Chamando o componente importado */}
        <HelloWorldDIO />

        <HelloWprldDIOClass />

        <HelloPeople name="Lucas" age={27}/>

        <Calculator n1={a} n2={b}/>

        <HelloPerson person={person}/>

        <HelloCalc />
      
    </div>
  );
  }

//Exportar o componente App para ser renderizado
export default App;

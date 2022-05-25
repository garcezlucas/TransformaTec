import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Car'
import PersonRegister from './components/PersonRegister'
import GameScore from './components/GameScore';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Lucas" />
      <Car owner="Lucas Pé de Chumbo q leva multa toda hora"/>
      <PersonRegister name="Lucas" age={27} lastName="Garcez" job="Dev" />
      <GameScore points={0}/>
    </div>
  );
}

export default App;

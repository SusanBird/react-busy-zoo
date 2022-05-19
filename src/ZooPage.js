import './App.css';
import LionUnicornFight from './LionUnicornFight';
import OpenAndClosedSign from './OpenAndClosedSign';
import AnimalParade from './AnimalParade';

function ZooPage() {
  return (
    <div className="App">
      <header className='App-header'>
        <LionUnicornFight />
        <OpenAndClosedSign />
        <AnimalParade />
      </header>
    </div>
  );
}

export default ZooPage;

import React from 'react';
import './App.css';
import './assets/css/main.scss'
import { useModal } from './hooks/useModal';
import { Button } from 'bloomer';

function App() {
  const [isOpened, setIsOpened, toggle] = useModal()

  return (
    <div className="App">
      <header className="App-header">
        <Button isColor='info' onClick={toggle}>Show Modal</Button>
      </header>
    </div>
  );
}

export default App;

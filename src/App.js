import React from 'react';
import './App.css';
import './assets/css/main.scss'
import { useModal } from './hooks';
import { Button } from 'bloomer';
import CustomModal from './components/CustomModal';
import Blog from './components/Blog';

const articles = [
  { id: 1, title: 'Article one', body: 'Lorem ipsum' },
  { id: 2, title: 'Article two', body: 'Lorem ipsum 2' },
  { id: 3, title: 'Article thre', body: 'Lorem ipsum 3' },
  { id: 4, title: 'Article four', body: 'Lorem ipsum 4' },
  { id: 5, title: 'Article five', body: 'Lorem ipsum 5' }
];

function App() {
  const [isOpened, setIsOpened, toggle] = useModal()

  return (
    <div className="App">
      <Blog articles={articles}/>
    </div>
  );
}

export default App;

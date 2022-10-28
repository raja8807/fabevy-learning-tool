import './App.css';
// Hooks
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Chapter from './components/Chapter/Chapter';

import appContext from './context/context';

function App() {

  const [currentChapter,setCurrentChapter] = useState('home')

  return (
    <appContext.Provider value={{currentChapter,setCurrentChapter}}>
      <div className="App">
      <div className='App-wrapper flex'>

        <Sidebar/>

        <div className='App-content'>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='learn/:chapter' element={<Chapter/>}/>
          </Routes>
        </div>

      </div>
    </div>
    </appContext.Provider>
  );
}

export default App;

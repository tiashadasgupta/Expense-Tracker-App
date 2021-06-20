import React from 'react'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExp} from './components/IncomeExp'
import {TransList} from './components/TransList'
import {AddTrans} from './components/AddTrans'
import { GlobalProvider } from './context/GlobalState'

import './App.css';
function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExp/>
        <TransList/>
        <AddTrans/>
      </div>

    </GlobalProvider>
  );
}

export default App;

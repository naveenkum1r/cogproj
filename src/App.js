import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/detail';
import Header from './components/Header';
import Search from './components/search';
import SecondHeader from './components/SecondHeader';
import data from './list.json';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <SecondHeader></SecondHeader>
        <Routes>
          <Route path="/"  element={<Search data={data} />}/>
          <Route path="/details/:id" exact element={<Details data={data}/>}/>
        </Routes>
    </div>
  );
}

export default App;

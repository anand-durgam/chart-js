import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ChartJS from './Components/ChartJS/ChartJS';
import MonthlyGraph from './Components/MonthlyGraph/MonthlyGraph';
import CompareChart from './Components/CompareChart/CompareChart';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/analytics/bar' element={<ChartJS/>} />
        <Route exact path='/analytics/line' element={<MonthlyGraph/>} />
        <Route exact path='/analytics/compare' element={<CompareChart/>} />
      </Routes>
    </BrowserRouter>
)


export default App;

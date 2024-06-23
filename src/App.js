import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/Main';
import { New, Stock, GoodsInStock } from './Components/Navs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/> } >
        <Route index element={<div>No page is selected.</div> } />
        <Route path="new" element={<New />} />
        <Route path="stock" element={<Stock />} />
        <Route path="goods" element={<GoodsInStock />} />
        {/* <Route path="*" element={<NotFound />} />   подстановочный путь */}
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

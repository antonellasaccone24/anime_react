import './App.css';
import Inicio from './paginas/InicioPagina';
import Series from './paginas/SeriesPagina';
import Quotes from './paginas/QuotesPagina';
import Newsletter from './paginas/NewsletterPagina';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/series" element={<Series />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;

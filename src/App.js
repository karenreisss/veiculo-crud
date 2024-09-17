import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AcessorioList from './components/AcessorioList';
import AcessorioForm from './components/AcessorioForm';
import VeiculoList from './components/VeiculoList';
import VeiculoForm from './components/VeiculoForm';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/veiculos">Veiculos</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><Link to="/add-veiculo">Adicionar Veiculo</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><Link to="/acessorios">Acessorios</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><Link to="/add-acessorio">Adicionar Acessorio</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            {/*routes para veiculo*/}
            <Route path="/veiculos" element={<VeiculoList />} />
            <Route path="/add-veiculo" element={<VeiculoForm />} />
            <Route path="/edit-veiculo/:id" element={<VeiculoForm />} />

            {/*routes para acessorio*/}
            <Route path="/acessorios" element={<AcessorioList />} />
            <Route path="/add-acessorio" element={<AcessorioForm />} />
            <Route path="/edit-acessorio/:id" element={<AcessorioForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

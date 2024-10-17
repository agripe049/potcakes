import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from "./components/pages/Dashboard"
import Clientes from "./components/pages/Clientes"
import NovoCliente from "./components/pages/NovoCliente"
import Produtos from "./components/pages/Produtos"
import NovoProduto from "./components/pages/NovoProduto"
import Vendas from "./components/pages/Vendas"
import NovaVenda from "./components/pages/NovaVenda"
import Relatorios from "./components/pages/Relatorios"
import Estoque from "./components/pages/Estoque"
import Ingredientes from "./components/pages/Ingredientes"
import NovoIngrediente from "./components/pages/NovoIngrediente"

import Container from "./components/layout/Container"
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
      <Routes>
        
        <Route exact path="/" element={<Dashboard />}>
        </Route>

        <Route path="/clientes" element={<Clientes />}>
        </Route>

        <Route path="novocliente" element={<NovoCliente />}>
        </Route>

        <Route path="/produtos" element={<Produtos />}>
        </Route>

        <Route path="/novoproduto" element={<NovoProduto />}>
        </Route>

        <Route path="/vendas" element={<Vendas />}>
        </Route>

        <Route path="/novavenda" element={<NovaVenda />}>
        </Route>

        <Route path="/relatorios" element={<Relatorios />}>
        </Route>

        <Route path="estoque" element={<Estoque />}>
        </Route>

        <Route path="ingredientes" element={<Ingredientes />}>
        </Route>

        <Route path="novoingrediente" element={<NovoIngrediente />}>
        </Route>
      </Routes>
      </Container>

    </Router>
  );
}

export default App;

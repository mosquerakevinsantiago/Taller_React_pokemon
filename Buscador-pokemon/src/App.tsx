import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { RegistroUsuario } from './components/RegistroUsuario';
import { BuscadorPokemon } from './components/Buscadorpokemon';
import { InventarioPokemon } from './components/Inventariopokemon';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <div className="app-shell">
          <header className="site-header">
            <p className="eyebrow">Pokemon</p>
            <h1>Registro de entrenadores y Pokémon en React</h1>

            <nav className="main-nav" aria-label="Navegación principal">
              <NavLink to="/registro" className={({ isActive }) => (isActive ? 'nav-link active-tab' : 'nav-link')}>
                Registro
              </NavLink>
              <NavLink to="/buscador" className={({ isActive }) => (isActive ? 'nav-link active-tab' : 'nav-link')}>
                Buscador
              </NavLink>
              <NavLink to="/inventario" className={({ isActive }) => (isActive ? 'nav-link active-tab' : 'nav-link')}>
                Inventario
              </NavLink>
            </nav>
          </header>

          <main className="page-shell">
            <Routes>
              <Route path="/registro" element={<RegistroUsuario />} />
              <Route path="/buscador" element={<BuscadorPokemon />} />
              <Route path="/inventario" element={<InventarioPokemon />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, NavLink,Navigate} from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { RegistroUsuario } from './components/RegistroUsuario';
import { BuscadorPokemon } from './components/Buscadorpokemon';
import { InventarioPokemon } from './components/Inventariopokemon'; 


 function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>

        <header>  
          <h1> Registro de Entrenadores y pokemon en React</h1>
        
          <nav>
            <NavLink to ="/registro" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Registro</NavLink>
            <NavLink to ="/buscador" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Buscador</NavLink>
            <NavLink to ="/inventario" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Inventario</NavLink>
          </nav>
        </header>
        <div>
          <main>
            <Routes>
              <Route path ="/registro"element ={<Navigate to ="/registro"  replace/>}/>
              <Route path ="/buscador"element ={<Navigate to ="/buscador"  replace/>}/>
              <Route path ="/inventario"element ={<Navigate to ="/inventario"  replace/>}/>
            </Routes>
          </main>
        </div>
        <RegistroUsuario />

     </BrowserRouter>
    </PokemonProvider>
    
  );
}

export default App;

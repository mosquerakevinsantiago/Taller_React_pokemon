import { BrowserRouter, Routes, Route, NavLink,Navigate} from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { RegistroUsuario } from './components/RegistroUsuario';
import { BuscadorPokemon } from './components/BuscadorPokemon';
import { InventarioPokemon } from './components/InventarioPokemon'; 


 function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <RegistroUsuario />
        <BuscadorPokemon />
        <InventarioPokemon />
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
            <Routes path ="/registro"element ={<Navigate to ="/registro"  replace/>}/>
            <Routes path ="/buscador"element ={<Navigate to ="/buscador"  replace/>}/>
            <Routes path ="/inventario"element ={<Navigate to ="/inventario"  replace/>}/>
          </main>
        </div>

     </BrowserRouter>
    </PokemonProvider>
    
  );
}

export default App;

import { BrowserRouter} from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import { RegistroUsuario } from './components/RegistroUsuario';
import { BuscadorPokemon } from './components/BuscadorPokemon';
import { InventarioPokemon } from './components/InventarioPokemon'; 


 function App() {
  return (
    <PokemonProvider>
        <RegistroUsuario />
        <BuscadorPokemon />
        <InventarioPokemon />
        <header>  
          <h1> Registro de Entrenadores y pokemon en React</h1>
        </header>

        <nav>
          <NanLink to ="/registro" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Registro</NanLink>
          <NanLink to ="/buscador" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Buscador</NanLink>
          <NanLink to ="/inventario" className={({ isActive }) => (isActive ? 'active-tab' : '')}>Inventario</NanLink>
        </nav>
        <header>
          <main>
            <Router pasth ="/" element ={<Navigate to ="/registro"  replace/>}/>
            <Router path ="/registro"element ={<RegistroUsuario/>}/>
            <Router path ="/buscador"element ={<BuscadorPokemon/>}/>
            <Router path ="/inventario"element ={<InventarioPokemon/>}/>
          </main>
        </header>
     </BrowserRouter>
    </PokemonProvider>
    
  );
}

import React,{ createContext, useContext,useState,useEffect} from "react";

export interface Usuario {
    id: number;
    nombreCompleto: string;
    documento: { tipo: string, numero: string};
    fechaNaciminento:string;
    correo: string;
    datospersonales:boolean;
    fechaRegistro:string;
}

export interface pokemonTarjeta{
    id: number;
    name: string;
    image: string;
    type : string;
    baseExperience: string;
    esFavorito: boolean;
}

interface pokemoncontextype{
    entrenadores : Usuario[];
    entrenadorActivo : Usuario | null;
    mochilaActual :  pokemonTarjeta[];
    seleccionarEntrenador : (Usuario: Usuario) => void;
    registrarEntrenador : (Usuario: Usuario) => void;
    GuardarMochila : (pokemon : pokemonTarjeta) => void;
    actualizarFavorito : (pokemonId : number) => void;
    eliminarpokemon : (pokemonId : number) => void;
}

const pokemoncontext = createContext<pokemoncontextype | undefined>(undefined);

export const pokemonprovider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [entrenadoresActivo,setentrenadoresActivo] = useState<Usuario[]>([]);
    const [entrenadorActivo,setentrenadorActivo] = useState<Usuario[] | null>(null);
    const [mochilaActual,mochilaActual] = useState<pokemonTarjeta[] | null>(null);
    

    useEffect(() => {
        const data = localStorage.getItem('LISTA_ENTRENADORES');
        if(data){
            const LISTA : Usuario []= JSON.parse(data);
            setentrenadoresActivo(LISTA);

            const idActivo = localStorage.getItem('entrenador_Activo_id');
            if (idActivo){
                const encotrado = LISTA.find(U => U.id.toString() === idActivo);
                if (encotrado) seleccionarEntrenador(encotrado)
            }
    },[]);

    const cargarMochilaEntrenador = (UsuarioId: number) =>{
        setentrenadorActivo(usuario);

        const data = localStorage.getItem('mochila_${usuarioId}');
        setcargarMochilaEntrenador(data ? JSON.parse(data) : []);

    }


    const seleccionarEntrenador = (Usuario : Usuario) =>{
        setentrenadorActivo(Usuario);

        localStorage.setItem ('entrenador_activo_id', Usuario.id.toString());
        cargarMochilaEntrenador(Usuario.id);
    }
}

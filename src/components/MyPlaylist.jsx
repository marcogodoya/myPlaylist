/**
* Componente fusion entre Title y Form
*/
import { v4 as uuid } from 'uuid';
import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState } from "react";

export const MyPlaylist = () => {
    const urlRef = useRef();
    const favoriteRef = useRef();
    const [mensaje, setMensaje] = useState('')
    const [playlist, setPlaylist] = useState([{ id:uuid(), url: '1IfdGBB0FWhM38z7s5DuAH', favorite: true },
        { id:uuid(), url: '4a8IlEXVXvZCTp9q1YwZGy', favorite: true },
        { id:uuid(), url: '0BfSiRWo0RiAGhKowhcrxn', favorite: true },
        { id:uuid(), url: '5EqJWItu4GaoyuhEvk7SVK', favorite: true }]);
        const addSong = () => {
            /**
            * Aca capturamos los datos de los inputs previamente enganchados con el hook useRef
            */
            const url = urlRef.current.value;
            const favorite = favoriteRef.current.checked;

            if(url.trim() === ''){
                console.log('campos vacios');
                setMensaje(() => 'Campos vacios');
                setTimeout(() => {
                setMensaje(() => '');
                }, 3000);
                return
                }  
            /**
            * Creamos un nuevo objeto con las propiedades url y favorite.
            */
           setPlaylist(() => {
            const newSong = {
                id: uuid(),
                url: url,
                favorite: favorite
            };
            
      
            /**
            * Añadimos el nuevo objeto a la lista playlist, mas adelante cambiaremos la forma de 
            * agregar elementos a la lista
            */
            const newPlaylist = [...playlist,newSong];
            return newPlaylist;
            });
            
        }
        const removeSong = () => {
            setPlaylist( () => {
                const newPlaylist = playlist.filter((song) => song.favorite === true);
                return newPlaylist
            })
        }
        const setFavorite = (id) => {
            setPlaylist(() => {
            /**
            * Obtenemos el listado actual y buscamos mediante el metodo find la canción
            * con el ID recibido.
            * Mas adelante explicaremos como enviar esta ID
            */
                const newPlaylist = [...playlist];
                const song = newPlaylist.find((song) => song.id === id);
            /**
            * Una vez encontrado el objeto con el metodo find procederemos a cambiar su
            * valor booleano.
            */
                song.favorite = !(song.favorite);
            /**
            * retornamos la lista nueva con el cambio realizado
            */
                return newPlaylist;
            });
        }
    
        return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeholder='Ingrese el codigo del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button className='btn btn-success ms-2' onClick={addSong}><i className="bi bi-plus-circle-fill"></i></button>
                <button onClick={removeSong} className='btn btn-danger ms-2'><i className="bi bi-trash"></i></button>
            </div>
            <div className="alert alert-danger mt-2" role="alert" hidden={!(mensaje)}>
                {mensaje}
            </div>
            <div>
                {
                    playlist.map(song => <SpotifyPlayer song={song}  key={song.id} setFavorite={setFavorite}/>)
                }
            </div>
        </div>
    )
}
/**
* Funcion flecha para agregar nueva cancion 
*/

    
    
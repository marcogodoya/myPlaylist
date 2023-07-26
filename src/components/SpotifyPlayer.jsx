/**
* Playlist component
*/

export const SpotifyPlayer = ({song, setFavorite}) => {
    const {id, url, favorite} = song
    const urlSong = "https://open.spotify.com/embed/album/" + url;
    const newFavorite = () => setFavorite(id)
    /**
    * Render que se ejecuta si el album es favorito
    */
    if (favorite) {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe title={id} src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i className="bi bi-star-fill"></i>
                </button>
            </div>
        )
    } else {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe title={id} src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i className="bi bi-star"></i>
                </button>
            </div>
        )
    }
}
    
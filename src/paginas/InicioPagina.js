import React from "react";

export default class InicioPagina extends React.Component {

    render() {
        return (
            <>
                <div className="mainContainer container-fluid text-center text-md-left">
                    <h2>¡Bienvenidx a AnimeReact!</h2>
                    <p>
                        <span>Disfrutá de esta playlist &nbsp;</span> 
                        <img src="../img/icons/music_icon.svg" alt="Music Icon" />     
                    </p>
                    <iframe title="Chopper Dancing" src="https://giphy.com/embed/n7wjCNgkWik6I" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    <iframe title="Anime Playlist" src="https://open.spotify.com/embed/playlist/1YA5cPIfDy3L03bGnNiDM7?utm_source=generator&theme=0" width="480" height="269" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </>
        );
    }
}
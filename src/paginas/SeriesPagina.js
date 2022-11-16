import React from "react";
import ListaSeries from "../componentes/ListaSeries";

export default class SeriesPagina extends React.Component {

    series = [
        {
            name: "Dragon Ball Z", 
            img: "/img/series/dragon-ball-z.jpg",
            year: "1989",
            studio: "Toei Animation"
        },
        {
            name: "Demon Slayer", 
            img: "/img/series/demon-slayer.jpg",
            year: "2019",
            studio: "Ufotable"
        },
        {
            name: "Bleach", 
            img: "/img/series/bleach.jpg",
            year: "2004",
            studio: "Pierrot"
        },
        {
            name: "Naruto Shippuden", 
            img: "/img/series/naruto-shippuden.jpg",
            year: "2007",
            studio: "Pierrot"
        },
        {
            name: "Fullmetal Alchemist Brotherhood", 
            img: "/img/series/fullmetal-alchemist-brotherhood.jpg",
            year: "2009",
            studio: "BONES"
        },
        {
            name: "Hunter X Hunter", 
            img: "/img/series/hunter-x-hunter.jpg",
            year: "2011",
            studio: "Madhouse"
        },
        {
            name: "Jujutsu Kaisen", 
            img: "/img/series/jujutsu-kaisen.jpg",
            year: "2020",
            studio: "MAPPA"
        },
        {
            name: "Slam Dunk", 
            img: "/img/series/slam-dunk.jpg",
            year: "1993",
            studio: "Toei Animation"
        },
        {
            name: "My Hero Academia", 
            img: "/img/series/my-hero-academia.jpg",
            year: "2016",
            studio: "BONES"
        },
        {
            name: "Spy X Family", 
            img: "/img/series/spy-family.jpg",
            year: "2022",
            studio: "Wit Studio y CloverWorks"
        }
        
    ]

    render() {
        return (
            <>
                <div className="mainContainer container-fluid text-md-left">
                    <h2 className="text-center">Series</h2>
                    <p className="text-center">Elegí tu anime favorito</p>
                    <ListaSeries series={this.series} />
                </div>
            </>
        );
    }
}
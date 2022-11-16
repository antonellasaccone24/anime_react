import React from "react";

export default class QuotesPagina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frases: []
        }
    }

    componentDidMount() {
        fetch("https://animechan.vercel.app/api/quotes")
        .then( res => res.json() )
        .then( (result) => {
            this.setState({
                frases: result
            })
        })
    }

    render() {
        return (
            <>
                <div className="mainContainer container-fluid text-center text-md-left">
                    <h2>¡Obtené inspiración en tiempo real de tus personajes favoritos!</h2>
                    <p>Tomá 10 frases para potenciar tu Ki:</p>
                    <br/>
                    {this.state.frases.map((frase) => (
                        <figure key={frase.quote}>
                            <blockquote className="blockquote">
                                <p>{frase.quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {frase.character} - <cite title="Source Title">{frase.anime}</cite>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </>
        );
    }
}
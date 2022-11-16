import React from "react";

export default class Serie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder(){
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }

    /*d-none*/

    render(){
        return (
            <div className="row"> 
                <div className="col-md-6 offset-sm-4 ml-auto d-flex align-items-center">
                    <img className="my-2 rounded" src={this.props.img} alt={this.props.name}/>
                    <div className="px-4">
                        <h3 className="fw-bold">{this.props.name}</h3>
                        <p><span className="text-decoration-underline">Año:</span>&nbsp;{this.props.year}</p>
                        <p><span className="text-decoration-underline">Animado por:</span>&nbsp;{this.props.studio}</p>
                        <button className={"btn btn-primary " + (this.state.escondido ? 'd-none' : 'd-block')} onClick={this.toggleEsconder}>
                            <img src="./img/icons/heart_icon.svg" alt="Heart Icon" />
                            <span>&nbsp;Añadir a favoritos</span>
                        </button>
                        <button className={"btn btn-danger " + (this.state.escondido ? 'd-block' : 'd-none')} onClick={this.toggleEsconder}>
                            <img src="./img/icons/heart_icon.svg" alt="Heart Icon" />
                            <span>&nbsp;Eliminar de favoritos</span>
                        </button>
                    </div>
                </div>
            </div>
        );
      }
}
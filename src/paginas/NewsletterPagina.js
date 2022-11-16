import React from "react";

export default class NewsletterPagina extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        this.changed = this.changed.bind(this);
        this.submitted = this.submitted.bind(this);
    }

    submitted(event) {
        alert("Recibimos la solicitud de " + this.state.nameField + ", cuya dirección de email es: " + this.state.emailField);
        event.preventDefault();
    }

    changed(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <>
                <div className="mainContainer container-fluid text-center text-md-left">
                    <h2>¡Unite a nuestro Newsletter!</h2>
                    <p>Enterate de nuestras novedades, lanzamientos y ¡mucho más!</p>
                    <form onSubmit={this.submitted}>
                        <div className="form-group mt-4">
                            <label htmlFor="nameInput" className="form-label">Nombre y Apellido</label>
                            <input name="nameField" type="text" className="form-control" id="nameInput" onChange={this.changed} required />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="emailInput" className="form-label">Dirección de Email</label>
                            <input name="emailField" type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" onChange={this.changed} required />
                            <div id="emailHelp" className="form-text">Nunca compartiremos tu email con nadie más.</div>
                        </div>
                        <div className="form-group mt-3 form-check">
                            <input type="checkbox" className="form-check-input" id="termsCheck" required />
                            <label className="form-check-label" htmlFor="termsCheck">He leído y estoy de acuerdo con los <span><a className="termsText" href="#">términos y condiciones</a></span> de la web</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                    </form>
                </div>
            </>
        );
    }
}
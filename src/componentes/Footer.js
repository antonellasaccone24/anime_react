import React from "react";
import './estilos/Footer.css';

export default class Footer extends React.Component {

    render() {
        return (
             <>
                <footer className="page-footer font-small pt-4 bg-dark">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-7 mt-md-0 mt-3">
                                <h5 className="text-uppercase">
                                    <img src="./img/icons/info_icon.svg" alt="Information Icon" />   
                                    <span>Somos</span>
                                </h5>
                                <p>Tu fuente de anime</p>
                            </div>
                            <hr className="clearfix w-100 d-md-none pb-0"/>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">
                                    <img src="./img/icons/streaming_icon.svg" alt="Streaming Icon" />   
                                    <span>Streaming</span>
                                </h5>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.crunchyroll.com/">Crunchyroll</a></li>
                                    <li><a href="https://www.netflix.com/">Netflix</a></li>
                                    <li><a href="https://www.primevideo.com/">Prime Video</a></li>
                                    <li><a href="https://www.hbomax.com/">HBO Max</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2022 Copyright: &nbsp; 
                        <a href="#">Anto X Lumetrio</a>
                    </div>
                </footer>
             </>
        );
    }

}